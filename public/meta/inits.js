// values are loaded first. we will change the later. 

var reactor_temp = 293;
var coppercage_temp = 293;
var coolant_temp = 293;
var turbines_temp = 293;

// pressure


var reactor_pressure = 0;
var coolant_pressure = 0;
var turbines_pressure = 0;


//subSystem var
var subSystem = {
    current: "main",
    isReady: false,
};

function ChangeStation(name) {
    let found = true;

    
};

function Exit() {
    subSystem.current = "main";
    console.log("Exited to main station");
}

function Shop (action) {
    if (action.toLowerCase() === "buy") {
        console.log("Buying items...");
    } else if (action.toLowerCase() === "show") {
        console.log("Showing items...");
    }
}

// dev env == true
var debug = true;




// fields


var history = document.getElementById("history");
var result  = document.getElementById("result");





// very sensitive. please ensure you dont touch it. LOADS COMMANDS INTO MEMORY
let commands = {};
fetch("meta/data/commands.json")
    .then(r => r.json())
    .then(data => {
        commands = data;
        console.log("Commands loaded into memory:");
    })
    .catch(err => console.error("Failed to load commands:", err));


