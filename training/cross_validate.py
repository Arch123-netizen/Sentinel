import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import StratifiedKFold, cross_validate

df = pd.read_csv("datasets/processed/features.csv")

X = df.drop(columns=["label"])
y = df["label"]

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
    n_jobs=-1
)

cv = StratifiedKFold(
    n_splits=5,
    shuffle=True,
    random_state=42
)

scores = cross_validate(
    model,
    X,
    y,
    cv=cv,
    scoring=[
        "accuracy",
        "precision",
        "recall",
        "f1"
    ]
)

for metric in [
    "test_accuracy",
    "test_precision",
    "test_recall",
    "test_f1"
]:
    print(
        f"{metric}: "
        f"{scores[metric].mean():.4f} "
        f"(± {scores[metric].std():.4f})"
    )