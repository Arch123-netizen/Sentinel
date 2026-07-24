import { makeDecision } from "../scripts/engines/decisionEngine.js";

const observation = {
    fullURL: "https://paypal-login.xyz",
    protocol: "https:",
    host: "paypal-login.xyz",
    pathname: "/",
    isHTTPS: true
};

const result = makeDecision(observation);

console.log(JSON.stringify(result, null, 2));