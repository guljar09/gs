window.onload = function () {

    var btn = document.getElementById("btn");

    if (!btn) {
        alert("Button Not Found");
        return;
    }

    btn.onclick = function () {

        alert("POPUP OK ✔️");

    };

};
