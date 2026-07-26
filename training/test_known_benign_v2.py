import joblib
import pandas as pd

from feature_extractor import extract_features

MODEL = "datasets/models/random_forest_v2.pkl"

URLS = [
    "https://example.com/",
    "https://google.com/",
    "https://github.com/",
    "https://microsoft.com/",
    "https://apple.com/",
    "https://amazon.com/",
    "https://cloudflare.com/",
    "https://youtube.com/",
]

model = joblib.load(MODEL)

df = pd.DataFrame([
    extract_features(url)
    for url in URLS
])

predictions = model.predict(df)
probabilities = model.predict_proba(df)[:, 1]

for url, prediction, probability in zip(
    URLS,
    predictions,
    probabilities
):
    print(
        f"{url} | "
        f"prediction={prediction} | "
        f"phishing_probability={probability:.4f}"
    )
