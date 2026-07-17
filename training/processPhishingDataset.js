import fs from "fs";

const INPUT_FILE = "./datasets/raw/online-valid.csv";
const OUTPUT_FILE = "./datasets/processed/phishing_urls.json";

const data = fs.readFileSync(INPUT_FILE, "utf8");

const lines = data.trim().split("\n");

// Skip the header
const rows = lines.slice(1);

const phishingURLs = rows.map(row => {
    const columns = row.split(",");

    return {
        url: columns[1],
        label: 1
    };
});

fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(phishingURLs, null, 2)
);

console.log(`Saved ${phishingURLs.length} phishing URLs.`);