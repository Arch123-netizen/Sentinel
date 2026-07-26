import joblib
import numpy as np
import onnxruntime as ort
import pandas as pd

from feature_extractor import extract_features


MODEL = "datasets/models/random_forest_v2.pkl"
ONNX_MODEL = "datasets/models/random_forest_v2.onnx"

URLS = [
    "https://example.com/",
    "https://google.com/",
    "https://github.com/",
    "https://paypal-login.xyz",
    "http://192.168.1.1",
    "https://example.com/login?user=test&id=123",
    "https://example.com/page#section",
    "https://example.com/a/b/c/d/e",
    "https://example.com/download/file.exe",
    "https://example.top",
]


# -----------------------------
# Load Python Random Forest
# -----------------------------

model = joblib.load(MODEL)

print("Python model loaded.")
print("Features:", model.n_features_in_)


# -----------------------------
# Load ONNX model
# -----------------------------

session = ort.InferenceSession(ONNX_MODEL)

input_name = session.get_inputs()[0].name

print("ONNX model loaded.")
print("Input:", input_name)


# -----------------------------
# Extract features
# -----------------------------

df = pd.DataFrame([
    extract_features(url)
    for url in URLS
])

X = df[model.feature_names_in_].astype(np.float32)


# -----------------------------
# Python predictions
# -----------------------------

python_predictions = model.predict(X)

python_probabilities = model.predict_proba(X)[:, 1]


# -----------------------------
# ONNX predictions
# -----------------------------

onnx_outputs = session.run(
    None,
    {
        input_name: X.to_numpy()
    }
)


# Extract probability output
onnx_probability_output = onnx_outputs[1]

onnx_probabilities = []

for probability in onnx_probability_output:

    if isinstance(probability, dict):

        onnx_probabilities.append(
            float(probability.get(1, 0.0))
        )

    else:

        onnx_probabilities.append(
            float(probability)
        )


onnx_probabilities = np.array(
    onnx_probabilities
)


# Derive prediction from probability
onnx_predictions = np.array([
    1 if probability >= 0.5 else 0
    for probability in onnx_probabilities
])


# -----------------------------
# Compare results
# -----------------------------

all_match = True

for i, url in enumerate(URLS):

    prediction_match = (
        python_predictions[i]
        == onnx_predictions[i]
    )

    probability_match = np.isclose(
        python_probabilities[i],
        onnx_probabilities[i],
        atol=1e-5
    )

    match = (
        prediction_match
        and probability_match
    )

    if not match:
        all_match = False

    print(
        f"{'✅' if match else '❌'} {url}"
    )

    print(
        f"   Python: "
        f"prediction={python_predictions[i]}, "
        f"probability={python_probabilities[i]:.6f}"
    )

    print(
        f"   ONNX:   "
        f"prediction={onnx_predictions[i]}, "
        f"probability={onnx_probabilities[i]:.6f}"
    )


print()

if all_match:

    print(
        "✅ Python Random Forest and ONNX predictions match."
    )

else:

    print(
        "❌ Python and ONNX predictions do not fully match."
    )

