import json
import pandas as pd

from feature_extractor import extract_features

INPUT = "datasets/processed/training_dataset.json"
OUTPUT = "datasets/processed/features.csv"

with open(INPUT, "r") as f:
    urls = json.load(f)

rows = []

for sample in urls:
    features = extract_features(sample["url"])
    features["label"] = sample["label"]
    rows.append(features)

df = pd.DataFrame(rows)

df.to_csv(OUTPUT, index=False)

print(df.head())
print()
print(f"Generated {len(df)} feature vectors.")