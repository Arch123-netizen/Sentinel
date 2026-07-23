import { RISK_WEIGHTS , 
        SUSPICIOUS_KEYWORDS, 
        SHORTENING_SERVICES,
        SUSPICIOUS_TLDS,
        TRUSTED_BRANDS,
        FINDINGS_DETAILS,
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
    checkBrandImpersonation,
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
        addFinding(
            report,
            RISK_WEIGHTS.HTTPS,
            FINDINGS_DETAILS.HTTPS
        );
    }
}

function checkURLLength(observation, report) {
    if (observation.fullURL.length > 75) {
        addFinding(
            report,
            RISK_WEIGHTS.URL_LENGTH,
            FINDINGS_DETAILS.URL_LENGTH
        );
    }
}

function checkIPAddress(observation, report) {
    const ipv4Pattern = /^\d{1,3}(\.\d{1,3}){3}$/;

    if (ipv4Pattern.test(observation.host)) {
       addFinding(
            report,
            RISK_WEIGHTS.IP_ADDRESS,
            FINDINGS_DETAILS.IP_ADDRESS
       );
    }
}

function checkKeywords(observation, report) {
    for (const keyword of SUSPICIOUS_KEYWORDS) {
        if (observation.fullURL.includes(keyword)) {
           addFinding(
           report,
           RISK_WEIGHTS.KEYWORD,
           {
            ...FINDINGS_DETAILS.KEYWORD,
            issue: `Suspicious keyword detected: ${keyword}`
           }
        );
        }
    }
}

function checkSubdomains(observation, report) {
    const parts = observation.host.split(".");

    if (parts.length > 4) {
        addFinding(
            report,
            RISK_WEIGHTS.SUBDOMAIN,
            FINDINGS_DETAILS.SUBDOMAIN
        );
    }
}

function checkShortenedURL(observation, report) {
    if (SHORTENING_SERVICES.includes(observation.host)) {
        addFinding(
            report,
            RISK_WEIGHTS.SHORTENED_URL,
            FINDINGS_DETAILS.SHORTENED_URL
        );
    }
}

function checkSuspiciousTLD(observation, report) {
    const tld = observation.host.split(".").pop();

    if (SUSPICIOUS_TLDS.includes(tld)) {
       addFinding(
        report,
        RISK_WEIGHTS.SUSPICIOUS_TLDS,
        FINDINGS_DETAILS.SUSPICIOUS_TLD
       );
    }
}

function checkBrandImpersonation(observation, report) {
    for (const [brand, officialDomain] of Object.entries(TRUSTED_BRANDS)) {
        if (
            observation.host.includes(brand) &&
            observation.host !== officialDomain
        ) {
            addFinding(
                report,
                RISK_WEIGHTS.BRAND_IMPERSONATION,
                {
                    ...FINDINGS_DETAILS.BRAND_IMPERSONATION,
                    issue: `Possible impersonation of ${brand}.`
                }
            );

            break;
        }
    }
}

function checkDomainAge(observation, report) {
    // Placeholder for future WHOIS/API integration
}

function addFinding(report, score, finding) {
    report.score += score;
    report.findings.push(finding);
}
