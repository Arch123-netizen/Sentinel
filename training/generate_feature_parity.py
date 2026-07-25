import json
from pathlib import Path

from feature_extractor import extract_features


TEST_URLS = [
    "https://example.com",
    "http://example.com",
    "https://paypal-login.xyz",
    "http://192.168.1.1",
    "https://example.com/login?user=test&id=123",
    "https://example.com/page#section",
    "https://example.com/a/b/c/d/e",
    "https://example.com/download/file.exe",
    "https://xn--80ak6aa92e.com",
    "https://example.top",
]


output = []

for url in TEST_URLS:
    output.append({
        "url": url,
        "features": extract_features(url)
    })


output_path = Path(
    "extension/tests/fixtures/feature-parity.json"
)

output_path.parent.mkdir(
    parents=True,
    exist_ok=True
)

with output_path.open("w") as f:
    json.dump(
        output,
        f,
        indent=2
    )

print(
    f"Generated {len(output)} parity test cases."
)

print(
    f"Saved to: {output_path}"
)