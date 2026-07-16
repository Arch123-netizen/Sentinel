export function extractFeatures(observation) {
    return {
        https: observation.isHTTPS ? 1 : 0,
        urlLength: observation.fullURL.length,
        subdomains: observation.host.split(".").length - 2,
        usesIPAddress: /^\d{1,3}(\.\d{1,3}){3}$/.test(observation.host) ? 1 : 0,
        dotCount: observation.host.split(".").length - 1
    };
}
