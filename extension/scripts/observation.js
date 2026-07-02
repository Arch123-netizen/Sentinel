export async function getCurrentObservation() {
    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    const currentTab = tabs[0];

    const url = new URL(currentTab.url);

    const observation = {
        fullURL: currentTab.url,
        protocol: url.protocol,
        host: url.host,
        pathname: url.pathname,
        isHTTPS: url.protocol === "https:"
    };

    return observation;

}