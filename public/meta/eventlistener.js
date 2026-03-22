const input = document.getElementById("cmdInput");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const cmd = input.value.trim();
        if (inputpass === 1) {
            console.log('f')
            getInput(false,cmd);
            inputpass = 0;
        }else{
            console.log('help')
        runCommand(cmd);
        }

        input.value = "";
    }
});