import * as ort from "onnxruntime-web";
import { extractFeatures } from "../featureExtractor.js";

let session = null;

async function loadModel(modelUrl) {
    if (session) {
        return session;
    }

    session = await ort.InferenceSession.create(modelUrl);

    console.log("Sentinel Random Forest V2 loaded.");

    return session;
}

export async function analyzeWithAI(observation, modelUrl) {
    const model = await loadModel(modelUrl);

    const features = extractFeatures(observation);

    const inputData = Float32Array.from([
        features.https,
        features.urlLength,
        features.hostLength,
        features.pathLength,
        features.queryLength,
        features.fragmentLength,
        features.subdomains,
        features.parameterCount,
        features.urlEndsWithSlash,
        features.digitCount,
        features.letterCount,
        features.hyphenCount,
        features.underscoreCount,
        features.specialCharacterCount,
        features.usesIPAddress,
        features.dotCount,
        features.containsWWW,
        features.containsXN,
        features.hostnameEntropy,
        features.suspiciousTLD,
        features.directoryDepth,
        features.longestPathSegment,
        features.containsEmailSymbol,
        features.keywordMatches,
        features.containsExecutableExtension
    ]);

    const inputTensor = new ort.Tensor(
        "float32",
        inputData,
        [1, 25]
    );

    const results = await model.run({
        float_input: inputTensor
    });

    const labelData = results.label.data;
    const probabilityData = results.probabilities.data;

    const prediction = Number(labelData[0]);

    const phishingProbability =
        Number(probabilityData[1]);

    const confidence = prediction === 1
        ? phishingProbability
        : 1 - phishingProbability;

    return {
        prediction,

        phishingProbability,

        verdict: prediction === 1
            ? "Phishing"
            : "Safe",

        confidence,

        source: "Random Forest V2 ONNX",

        features
    };
}