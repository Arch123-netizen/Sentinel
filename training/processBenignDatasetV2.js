import fs from "fs";

const INPUT_FILE = "./datasets/raw/tranco/top-1m.csv";
const OUTPUT_FILE = "./datasets/processed/benign_urls_v2.json";

const data = fs.readFileSync(INPUT_FILE, "utf-8");
const rows = data.trim().split("\n");

const variants = [
    domain => `https://${domain}`,
    domain => `https://${domain}/`,
    domain => `https://${domain}/about`,
    domain => `https://${domain}/contact`,
    domain => `https://${domain}/products`,
    domain => `https://${domain}/search?q=test`,
    domain => `https://${domain}/page?id=123`,
    domain => `https://${domain}/login`,
    domain => `https://www.${domain}/`,
];

const benignURLs = [];

for (const row of rows.slice(0, 10000)) {
    const [, domain] = row.split(",");

    if (!domain) continue;

    for (const variant of variants) {
        benignURLs.push({
            url: variant(domain.trim()),
            label: 0
        });
    }
}

fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(benignURLs, null, 2)
);

console.log(`Saved ${benignURLs.length} benign URLs.`);
