export const RISK_WEIGHTS = {
    HTTPS: 30,
    URL_LENGTH: 15,
    IP_ADDRESS: 25,
    KEYWORD: 10,
    SUBDOMAIN: 10,
    SHORTENED_URL: 15,
    SUSPICIOUS_TLDS: 10,
    BRAND_IMPERSONATION: 20,
};

export const SUSPICIOUS_KEYWORDS = [
    "login",
    "verify",
    "secure",
    "account",
    "update",
    "password"
];

export const SHORTENING_SERVICES = [
    "bit.ly",
    "tinyurl.com",
    "t.co",
    "goo.gl",
    "ow.ly",
    "buff.ly",
];
export const SUSPICIOUS_TLDS = [
    "zip",
    "mov",
    "click",
    "top",
    "xyz"
];

export const TRUSTED_BRANDS = {
    paypal: "paypal.com",
    google: "google.com",
    microsoft: "microsoft.com",
    amazon: "amazon.com",
    apple: "apple.com",
    facebook: "facebook.com",
    netflix: "netflix.com",
    github: "github.com",
}

export const FINDINGS_DETAILS = {
    HTTPS: {
        issue: "Website is not using HTTPS.",
        reason: "Data sent to this website may not be encrypted.",
        recommendation: "Avoid entering passwords or payment information."
    },

    URL_LENGTH: {
        issue: "URL is unusually long.",
        reason: "Very long URLs can be used to hide malicious content or mislead users.",
        recommendation: "Carefully inspect the full URL before continuing."
    },

    IP_ADDRESS: {
        issue: "Website is using an IP address instead of a domain name.",
        reason: "Legitimate websites usually use domain names rather than raw IP addresses.",
        recommendation: "Proceed with caution and verify the website's identity."
    },

    KEYWORD: {
        issue: "Suspicious keyword detected.",
        reason: "Attackers often use words such as 'login', 'account', or 'password' to trick users into revealing sensitive information.",
        recommendation: "Verify that the website is legitimate before entering any credentials."
    },

    SUBDOMAIN: {
        issue: "Excessive number of subdomains detected.",
        reason: "Many subdomains can be used to disguise the true destination of a website.",
        recommendation: "Double-check the actual domain name before trusting the website."
    },

    SHORTENED_URL: {
        issue: "URL shortening service detected.",
        reason: "Shortened URLs hide the final destination, making malicious links harder to recognize.",
        recommendation: "Expand the shortened link or verify its destination before visiting."
    },

    SUSPICIOUS_TLD: {
        issue: "Suspicious top-level domain detected.",
        reason: "Some top-level domains are more frequently abused for phishing and malicious websites.",
        recommendation: "Exercise caution and verify the website before interacting with it."
    },

    BRAND_IMPERSONATION: {
        issue: "Possible brand impersonation detected.",
        reason: "The website appears to reference a trusted brand while using a different domain.",
        recommendation: "Visit the brand's official website directly instead of using this link."
    }
};