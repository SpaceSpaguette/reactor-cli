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

<<<<<<< HEAD
// Output options
var history = document.getElementById("history");
var result  = document.getElementById("result");
=======

// Current subsystem
var subSystem = "Home"

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

// Executed on every launch. Dont mess with it.
>>>>>>> origin/dev-spaguette
