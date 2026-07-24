import { extractFeatures } from "../scripts/featureExtractor.js";

const observation = {
    fullURL: "https://paypal-login.xyz",
    protocol: "https:",
    host: "paypal-login.xyz",
    pathname: "/",
    isHTTPS: true
};

const features = extractFeatures(observation);

const expectedFeatures = [
    "https",
    "urlLength",
    "hostLength",
    "pathLength",
    "queryLength",
    "fragmentLength",
    "subdomains",
    "parameterCount",
    "urlEndsWithSlash",
    "digitCount",
    "letterCount",
    "hyphenCount",
    "underscoreCount",
    "specialCharacterCount",
    "usesIPAddress",
    "dotCount",
    "containsWWW",
    "containsXN",
    "hostnameEntropy",
    "suspiciousTLD",
    "directoryDepth",
    "longestPathSegment",
    "containsEmailSymbol",
    "keywordMatches",
    "containsExecutableExtension"
];

const actualFeatures = Object.keys(features);

if (actualFeatures.length !== expectedFeatures.length) {
    throw new Error(
        `Expected ${expectedFeatures.length} features, got ${actualFeatures.length}`
    );
}

for (let i = 0; i < expectedFeatures.length; i++) {
    if (actualFeatures[i] !== expectedFeatures[i]) {
        throw new Error(
            `Feature order mismatch at position ${i + 1}: ` +
            `expected "${expectedFeatures[i]}", ` +
            `got "${actualFeatures[i]}"`
        );
    }
}

console.log("✅ Feature count passed");
console.log("✅ Feature names passed");
console.log("✅ Feature order passed");
console.log("✅ All 25 features match the training schema");