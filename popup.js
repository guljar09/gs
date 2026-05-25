window.onload = function () {

    var btn = document.getElementById("btn");

    btn.onclick = function () {

        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },

            function (tabs) {

                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { action: "TEST" }
                );

            }
        );

    };

};
