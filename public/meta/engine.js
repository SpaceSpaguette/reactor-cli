/*
+==============INTRODUCTION=====================+
| This section of code is specialised for       |
| purely engine tasks. This means that here     |
| belong things meant to not be interacted      |
| with.                                         |
+===============================================+
*/



/*
+=============PRINT TEXT FUNCTION===================+
| The following function has 2 functions            |
|   Provide a method to print text to screen        |
|   Provide history and display settings.           |
| Due to these quite essential functions            |
| is this function something to edit carefully.     |
| Please don't mess with it                         |
+============READ BEFORE YOU ACT====================+


*/
function printText(form = "warn", text = "TEXT UNDEFINED") {
    // Split text if it is too long
    let chunks = [];
    while (text.length > maxLineLength) {
        chunks.push(text.slice(0, maxLineLength));
        text = text.slice(maxLineLength);
    }
    chunks.push(text); // add remaining text

    // Add each chunk as a new line
    for (const chunk of chunks) {
        lines.push({ text: chunk, form });
    }

    while (lines.length > maxLines) {
        lines.shift();
    }

    // Rebuild HTML inside the container
    history.innerHTML = lines.map(line => 
        `<span class="${line.form}">${line.text}</span><br>`
    ).join("");

    history.scrollTop = history.scrollHeight;
}

/*
+=============GET INPUT METHOD==================+
| The following method is just                  |
| a wrapper which allow to get                  |
| input from user. This is limited              |
| to only one input at the time.                |
| It is done using a flag. Which                |
| When used creates a promise.                  |
| When promise is fufilled you get              |
| the data in form of all lower case string     |
+=============READ BEFORE YOU ACT===============+
*/
let resolver;
async function getInput(flag=true , response='') {
    if (flag === true) {
        inputpass = 1;
        return new Promise((resolve) => {
            resolver = resolve;
        });

    } else {
        //we got data 
    if (resolver) {
      resolver(response); // This 'triggers' the first function to finish
    }
    }
}

/*
+=================TEMPERATURE CONTROL===============+
| Temperature is determined using few values        |
| EPRS = When true it makes it have no heat gain.   |
| Bonus heat. For every tick it decreases value     |
| basically starts slow but speeds up fast.         |
| Temperature starts low but gets higher the higher |
| temperature you have. Thus exponential.           |
+===================================================+
*/
function temperature() {
    var heatgain = reactor_temp / 100;
    if (!EPRS) {
        reactor_temp += heatgain;
        if (bonusheat > 0) {
            bonusheat -= 1;
            reactor_temp += 5;
        }
    }
    if (reactor_temp > 550 && reactor_temp < 1000) {
        fuelcellavrg -= heatgain / 10;
    }
    if (reactor_temp > 1000) {
        fuelcellavrg += heatgain / 10;
    }
}

