import fs from "fs";

const phishing = JSON.parse(
    fs.readFileSync("./datasets/processed/phishing_urls.json", "utf8")
);

const benign = JSON.parse(
    fs.readFileSync("./datasets/processed/benign_urls.json", "utf8")
);

const combined = [...phishing, ...benign];

// Fisher–Yates shuffle
for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
}

fs.writeFileSync(
    "./datasets/processed/training_dataset.json",
    JSON.stringify(combined, null, 2)
);

console.log(`Training dataset contains ${combined.length} samples.`);