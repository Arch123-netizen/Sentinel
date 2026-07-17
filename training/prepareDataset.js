import fs from "fs";

const INPUT_FILE = "./datasets/raw/online-valid.csv";

try {
    const data = fs.readFileSync(INPUT_FILE, "utf8");

    const lines = data.split("\n");

    console.log(`Loaded ${lines.length - 1} phishing URLs.`);
} catch (error) {
    console.error(error);
}