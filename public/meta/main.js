function backgroundloop() {
    printText();
    setTimeout(backgroundloop,1000);
}




function printText(form="error", text="nothing") {
    var history = document.getElementById("history");
    if (form == "error") {
        let element = document.createElement("p");
        element.classList.add("error");
        element.textContent = text;
        history.appendChild(element);
    }
}

backgroundloop()