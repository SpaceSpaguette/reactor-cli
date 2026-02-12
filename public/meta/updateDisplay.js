function updateDisplay(time) {
    const display = document.getElementById("display");
    if (display) {
        display.textContent = time;
    }
}