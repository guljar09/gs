window.onload = function () {

    const btn = document.getElementById("btn");

    btn.addEventListener("click", async function () {

        const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tabs[0].id, {
            action: "TEST"
        });

    });

};
