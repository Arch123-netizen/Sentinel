import { analyzeObservation } from "./ruleEngine.js";

const AI_SERVER_URL =
    "http://127.0.0.1:3000/analyze";

export async function makeDecision(observation) {

    /*
     * 1. Run the local rule engine
     */

    const ruleReport =
        analyzeObservation(observation);

    /*
     * 2. Run the AI engine
     */

    let aiReport = null;

    try {

        const response = await fetch(
            AI_SERVER_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(observation)
            }
        );

        if (!response.ok) {
            throw new Error(
                `AI server returned ${response.status}`
            );
        }

        aiReport =
            await response.json();

    } catch (error) {

        console.error(
            "Sentinel AI unavailable:",
            error
        );
    }

    /*
     * 3. Determine the overall Sentinel verdict
     */

    let overallVerdict =
        ruleReport.verdict;

    /*
     * If the AI detects phishing,
     * Sentinel raises the overall verdict.
     */

    if (
        aiReport &&
        aiReport.verdict === "Phishing"
    ) {

        overallVerdict =
            "Suspicious — AI detected possible phishing";

    } else if (
        ruleReport.verdict === "Suspicious"
    ) {

        overallVerdict =
            "Suspicious";

    } else if (
        ruleReport.verdict === "Low risk"
    ) {

        overallVerdict =
            "Low risk";

    } else {

        overallVerdict =
            "Safe";
    }

    /*
     * 4. Return the complete Sentinel decision
     */

    return {

        verdict:
            overallVerdict,

        score:
            ruleReport.score,

        findings:
            ruleReport.findings,

        ai:
            aiReport
    };
}