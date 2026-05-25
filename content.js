chrome.runtime.onMessage.addListener(function(req) {

    if (req.action === "TEST") {

        document.body.style.border = "5px solid lime";

        alert("WEBSITE CONNECTED ✔️");

    }

});
