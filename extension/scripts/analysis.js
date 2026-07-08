import { RISK_WEIGHTS , 
        SUSPICIOUS_KEYWORDS, 
        SHORTENING_SERVICES,
        SUSPICIOUS_TLDS,
        } from "./config.js";
export function analyzeObservation(observation) {
    const report = {
        score: 0,
        findings: [],
        verdict: "Safe"
    };

    const heuristics = [
    checkHTTPS,
    checkURLLength,
    checkIPAddress,
    checkKeywords,
    checkSubdomains,
    checkDomainAge,
    checkShortenedURL,
    checkSuspiciousTLD,
];

for (const heuristic of heuristics) {
    heuristic(observation, report);
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

function checkHTTPS(observation, report) {
    if (!observation.isHTTPS) {
        report.score += RISK_WEIGHTS.HTTPS;
        report.findings.push("Website is not using HTTPS."); 
    }

}

function checkURLLength(observation, report) {

    if (observation.fullURL.length > 75) {
        report.score += RISK_WEIGHTS.URL_LENGTH;
        report.findings.push("URL is unusually long.");
        
    }

}

function checkIPAddress(observation, report) {
    const ipv4Pattern = /^\d{1,3}(\.\d{1,3}){3}$/;

    if (ipv4Pattern.test(observation.host)) {
        report.score += RISK_WEIGHTS.IP_ADDRESS;
        report.findings.push("Website uses an IP address instead of a domain name.")
    }

}

function checkKeywords(observation, report){
    
    for (const keyword of SUSPICIOUS_KEYWORDS) {
        if (observation.fullURL.includes(keyword)) {
            report.score += RISK_WEIGHTS.KEYWORD;
            report.findings.push(`Suspicious keyword detected: ${keyword}`);
            
        }
    }
}

function checkSubdomains(observation, report) {
    const parts = observation.host.split(".");

    if (parts.length > 4) {
        report.score += RISK_WEIGHTS.SUBDOMAIN;
        report.findings.push("Excessive number of subdomains detected.");

    }
}

function checkShortenedURL(observation, report) {

    if (SHORTENING_SERVICES.includes(observation.host)) {
        report.score += RISK_WEIGHTS.SHORTENED_URL;
        report.findings.push(
            "URL shortening service detected."
        );
    }

}

function checkSuspiciousTLD(observation, report) {
    const tld = observation.host.split(".").pop();

    if (SUSPICIOUS_TLDS.includes(tld)) {
        report.score += RISK_WEIGHTS.SUSPICIOUS_TLD;
        report.findings.push("Suspicious top-level domain detected.");
    }
}

function checkDomainAge(observation, report) {
    //Placeholder for future WHOIS/API integration
}

