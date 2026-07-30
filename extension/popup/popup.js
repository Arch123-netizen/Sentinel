import { makeDecision } from "../scripts/engines/decisionEngine.js";
import { getCurrentObservation } from "../scripts/observation.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const observation =
            await getCurrentObservation();

        const report =
            await makeDecision(observation);

        /*
         * Website Information
         */

        document.getElementById("website").textContent =
            observation.host;

        document.getElementById("protocol").textContent =
            observation.protocol
                .replace(":", "")
                .toUpperCase();

        document.getElementById("https").textContent =
            observation.isHTTPS
                ? "Yes ✅"
                : "No ❌";

        /*
         * Overall Sentinel Assessment
         */

        document.getElementById("verdict").textContent =
            report.verdict;

        document.getElementById("score").textContent =
            report.score;

        /*
         * Rule-Based Analysis
         */

        const ruleFindingsElement =
            document.getElementById("ruleFindings");

        if (report.findings.length === 0) {

            ruleFindingsElement.textContent =
                "No rule-based issues detected.";

        } else {

            ruleFindingsElement.textContent =
                report.findings
                    .map(
                        finding =>
`Issue: ${finding.issue}

Why: ${finding.reason}

Recommendation: ${finding.recommendation}`
                    )
                    .join("\n\n");
        }

        /*
         * AI Analysis
         */

        if (report.ai) {

            document.getElementById("aiVerdict").textContent =
                report.ai.verdict;

            document.getElementById("aiProbability").textContent =
                `${(
                    report.ai.phishingProbability * 100
                ).toFixed(1)}%`;

            document.getElementById("aiConfidence").textContent =
                `${(
                    report.ai.confidence * 100
                ).toFixed(1)}%`;

        } else {

            document.getElementById("aiVerdict").textContent =
                "Unavailable";

            document.getElementById("aiProbability").textContent =
                "Unavailable";

            document.getElementById("aiConfidence").textContent =
                "Unavailable";
        }

    } catch (error) {

        console.error(
            "Sentinel Error:",
            error
        );

        /*
         * Overall Error State
         */

        document.getElementById("verdict").textContent =
            "Error";

        /*
         * Rule-Based Error State
         */

        document.getElementById("ruleFindings").textContent =
            "Sentinel could not analyze this page.";

        /*
         * AI Error State
         */

        document.getElementById("aiVerdict").textContent =
            "Unavailable";

        document.getElementById("aiProbability").textContent =
            "Unavailable";

        document.getElementById("aiConfidence").textContent =
            "Unavailable";
    }
});