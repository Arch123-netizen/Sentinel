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
    checkSuspiciousTLDS,
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
        report.score += RISK_WEIGHTS.HTTPS;
        report.findings.push(FINDINGS_DETAILS.HTTPS);
    }
}

function checkURLLength(observation, report) {
    if (observation.fullURL.length > 75) {
        report.score += RISK_WEIGHTS.URL_LENGTH;
        report.findings.push(FINDINGS_DETAILS.URL_LENGTH);
    }
}

function checkIPAddress(observation, report) {
    const ipv4Pattern = /^\d{1,3}(\.\d{1,3}){3}$/;

    if (ipv4Pattern.test(observation.host)) {
        report.score += RISK_WEIGHTS.IP_ADDRESS;
        report.findings.push(FINDINGS_DETAILS.IP_ADDRESS);
    }
}

function checkKeywords(observation, report) {
    for (const keyword of SUSPICIOUS_KEYWORDS) {
        if (observation.fullURL.includes(keyword)) {
            report.score += RISK_WEIGHTS.KEYWORD;

            report.findings.push({
                ...FINDINGS_DETAILS.KEYWORD,
                issue: `Suspicious keyword detected: ${keyword}`
            });
        }
    }
}

function checkSubdomains(observation, report) {
    const parts = observation.host.split(".");

    if (parts.length > 4) {
        report.score += RISK_WEIGHTS.SUBDOMAIN;
        report.findings.push(FINDINGS_DETAILS.SUBDOMAIN);
    }
}

function checkShortenedURL(observation, report) {
    if (SHORTENING_SERVICES.includes(observation.host)) {
        report.score += RISK_WEIGHTS.SHORTENED_URL;
        report.findings.push(FINDINGS_DETAILS.SHORTENED_URL);
    }
}

function checkSuspiciousTLDS(observation, report) {
    const tld = observation.host.split(".").pop();

    if (SUSPICIOUS_TLDS.includes(tld)) {
        report.score += RISK_WEIGHTS.SUSPICIOUS_TLDS;
        report.findings.push(FINDINGS_DETAILS.SUSPICIOUS_TLDS);
    }
}

function checkBrandImpersonation(observation, report) {
    for (const [brand, officialDomain] of Object.entries(TRUSTED_BRANDS)) {
        if (
            observation.host.includes(brand) &&
            observation.host !== officialDomain
        ) {
            report.score += RISK_WEIGHTS.BRAND_IMPERSONATION;

            report.findings.push({
                ...FINDINGS_DETAILS.BRAND_IMPERSONATION,
                issue: `Possible impersonation of ${brand}.`
            });

            break;
        }
    }
}

function checkDomainAge(observation, report) {
    // Placeholder for future WHOIS/API integration
}

