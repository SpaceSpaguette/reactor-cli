function hello () {
    result.innerHTML = "Hello"
}


function loadthis (data1 = "FUCK",data2 = "YOU") {
    result.innerHTML = `${data1} ${data2} `;
}

function ChangeStation(name) {
    console.log("changed to ", name)
    loadcmds();
};

function Exit() {
    subSystem = "home";
    console.log("Exited to main station");
}

function Shop (action) {
    if (action.toLowerCase() === "buy") {
        console.log("Buying items...");
    } else if (action.toLowerCase() === "show") {
        console.log("Showing items...");
    }}

function Temperature (){
    console.log(`Reactor Temp: ${reactor_temp} K`);
    console.log(`Copper Cage Temp: ${coppercage_temp} K`);
    console.log(`Coolant Temp: ${coolant_temp} K`);
    console.log(`Turbines Temp: ${turbines_temp} K`);

    if (reactor_temp > 800) {
        console.warn("Reactor temperature is too high!");
    }
}