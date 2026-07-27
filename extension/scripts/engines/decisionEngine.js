import { analyzeObservation } from "./ruleEngine.js";
import { analyzeWithAI } from "./aiEngine.js";

export async function makeDecision(observation, modelUrl) {
    const ruleReport = analyzeObservation(observation);

    const aiReport = await analyzeWithAI(
        observation,
        modelUrl
    );

    return {
        ...ruleReport,
        ai: aiReport
    };
}