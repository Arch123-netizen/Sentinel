export const RISK_WEIGHTS = {
    HTTPS: 30,
    URL_LENGTH: 15,
    IP_ADDRESS: 25,
    KEYWORD: 10,
    SUBDOMAIN: 10,
    SHORTENED_URL: 15,
    SUSPICIOUS_TLDS: 10,
};

export const SUSPICIOUS_KEYWORDS = [
    "login",
    "verfiy",
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