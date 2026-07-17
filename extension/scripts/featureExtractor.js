const SUSPICIOUS_KEYWORDS = [
    "login",
    "verify",
    "secure",
    "account",
    "update",
    "password",
    "bank",
    "signin",
    "confirm"
];

const SUSPICIOUS_TLDS = [
    "zip",
    "click",
    "xyz",
    "top",
    "mov"
];

export function extractFeatures(observation) {
    const url = observation.fullURL.toLowerCase();
    const host = observation.host.toLowerCase();

    const digitCount = (url.match(/\d/g) || []).length;
    const hyphenCount = (url.match(/-/g) || []).length;
    const underscoreCount = (url.match(/_/g) || []).length;
    const dotCount = (host.match(/\./g) || []).length;

    const keywordMatches = SUSPICIOUS_KEYWORDS.filter(keyword =>
        url.includes(keyword)
    ).length;

    const tld = host.split(".").pop();

    return {
        https: observation.isHTTPS ? 1 : 0,
        urlLength: url.length,
        hostLength: host.length,
        pathLength: observation.pathname.length,
        subdomains: Math.max(host.split(".").length - 2, 0),
        usesIPAddress: /^\d{1,3}(\.\d{1,3}){3}$/.test(host) ? 1 : 0,
        digitCount,
        hyphenCount,
        underscoreCount,
        dotCount,
        keywordMatches,
        suspiciousTLD: SUSPICIOUS_TLDS.includes(tld) ? 1 : 0
    };
}