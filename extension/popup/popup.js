import { makeDecision } from "../scripts/engines/decisionEngine.js";
import { getCurrentObservation } from "../scripts/observation.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const observation = await getCurrentObservation();
        const report = makeDecision(observation);

        document.getElementById("website").textContent =
            observation.host;

        document.getElementById("protocol").textContent =
            observation.protocol.toUpperCase();

        document.getElementById("https").textContent =
            observation.isHTTPS ? "Yes ✅" : "No ❌";

        document.getElementById("score").textContent =
            report.score;

        document.getElementById("verdict").textContent =
            report.verdict;

        const findingsElement = document.getElementById("findings");

        if (report.findings.length === 0) {
            findingsElement.textContent = "No issues detected.";
        } else {
            findingsElement.textContent = report.findings
                .map(finding =>
`Issue: ${finding.issue}

Why: ${finding.reason}

Recommendation: ${finding.recommendation}`
                )
                .join("\n\n");
        }

    } catch (error) {
        console.error("Sentinel Error:", error);
    }
});