import { analyzeObservation } from "../scripts/analysis.js";
import { getCurrentObservation } from "../scripts/observation.js";
document.addEventListener("DOMContentLoaded", async () => {

    const websiteElement = document.getElementById("website");

    const observation = await getCurrentObservation();
    const report = analyzeObservation(observation);

    document.getElementById("website").textContent = observation.host;

    document.getElementById("protocol").textContent =
        observation.protocol.toUpperCase();
        
    document.getElementById("https").textContent =
        observation.isHTTPS ? "Yes ✅" : "No ❌";

    document.getElementById("score").textContent =
        report.score;
    
    document.getElementById("verdict").textContent =
        report.verdict;

    document.getElementById("findings").textContent =
        report.findings.length > 0
        ? report.findings.join(",")
        : "No issues detected.";


});