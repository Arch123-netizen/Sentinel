import { analyzeObservation} from "../scripts/analysis.js";

function runTest(name, observation, expected) {
    const report = analyzeObservation(observation);

    if (report.score !== expected.score) {
        throw new Error(`${name}: Expected score ${expected.score}, got ${report.score}`);
    }

    if (report.verdict !== expected.verdict) {
        throw new Error(`${name}: Expected verdict "${expected.verdict}", got "${report.verdict}"`);
    }

    if (report.findings.length !== expected.findings) {
        throw new Error(`${name}: Expected ${expected.findings} findings, got ${report.findings.length}`);
    }

    console.log(`✅ ${name} passed`);
}

const observation = {
    fullURL: "http://example.com",
    host: "example.com",
    protocol: "http:",
    isHTTPS: false
};

runTest(
    "HTTP Website",
    observation,
    {
        score: 30,
        verdict: "Low risk",
        findings: 1
    }
);

const secureObservation = {
    fullURL: "https://github.com",
    host: "github.com",
    protocol: "https:",
    isHTTPS: true
};

runTest(
    "HTTPS Website",
    secureObservation,
    {
        score: 0,
        verdict: "Safe",
        findings: 0
    }
);

const ipObservation = {
    fullURL: "https://192.168.1.1",
    host: "192.168.1.1",
    protocol: "http:",
    isHTTPS: false
};

runTest(
    "IP Address Website",
    ipObservation,
    {
        score: 55,
        verdict: "Suspicious",
        findings: 2
    }
);

const brandObservation ={
    fullURL: "https://paypal-login.xyz",
    host: "paypal-login.xyz",
    protocol: "https:",
    isHTTPS: true
};

runTest(
    "Brand Impersonation",
    brandObservation,
    {
        score: 40,
        verdict: "Low risk",
        findings: 3
    }
);
