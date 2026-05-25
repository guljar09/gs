chrome.runtime.onMessage.addListener((req) => {

    if (req.action === "TEST") {

        alert("CONNECTED ✔️");

    }

});
