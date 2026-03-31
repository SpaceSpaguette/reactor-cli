// values are loaded first. we will change the later. 

var reactor_temp = 293;
var fuelcellavrg = 101;
var bonusheat = 0;
// pressure
//subSystem var
var subSystem = 'home';
var EPRS = false
// dev env == true
var debug = true;

var isRunning = false
// Current subsystem
var subSystem = "home"

// fields
const maxLines = 500;       // maximum lines in the console
const maxLineLength = 50;   // maximum characters per line
var lines = [];           // stores all lines as objects

const inputHistory = [];    // stores command history for arrow keys
let inputHistoryIndex = -1; // current position in input history

var inputpass = 0

// elements
const history = document.getElementById("history");
const result  = document.getElementById("result");

// contains the command list. Stores it in memory
let commands = {};
fetch("meta/data/home.json")
    .then(r => r.json())
    .then(data => {
        commands = data;
        console.log("Commands loaded into memory:");
    })
    .catch(err => console.error("Failed to load commands:", err));