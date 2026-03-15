function runCommand(input) {
    printText("info",input)
    if (!commands || Object.keys(commands).length === 0) {
        console.log("Commands not loaded yet");
        return;
    }

    const cmd = input.split(" ");          // ["say", "hello"]
    const commandEntry = commands[cmd[0]]; // look up command

    if (!commandEntry) {
        console.log("Unknown command:", cmd[0]);
        return;
    }

    const funcName = commandEntry[0]; // function name
    const maxArgs = commandEntry[1];  // max args allowed

    if (cmd.length > maxArgs + 1) {   // +1. the first is the name of the command
        printText("error","Too many arguments");
        return;
    }

    const func = window[funcName];    // global function
    if (typeof func === "function") {
        func(...cmd.slice(1));        // pass arguments to functions
    } else {
        console.log("Function not found:", funcName);
    }
}

async function loadcmds() {
    let station = "meta/data/" + subSystem + ".json";
    try {
        const res = await fetch(station);

        if (!res.ok) {
            return false; // HTTP error
        }

        commands = await res.json(); // wait for JSON to be parsed
        return true; // success
    } catch (err) {
        console.error("Fetch error:", err);
        return false;
    }
}