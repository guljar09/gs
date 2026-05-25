document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btn").addEventListener("click", async () => {

        const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tabs[0].id, {
            action: "TEST"
        });

    });

});
