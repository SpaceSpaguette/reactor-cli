async function changeStation(station) {
    const response = await loadCommandFile(station);
    console.log(response)
    if (!response) {
        printText('error','Well this went so wrong')
    } else {
        printText('warn',`Changed to ${station}`)
    }
}

async function Exit() {
    await loadCommandFile("home");
    printText('warn',"Exitting into main.")
}


async function StartReactor() {
    printText('error', "Start reator? Y/N");
    const confirm = await getInput()
    if (confirm === "y" || confirm === "Y") {
        printText('error','IGHT')
    } else {
        printText('warn', "cancelling operation")
    }
}

async function Pindir(pindir) {
    printText ('error','8=====================================D')
}

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
    printText('info', 'theme - change theme');
    printText('info', 'help - show help');
}

