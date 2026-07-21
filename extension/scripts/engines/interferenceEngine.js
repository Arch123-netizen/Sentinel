import * as ort from "onnxruntime-web";

let session = null;

export async function loadModel() {
    if (session) return session;

    session = await ort.InferenceSession.create(
        chrome.runtime.getURL("models/random_forest_v1.onnx")
    );

    console.log("Sentinel AI model loaded.");

    return session;
}