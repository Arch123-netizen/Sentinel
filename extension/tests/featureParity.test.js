import fs from "fs";
import { extractFeatures } from "../scripts/featureExtractor.js";

const fixturePath = new URL(
    "./fixtures/feature-parity.json",
    import.meta.url
);

const testCases = JSON.parse(
    fs.readFileSync(fixturePath, "utf-8")
);

function createObservation(url) {
    const parsed = new URL(url);

    return {
        fullURL: url,
        protocol: parsed.protocol,
        host: parsed.host,
        pathname: parsed.pathname,
        isHTTPS: parsed.protocol === "https:"
    };
}

function compareFeatures(actual, expected, url) {
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);

    if (actualKeys.length !== expectedKeys.length) {
        throw new Error(
            `${url}: Feature count mismatch. ` +
            `Expected ${expectedKeys.length}, got ${actualKeys.length}`
        );
    }

    for (const key of expectedKeys) {
        if (!(key in actual)) {
            throw new Error(
                `${url}: Missing feature "${key}"`
            );
        }

        if (actual[key] !== expected[key]) {
            throw new Error(
                `${url}: Feature "${key}" mismatch. ` +
                `Expected ${expected[key]}, got ${actual[key]}`
            );
        }
    }
}

for (const testCase of testCases) {
    const observation = createObservation(testCase.url);
    const actualFeatures = extractFeatures(observation);

    compareFeatures(
        actualFeatures,
        testCase.features,
        testCase.url
    );

    console.log(
        `✅ ${testCase.url} — parity passed`
    );
}

console.log(
    `\n✅ All ${testCases.length} URLs passed feature parity`
);