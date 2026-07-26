import json
import pandas as pd

from feature_extractor import extract_features

INPUT = "datasets/processed/training_dataset_v2.json"
OUTPUT = "datasets/processed/features_v2.csv"

with open(INPUT, "r") as f:
    urls = json.load(f)

rows = []

for sample in urls:
    features = extract_features(sample["url"])
    features["label"] = sample["label"]
    rows.append(features)

df = pd.DataFrame(rows)

df.to_csv(OUTPUT, index=False)

print(f"Generated {len(df)} feature vectors.")
print(f"Feature count: {len(df.columns) - 1}")
print()
print(df.groupby("label").size())
print()
print(df.groupby("label")["https"].mean())
