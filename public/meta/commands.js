function hello () {
    result.innerHTML = "Hello"
}


function loadthis (data1 = "FUCK",data2 = "YOU") {
    result.innerHTML = `${data1} ${data2} `;
}

function ChangeStation(name) {
    console.log("changed to ", name)
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