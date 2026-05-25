window.onload = () => {

    const btn = document.getElementById("btn");

    btn.onclick = async () => {

        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tab.id, {
            action: "TEST"
        });
    };
};
