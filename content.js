console.log("CONTENT CONNECTED");

chrome.runtime.onMessage.addListener((req) => {

    if (req.action === "TEST") {

        alert("Website Connected ✔️");

    }
});
