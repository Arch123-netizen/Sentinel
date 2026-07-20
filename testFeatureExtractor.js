import { extractFeatures } from "./src/features/featureExtractor.js";

const url =
    "https://paypal-login-secure-account.click/login/update?user=test";

const features = extractFeatures(url);

console.table(features);