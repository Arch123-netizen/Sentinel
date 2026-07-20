import { analyzeObservation } from "./ruleEngine.js";
import { analyzeWithAI } from "./aiEngine.js";

export function makeDecision(observation) {
    const ruleReport = analyzeObservation(observation);
    const aiReport = analyzeWithAI(observation);

    // Temporary: return the rule engine result while exposing the AI output.
    return {
        ...ruleReport,
        ai: aiReport
    };
}