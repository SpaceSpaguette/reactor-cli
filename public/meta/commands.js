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
