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

const EXECUTABLE_EXTENSIONS = [
    ".exe",
    ".zip",
    ".rar",
    ".scr",
    ".bat",
    ".cmd"
];

const IP_PATTERN = /^\d{1,3}(\.\d{1,3}){3}$/;


function shannonEntropy(text) {
    if (!text) {
        return 0;
    }

    const counts = {};

    for (const character of text) {
        counts[character] = (counts[character] || 0) + 1;
    }

    const length = text.length;
    let entropy = 0;

    for (const count of Object.values(counts)) {
        const p = count / length;
        entropy -= p * Math.log2(p);
    }

    return entropy;
}


export function extractFeatures(observation) {
    const url = observation.fullURL.toLowerCase();
    const host = observation.host.toLowerCase();
    const pathname = observation.pathname || "";

    const urlObject = new URL(url);

    /*
     * URL FEATURES
     */

    const query = urlObject.search.startsWith("?")
        ? urlObject.search.slice(1)
        : urlObject.search;

    const fragment = urlObject.hash.startsWith("#")
        ? urlObject.hash.slice(1)
        : urlObject.hash;

    const parameterCount = query
        ? query.split("&").length
        : 0;

    /*
     * CHARACTER FEATURES
     */

    let digitCount = 0;
    let letterCount = 0;

    for (const character of url) {
        if (/[0-9]/.test(character)) {
            digitCount++;
        }

        if (/[a-zA-Z]/.test(character)) {
            letterCount++;
        }
    }

    const hyphenCount = (url.match(/-/g) || []).length;
    const underscoreCount = (url.match(/_/g) || []).length;

    const specialCharacterCount = [...url].filter(
        character => !/[a-zA-Z0-9]/.test(character)
    ).length;

    /*
     * DOMAIN FEATURES
     */

    const tld = host.includes(".")
        ? host.split(".").pop()
        : "";

    const usesIPAddress = IP_PATTERN.test(host)
        ? 1
        : 0;

    const dotCount = (host.match(/\./g) || []).length;

    const containsWWW = host.startsWith("www")
        ? 1
        : 0;

    const containsXN = host.includes("xn--")
        ? 1
        : 0;

    const suspiciousTLD = SUSPICIOUS_TLDS.includes(tld)
        ? 1
        : 0;

    /*
     * PATH FEATURES
     */

    const segments = pathname
        .split("/")
        .filter(segment => segment.length > 0);

    const directoryDepth = segments.length;

    const longestPathSegment = Math.max(
        ...segments.map(segment => segment.length),
        0
    );

    /*
     * SUSPICIOUS KEYWORDS
     */

    const keywordMatches = SUSPICIOUS_KEYWORDS.filter(
        keyword => url.includes(keyword)
    ).length;

    /*
     * EXECUTABLE EXTENSION
     */

    const containsExecutableExtension =
        EXECUTABLE_EXTENSIONS.some(
            extension => pathname.endsWith(extension)
        )
        ? 1
        : 0;

    /*
     * RETURN FEATURES
     *
     * IMPORTANT:
     * The order here MUST match
     * training/feature_extractor.py
     */

    return {
        https: observation.isHTTPS ? 1 : 0,
        urlLength: url.length,
        hostLength: host.length,
        pathLength: pathname.length,
        queryLength: query.length,
        fragmentLength: fragment.length,
        subdomains: Math.max(
            host.split(".").length - 2,
            0
        ),
        parameterCount,
        urlEndsWithSlash: url.endsWith("/") ? 1 : 0,

        digitCount,
        letterCount,
        hyphenCount,
        underscoreCount,
        specialCharacterCount,

        usesIPAddress,
        dotCount,
        containsWWW,
        containsXN,
        hostnameEntropy: shannonEntropy(host),
        suspiciousTLD,

        directoryDepth,
        longestPathSegment,
        containsEmailSymbol: url.includes("@") ? 1 : 0,
        keywordMatches,
        containsExecutableExtension
    };
}