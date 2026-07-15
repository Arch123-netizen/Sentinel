import { analyzeObservation } from "./engines/ruleEngine.js";

export function detectThreat(observation) {
    const ruleReport = analyzeObservation(observation);
    return ruleReport;
}