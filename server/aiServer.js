import http from "node:http";
import { analyzeWithAI } from "../extension/scripts/engines/aiEngineNode.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelPath = path.resolve(
    __dirname,
    "../extension/models/random_forest_v2.onnx"
);

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method !== "POST" || req.url !== "/analyze") {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            error: "Not found"
        }));

        return;
    }

    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", async () => {
        try {
            const observation = JSON.parse(body);

            const result = await analyzeWithAI(
                observation,
                modelPath
            );

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(result));

        } catch (error) {
            console.error("AI Server Error:", error);

            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                error: "AI analysis failed"
            }));
        }
    });
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(
        `Sentinel AI Server running at http://127.0.0.1:${PORT}`
    );
});