chrome.runtime.onMessage.addListener((req) => {

    if (req.action === "TEST") {

        document.body.style.border = "5px solid red";

        alert("Website Connected ✔️");
    }

});
