import { getCurrentObservation } from "../scripts/observation.js";
document.addEventListener("DOMContentLoaded", async () => {

    const websiteElement = document.getElementById("website");

    const observation = await getCurrentObservation();

    document.getElementById("website").textContent = observation.host;

    document.getElementById("protocol").textContent =
        observation.protocol.toUpperCase();
        
    document.getElementById("https").textContent =
        observation.isHTTPS ? "Yes ✅" : "No ❌";


});