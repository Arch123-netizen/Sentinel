from urllib.parse import urlparse
import math
import re
from collections import Counter

SUSPICIOUS_KEYWORDS = [
    "login", "verify", "secure", "account",
    "update", "password", "bank",
    "signin", "confirm"
]

SUSPICIOUS_TLDS = {
    "zip", "click", "xyz", "top", "mov"
}

EXECUTABLE_EXTENSIONS = {
    ".exe", ".zip", ".rar", ".scr", ".bat", ".cmd"
}

IP_PATTERN = re.compile(r"^\d{1,3}(\.\d{1,3}){3}$")


def shannon_entropy(text):
    if not text:
        return 0

    counts = Counter(text)
    length = len(text)

    entropy = 0

    for count in counts.values():
        p = count / length
        entropy -= p * math.log2(p)

    return entropy


def extract_url_features(parsed, url_lower, host_lower):
    return {
        "https": 1 if parsed.scheme == "https" else 0,
        "urlLength": len(url_lower),
        "hostLength": len(host_lower),
        "pathLength": len(parsed.path),
        "queryLength": len(parsed.query),
        "fragmentLength": len(parsed.fragment),
        "subdomains": max(len(host_lower.split(".")) - 2, 0),
        "parameterCount": parsed.query.count("&") + (1 if parsed.query else 0),
        "urlEndsWithSlash": int(url_lower.endswith("/")),
    }


def extract_character_features(url_lower):
    letters = sum(c.isalpha() for c in url_lower)
    digits = sum(c.isdigit() for c in url_lower)

    return {
        "digitCount": digits,
        "letterCount": letters,
        "hyphenCount": url_lower.count("-"),
        "underscoreCount": url_lower.count("_"),
        "specialCharacterCount": sum(
            not c.isalnum() for c in url_lower
        ),
    }


def extract_domain_features(host_lower):
    tld = host_lower.split(".")[-1] if "." in host_lower else ""

    return {
        "usesIPAddress": int(IP_PATTERN.match(host_lower) is not None),
        "dotCount": host_lower.count("."),
        "containsWWW": int(host_lower.startswith("www")),
        "containsXN": int("xn--" in host_lower),
        "hostnameEntropy": shannon_entropy(host_lower),
        "suspiciousTLD": int(tld in SUSPICIOUS_TLDS),
    }


def extract_path_features(parsed, url_lower):
    segments = [s for s in parsed.path.split("/") if s]

    longest = max((len(s) for s in segments), default=0)

    return {
        "directoryDepth": len(segments),
        "longestPathSegment": longest,
        "containsEmailSymbol": int("@" in url_lower),
        "keywordMatches": sum(
            keyword in url_lower
            for keyword in SUSPICIOUS_KEYWORDS
        ),
        "containsExecutableExtension": int(
            any(
                parsed.path.endswith(ext)
                for ext in EXECUTABLE_EXTENSIONS
            )
        ),
    }


def extract_features(url):
    parsed = urlparse(url)

    host_lower = (parsed.hostname or "").lower()
    url_lower = url.lower()

    features = {}

    features.update(
        extract_url_features(parsed, url_lower, host_lower)
    )

    features.update(
        extract_character_features(url_lower)
    )

    features.update(
        extract_domain_features(host_lower)
    )

    features.update(
        extract_path_features(parsed, url_lower)
    )

    return features