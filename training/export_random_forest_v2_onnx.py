import joblib
import numpy as np
import onnx
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

MODEL = "datasets/models/random_forest_v2.pkl"
OUTPUT = "datasets/models/random_forest_v2.onnx"

model = joblib.load(MODEL)

initial_type = [
    ("float_input", FloatTensorType([None, model.n_features_in_]))
]

onnx_model = convert_sklearn(
    model,
    initial_types=initial_type
)

with open(OUTPUT, "wb") as f:
    f.write(onnx_model.SerializeToString())

print(f"Exported ONNX model to {OUTPUT}")
