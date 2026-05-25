window.onload = function () {

    var btn = document.getElementById("btn");

    btn.onclick = async function () {

        const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tabs[0].id, {
            action: "TEST"
        });

    };

};
