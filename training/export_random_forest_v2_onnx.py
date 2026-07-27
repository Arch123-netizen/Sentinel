import joblib
import onnx
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

MODEL = "datasets/models/random_forest_v2.pkl"
OUTPUT = "datasets/models/random_forest_v2.onnx"

# Load trained Random Forest
model = joblib.load(MODEL)

# Verify feature order
print("Model features:")
for i, feature in enumerate(model.feature_names_in_):
    print(f"{i}: {feature}")

# Define ONNX input
initial_type = [
    ("float_input", FloatTensorType([None, model.n_features_in_]))
]

# Convert model
onnx_model = convert_sklearn(
    model,
    initial_types=initial_type,
    options={id(model): {"zipmap": False}}
)

# Save ONNX model
with open(OUTPUT, "wb") as f:
    f.write(onnx_model.SerializeToString())

print()
print(f"Exported ONNX model to {OUTPUT}")