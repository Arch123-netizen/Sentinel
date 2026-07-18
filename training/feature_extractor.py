from urllib.parse import urlparse
import re

SUSPICIOUS_KEYWORDS = [
    "login",
    "verify",
    "secure",
    "account",
    "update",
    "password",
    "bank",
    "signin",
    "confirm"
]

SUSPICIOUS_TLDS = {
    "zip",
    "click",
    "xyz",
    "top",
    "mov"
}

IP_PATTERN = re.compile(r"^\d{1,3}(\.\d{1,3}){3}$")


def extract_features(url):
    parsed = urlparse(url)

    host = parsed.hostname or ""
    path = parsed.path or ""

    url_lower = url.lower()
    host_lower = host.lower()

    tld = host_lower.split(".")[-1] if "." in host_lower else ""

    return {
        "https": 1 if parsed.scheme == "https" else 0,
        "urlLength": len(url_lower),
        "hostLength": len(host_lower),
        "pathLength": len(path),
        "subdomains": max(len(host_lower.split(".")) - 2, 0),
        "usesIPAddress": 1 if IP_PATTERN.match(host_lower) else 0,
        "digitCount": sum(c.isdigit() for c in url_lower),
        "hyphenCount": url_lower.count("-"),
        "underscoreCount": url_lower.count("_"),
        "dotCount": host_lower.count("."),
        "keywordMatches": sum(
            keyword in url_lower
            for keyword in SUSPICIOUS_KEYWORDS
        ),
        "suspiciousTLD": 1 if tld in SUSPICIOUS_TLDS else 0,
    }