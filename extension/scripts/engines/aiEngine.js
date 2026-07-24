import { extractFeatures } from "../featureExtractor.js";

export function analyzeWithAI(observation) {
    const features = extractFeatures(observation);

    // Temporary AI score
    let score = 0;

    if (!features.https) score += 20;
    if (features.urlLength > 75) score += 10;
    if (features.usesIPAddress) score += 20;
    if (features.subdomains > 3) score += 10;

    return {
        score,
        findings: [],
        verdict: score >= 40 ? "Suspicious" : "Safe",
        confidence: 0.60,
        source: "Temporary AI Heuristic",
        features
    };
}