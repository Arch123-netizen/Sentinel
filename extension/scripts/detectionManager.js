import { analyzeObservation } from "./engines/ruleEngine.js";
import { analyzeWithAI } from "./engines/aiEngine.js";

export function detectThreat(observation) {
    const ruleReport = analyzeObservation(observation);
    const aiReport = analyzeWithAI(observation);

    // Temporary: expose both reports
    return {
        ...ruleReport,
        ai: aiReport
    };
}