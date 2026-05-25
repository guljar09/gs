window.onload = function () {

    const btn = document.getElementById("btn");

    btn.addEventListener("click", async function () {

        try {

            const tabs = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });

            alert("TAB CONNECTED ✔️");

        } catch (e) {

            alert("ERROR");
            console.log(e);

        }

    });

};
