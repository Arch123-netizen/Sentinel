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

const suspiciousTLDObservation = {
    fullURL: "https://example.xyz",
    host: "example.xyz",
    protocol: "https:",
    isHTTPS: true
};

runTest(
    "Suspicious TLD",
    suspiciousTLDObservation,
    {
        score: 10,
        verdict: "Low risk",
        findings: 1
    }
);

const keywordObservation = {
    fullURL: "https://example.com/login",
    host: "example.com",
    protocol: "https:",
    isHTTPS: true
};

runTest(
    "Suspicious Keyword",
    keywordObservation,
    {
        score: 10,
        verdict: "Low risk",
        findings: 1
    }
);

const compoundObservation = {
    fullURL: "http://paypal-login.xyz",
    host: "paypal-login.xyz",
    protocol: "http:",
    isHTTPS: false
};

runTest(
    "Compound Suspicious URL",
    compoundObservation,
    {
        score: 70,
        verdict: "Suspicious",
        findings: 4
    }
);

const longURLObservation = {
    fullURL: "https://example.com/this-is-a-very-long-path-that-is-definitely-more-than-seventy-five-characters",
    host: "example.com",
    protocol: "https:",
    isHTTPS: true
};

runTest(
    "Long URL",
    longURLObservation,
    {
        score: 15,
        verdict: "Low risk",
        findings: 1
    }
);