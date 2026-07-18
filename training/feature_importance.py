import joblib
import pandas as pd

model = joblib.load("datasets/models/random_forest_v1.pkl")

df = pd.read_csv("datasets/processed/features.csv")

X = df.drop(columns=["label"])

importance = pd.DataFrame({
    "Feature": X.columns,
    "Importance": model.feature_importances_
})

importance = importance.sort_values(
    by="Importance",
    ascending=False
)

print(importance)