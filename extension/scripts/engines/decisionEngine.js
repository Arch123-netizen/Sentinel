import { analyzeObservation } from "./ruleEngine.js";

export function makeDecision(observation) {
    return analyzeObservation(observation);
}