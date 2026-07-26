import joblib
import pandas as pd

MODEL = "datasets/models/random_forest_v2.pkl"

model = joblib.load(MODEL)

importance = pd.DataFrame({
    "Feature": model.feature_names_in_,
    "Importance": model.feature_importances_
}).sort_values("Importance", ascending=False)

print(importance.to_string(index=False))
