import joblib
import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)
from sklearn.model_selection import train_test_split

INPUT = "datasets/processed/features_v2.csv"
OUTPUT = "datasets/models/random_forest_v2.pkl"

df = pd.read_csv(INPUT)

X = df.drop(columns=["label"])
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

model = RandomForestClassifier(
    n_estimators=300,
    random_state=42,
    n_jobs=-1
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

print(f"Accuracy : {accuracy_score(y_test, predictions):.4f}")
print(f"Precision: {precision_score(y_test, predictions):.4f}")
print(f"Recall   : {recall_score(y_test, predictions):.4f}")
print(f"F1 Score : {f1_score(y_test, predictions):.4f}")

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, predictions))

joblib.dump(model, OUTPUT)

print(f"\nRandom Forest V2 saved to {OUTPUT}")
