const input = document.getElementById("cmdInput");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const cmd = input.value.trim();
        if (cmd !== "") {
            inputHistory.push(cmd);
            inputHistoryIndex = inputHistory.length;
        }

        if (inputpass === 1) {
            console.log('Found input')
            getInput(false,cmd);
            inputpass = 0;
        }else{
            console.log('Something happened')
        runCommand(cmd);
        }

        input.value = "";
    } else if (event.key === "ArrowUp") {
        if (inputHistory.length > 0) {
            event.preventDefault(); // Prevent cursor moving to start of input
            inputHistoryIndex = Math.max(0, inputHistoryIndex - 1);
            input.value = inputHistory[inputHistoryIndex];
        }
    } else if (event.key === "ArrowDown") {
        if (inputHistory.length > 0) {
            event.preventDefault(); // Prevent cursor moving to end of input
            inputHistoryIndex = Math.min(inputHistory.length, inputHistoryIndex + 1);
            if (inputHistoryIndex === inputHistory.length) {
                input.value = ""; // Clear input if we are past the most recent command
            } else {
                input.value = inputHistory[inputHistoryIndex];
            }
        }
    }
});