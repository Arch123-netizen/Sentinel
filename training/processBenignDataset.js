import fs from "fs";

const INPUT_FILE = "./datasets/raw/top-1m.csv";
const OUTPUT_FILE = "./datasets/processed/benign_urls.json";

const data = fs.readFileSync(INPUT_FILE, "utf-8");

const rows = data.trim().split("\n");

// We'll use the first 64,804 entries to match the phishing dataset.
const benignURLs = rows.slice(0, 64804).map(row => {
    const [, domain] = row.split(",");

    return {
        url: `https://${domain}/`,
        label: 0
    };
});

fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(benignURLs, null, 2)
);

console.log(`Saved ${benignURLs.length} benign URLs.`);