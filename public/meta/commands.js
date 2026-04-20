/*
+===============================================+
| This file is the commands file. It contains   |
| functions meant to be executed via CMDEngine  |
| ********************************************  |
| This means: User can call them. User          |
| interacts through them                        |
+===============================================+
*/
async function changeStation(station) {
    const response = await loadCommandFile(station);
    console.log(response)
    if (!response) {
        printText('error','Error this substation doesnt exist')
    } else {
        printText('info',`Changed to ${station}`)
    }
}

async function Exit() {
    await loadCommandFile("home");
    printText('info',"Exitting into main.")
}


async function StartReactor() {
    printText('error', "Start reator? Y/N");
    const confirm = await getInput()
    if ((confirm === "y" || confirm === "Y")&& !isRunning) {
        printText('warn','Staring reactor')
        bonusheat = 50
        isRunning = true
    } else {
        printText('warn', "Cancelling operation")
    }
}

let isRUActive = false;
let isOnCooldown = false;


async function RefrigerationUnits() {
    if (isOnCooldown) {
        printText('error', "Refrigeration units are on cooldown. Please wait.")
        return;
    }

    printText('error', "Activate refrigeration units? Y/N");
    const confirm = await getInput();
    if (confirm === "y" || confirm === "Y") {
        printText('warn', "Activating refrigeration units. Cooling for 30 seconds.");
        isRUActive = true;
        isOnCooldown = true;

        reactor_temp -= 14;
        
        setTimeout(() => {
            isRUActive = false
            temp_decrease = 0
            printText('warn','REFRIGERATION UNITS: Finished cooling. Starting cooldown.')
        }, 30000); // 30 seconds cooldown
    } else {
        printText('warn', "Cancelling operation")
    }
}

async function Pindir(pindir) {
    printText ('error',"B=============D")
}


 // This is as name suggest for changing themes. Nothing we can do here.
function Theme(themeName) {
    if (!themeName) {
        printText('error', 'Usage: theme <name>');
        return;
    }
    const themeLink = document.getElementById("theme-stylesheet");
    if (themeLink) {
        themeLink.href = `styles/themes/${themeName}.css`;
        printText('info', `Theme changed to ${themeName}`);
    } else {
        printText('error', 'Theme stylesheet link not found.');
    }
}

function Help(help) {
    printText('info', 'Available commands:');
    printText('info', 'cs - change station');
    printText('info', 'exit - exit to main');
    printText('info', 'shop - open shop');
    printText('info', 'sr - start reactor');
    printText('info', 'temperature - show temperature');
    printText('info', 'theme - change theme (chernobyl, debug, produciton, blue)');
    printText('info', 'help - show help');
    // I will crate a function to take care of this. For now. Fuck it
}


function clearScreen() {
    lines = []
}

async function shutdown () {
    printText('warn','Shutdown Reactor?')
    printText('warn','Y/N')
    const confirm = await getInput()
    if (confirm === "Y" || confirm === "y") {
        mainloop(1)
        printText('warn','Alright shutting it down')
    } else {
        printText('warn','Aborting')
    }
}


function status () {
    printText('ERROR',`Temperature: ${temperature.toFixed(1)}`)
    printText('ERROR',`Fuel: ${fuel.toFixed(1)}`)
    printText('ERROR',`Pressure: ${pressure.toFixed(1)}`)
}