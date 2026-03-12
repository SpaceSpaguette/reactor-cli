const input = document.getElementById("cmdInput");

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const cmd = input.value.trim();

        runCommand(cmd);

        input.value = "";
    }

});