import joblib
import pandas as pd

from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

# Load trained model
model = joblib.load("datasets/models/random_forest_v1.pkl")

# Load feature dataset to determine input dimensions
df = pd.read_csv("datasets/processed/features.csv")

X = df.drop(columns=["label"])

initial_type = [
    ("float_input", FloatTensorType([None, X.shape[1]]))
]

onnx_model = convert_sklearn(
    model,
    initial_types=initial_type
)

with open("datasets/models/random_forest_v1.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())

print("ONNX model exported successfully.")
print(f"Input features: {X.shape[1]}")