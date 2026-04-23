// values are loaded first. we will change them later. 

var temperature = 293; // The central temperature meter. Do not mess with it
var fuel = 101; // Measured in %. But who cares
// ! These values mostly suck a big baboon ballsack. Remaking them is important

var cooling_rate = 0
var pressure = 1
// 
var subSystem = 'home';
var EPRS = false
// dev env == true
var debug = true;

var isRunning = false
// Current subsystem

// fields
const maxLines = 500;       // maximum lines in the console
const maxLineLength = 50;   // ma~ximum characters per line
var lines = [];           // stores all lines as objects

const inputHistory = [];    // stores command history for arrow keys
let inputHistoryIndex = -1; // current position in input history

var inputpass = 0

// elements
const history = document.getElementById("history");
const result  = document.getElementById("result");

/*
* The following declarations are for display entities.
TODO: Rework the design
*/

    //!     Here we get all the values to display
    const fueldis       = document.getElementById('fuelaverage')
    const t2refuel      = document.getElementById('ttrefuel')
    //?     END OF FUEL
    //!     START OF COOLER
    const coollevel     = document.getElementById('cooler')
    const refridge      = document.getElementById('rfridge')
    const epsr_display  = document.getElementById('furesupress')
    //?     END OF COOLER
    //!     START OF TEMPERATURE
    const display_heat  = document.getElementById('heatg')
    const coolrate      = document.getElementById('coolrate')
    const display_heath = document.getElementById('health')
    //?     END OF TEMPERATURE



let commands = {};
fetch("meta/data/home.json")
    .then(r => r.json())
    .then(data => {
        commands = data;
        console.log("Commands loaded into memory:");
    })
    .catch(err => console.error("Failed to load commands:", err));