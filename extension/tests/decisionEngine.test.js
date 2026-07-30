import { makeDecision } from "../scripts/engines/decisionEngine.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelPath = path.resolve(
    __dirname,
    "../models/random_forest_v2.onnx"
);

const testURLs = [
    "https://example.com/",
    "https://google.com/",
    "https://github.com/",
    "https://microsoft.com/",
    "https://apple.com/",
    "https://paypal-login.xyz",
    "http://192.168.1.1",
    "https://example.com/login?user=test&id=123",
    "https://example.com/download/file.exe",
    "https://example.top"
];

for (const url of testURLs) {
    const parsedURL = new URL(url);

    const observation = {
        fullURL: url,
        protocol: parsedURL.protocol,
        host: parsedURL.hostname,
        pathname: parsedURL.pathname,
        isHTTPS: parsedURL.protocol === "https:"
    };

    const result = await makeDecision(
        observation,
        modelPath 
    );

    console.log("========================================");
    console.log(`URL: ${url}`);
    console.log(`Rule verdict: ${result.verdict}`);
    console.log(`Rule score: ${result.score}`);
    console.log(`AI prediction: ${result.ai.prediction}`);
    console.log(`AI probability: ${result.ai.phishingProbability}`);
    console.log(`AI verdict: ${result.ai.verdict}`);
    console.log(`AI confidence: ${result.ai.confidence}`);

    if (result.findings.length === 0) {
        console.log("Findings: None");
    } else {
        console.log("Findings:");

        for (const finding of result.findings) {
            console.log(`- ${finding.issue}`);
        }
    }
}

console.log("========================================");
console.log("✅ Decision engine test completed successfully.");