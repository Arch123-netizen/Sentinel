import joblib
import json
import pandas as pd

from feature_extractor import extract_features


MODEL_PATH = "datasets/models/random_forest_v1.pkl"
FIXTURE_PATH = "extension/tests/fixtures/feature-parity.json"


model = joblib.load(MODEL_PATH)

with open(FIXTURE_PATH, "r") as f:
    test_cases = json.load(f)


feature_order = list(model.feature_names_in_)

print(f"Model expects {len(feature_order)} features.")
print(f"Classes: {model.classes_}")
print()


for test_case in test_cases:
    url = test_case["url"]

    features = extract_features(url)

    X = pd.DataFrame(
        [[features[name] for name in feature_order]],
        columns=feature_order
    )

    prediction = model.predict(X)[0]
    probabilities = model.predict_proba(X)[0]

    confidence = probabilities[prediction]

    label = (
        "Safe"
        if prediction == 0
        else "Phishing"
    )

    print(
        f"{label:8} | "
        f"prediction={prediction} | "
        f"confidence={confidence:.4f} | "
        f"{url}"
    )