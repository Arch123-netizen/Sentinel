export function analyzeObservation(observation) {
    const report = {
        score: 0,
        findings: [],
        verdict: "Safe"
    };

    checkHTTPS(observation, report);
    checkURLLength(observation, report);
    checkIPAddress(observation, report);
    checkKeywords(observation, report);
    checkSubdomains(observation, report);
    
    if (report.score === 0) {
        report.verdict = "Safe";
    } else if (report.score < 50) {
        report.verdict = "Low risk";
    } else {
        report.verdict = "Suspicious";
    }

    return report;
}

function checkHTTPS(observation, report) {
    if (!observation.isHTTPS) {
        report.score +=30;
        report.findings.push("Website is not using HTTPS."); 
    }

}

function checkURLLength(observation, report) {

    if (observation.fullURL.length > 75) {
        report.score += 15;
        report.findings.push("URL is unusually long.");
        
    }

}

function checkIPAddress(observation, report) {
    const ipv4Pattern = /^\d{1,3}(\.\d{1,3}){3}$/;

    if (ipv4Pattern.test(observation.host)) {
        report.score += 25;
        report.findings.push("Website uses an IP address instead of a domain name.")
    }

}

function checkKeywords(observation, report){
    const suspiciousKeywords =[
        "login",
        "verify",
        "secure",
        "account",
        "update",
        "password",
    ];
    for (const keyword of suspiciousKeywords) {
        if (observation.fullURL.includes(keyword)) {
            report.score += 10;
            report.findings.push(`Suspicious keyword detected: ${keyword}`);
            
        }
    }
}

function checkSubdomains(observation, report) {
    const parts = observation.host.split(".");

    if (parts.length > 4) {
        report.score += 10;
        report.findings.push("Excessive number of subdomains detected.");

    }
}

