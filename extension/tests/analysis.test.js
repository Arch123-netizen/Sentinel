import { analyzeObservation} from "../scripts/analysis.js";

const observation = {
    fullURL: "http://example.com",
    host: "example.com",
    protocol: "http:",
    isHTTPS: false
};

const report = analyzeObservation(observation);

if (report.score !== 30) {
    throw new Error("HTTPS score test failed.");
}

if (report.verdict !== "Low risk") {
    throw new Error("Verdict test failed.");
}

if (report.findings.length !== 1) {
    throw new Error("Finding count test failed.");
}

console.log("✅ HTTPS test passed.");