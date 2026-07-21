import joblib
import numpy as np
import onnxruntime as ort
import pandas as pd

# Load dataset
df = pd.read_csv("datasets/processed/features.csv")

X = df.drop(columns=["label"])

sample = X.iloc[[0]].astype(np.float32)

# Load original sklearn model
sk_model = joblib.load("datasets/models/random_forest_v1.pkl")
sk_prediction = sk_model.predict(sample)[0]

# Load ONNX model
session = ort.InferenceSession("datasets/models/random_forest_v1.onnx")

input_name = session.get_inputs()[0].name

onnx_prediction = session.run(
    None,
    {
        input_name: sample.values
    }
)

print("Scikit-Learn Prediction:", sk_prediction)
print("ONNX Raw Output:", onnx_prediction)