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
var subSystem = 'home';

// dev env == true
var debug = true;


// Current subsystem
var subSystem = "home"

// fields


var history = document.getElementById("history");
var result  = document.getElementById("result");

// contains the command list. Stores it in memory
let commands = {};
fetch("meta/data/home.json")
    .then(r => r.json())
    .then(data => {
        commands = data;
        console.log("Commands loaded into memory:");
    })
    .catch(err => console.error("Failed to load commands:", err));