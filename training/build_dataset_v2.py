import json
import random

BENIGN = "datasets/processed/benign_urls_v2.json"
PHISHING = "datasets/processed/phishing_urls.json"
OUTPUT = "datasets/processed/training_dataset_v2.json"

with open(BENIGN) as f:
    benign = json.load(f)

with open(PHISHING) as f:
    phishing = json.load(f)

# Remove duplicate URLs
benign = list({x["url"]: x for x in benign}.values())
phishing = list({x["url"]: x for x in phishing}.values())

# Balance classes
n = min(len(benign), len(phishing))

random.seed(42)

benign = random.sample(benign, n)
phishing = random.sample(phishing, n)

dataset = benign + phishing

random.shuffle(dataset)

with open(OUTPUT, "w") as f:
    json.dump(dataset, f, indent=2)

print(f"Benign: {len(benign)}")
print(f"Phishing: {len(phishing)}")
print(f"Total: {len(dataset)}")
print(f"Unique URLs: {len(set(x['url'] for x in dataset))}")
