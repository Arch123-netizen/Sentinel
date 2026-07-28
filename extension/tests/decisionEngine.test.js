import { makeDecision } from "../scripts/engines/decisionEngine.js";

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

    const result = makeDecision(observation);

    console.log("========================================");
    console.log(`URL: ${url}`);
    console.log(`Rule verdict: ${result.verdict}`);
    console.log(`Rule score: ${result.score}`);

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