export function analyzeObservation(observation) {
    const report = {
        score: 0,
        findings: [],
        verdict: "Safe"
    };

    if (!observation.isHTTPS) {
        report.score +=30;
        report.findings.push("Website is not using HTTPS."); 
    }
    
    if (report.score === 0) {
        report.verdict = "Safe";
    } else if (report.score < 50) {
        report.verdict = "Low risk";
    } else {
        report.verdict = "Suspicious";
    }

    return report;
}

