function runCommand(input) {
    printText("cmd_hist",input)
    if (!commands || Object.keys(commands).length === 0) {
        console.log("Commands not loaded yet");
        return;
    }

    const cmd = input.split(" ");          // ["say", "hello"]
    const commandEntry = commands[cmd[0]]; // look up command

    if (!commandEntry) {
        printText("error", "Unknown command: " + cmd[0]);
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

async function loadCommandFile(source) {
    const response = await fetch(`meta/data/${source}.json`) // loads the entire file into this variable.
    if (!response.ok) { // .ok is just a bool (true/false) if false then run this
         // console.log("couldn't load file") // dont mess with it too much.
        return false; // we return something to the wrapper
    } 
    
    else {
        commands = await response.json() // this makes the bytecode into actual json. yes it is a much real thing
        return true; // Returns the value for wrapper
    }
}