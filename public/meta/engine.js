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
| The following Method has 2 functions              |
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
async function getInput(flag = true, response = '') {
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
This is entirely just a simple equasion.
When the pressure is low. The heat gain is low
If the pressure is high its the oposite.
Fuel cells are just a thing. We reduce their stuff and increase it other ways

*/
function updateSim() {
    const BASE_TEMP_SPEED = 5;
    const FUEL_GAIN_SPEED = 0.1;
    const FUEL_LOSS_SPEED = 1;
    const NORMAL_FUEL_LEVEL = 75;

    let tempChange = BASE_TEMP_SPEED *  (fuel / NORMAL_FUEL_LEVEL);
    if (temperature > 393) {
        pressure += 1
    }
    if (pressure > 1000) {
        tempChange *= 40; // 50% faster
    } else if (pressure < 100) {
        tempChange *= 1; // 20% slower
    }

    temperature += tempChange;

    if (temperature > 5000) {
        fuel += FUEL_GAIN_SPEED;
    } else if (temperature < 1000) {
        fuel -= FUEL_LOSS_SPEED/20;
    }
    else {
        fuel -=FUEL_LOSS_SPEED/100
    }

    // Prevent values from breaking physics (dropping below absolute zero)
    if (temperature < 0) temperature = 0;
    if (fuel < 0) fuel = 0;
}






/*
+--------#3---------+
| F-U-E-L _ C-E-L-L |
+------${FC[3]}-----+

+--------#2---------+
| F-U-E-L _ C-E-L-L |
+------${FC[2]}-----+

+--------#1---------+
| F-U-E-L _ C-E-L-L |
+------${FC[1]}-----+



    +===========REACTOR CORE===========+
    |   ___  ___  ___  ___  ___  ___   |
    |  |   ||   ||   ||   ||   ||   |  |
    |  | F || F || F || F || F || F |  |
    |  | U || U || U || U || U || U |  |
    |  | E || E || E || E || E || E |  |
    |  | L || L || L || L || L || L |  |
    |  | + || + || + || + || + || + |  |
    |  | C || C || C || C || C || C |  |
    |  | E || E || E || E || E || E |  |
    |  | L || L || L || L || L || L |  |
    |  | L || L || L || L || L || L |  |
    |  |   ||   ||   ||   ||   ||   |  |
    |  | 1 || 2 || 3 || 4 || 5 || 6 |  |
    |  |___||___||___||___||___||___|  |
    +=====THIS IS A PLACEHOLDER========+
▀ 	Upper half block
▁ 	Lower one eighth block
▂ 	Lower one quarter block
▃ 	Lower three eighths block
▄ 	Lower half block
▅ 	Lower five eighths block
▆ 	Lower three quarters block
▇ 	Lower seven eighths block
█ 	Full block
▉ 	Left seven eighths block
▊ 	Left three quarters block
▋ 	Left five eighths block
▌ 	Left half block
▍ 	Left three eighths block
▎ 	Left one quarter block
▏ 	Left one eighth block
▐ 	Right half block
░ 	Light shade
▒ 	Medium shade
▓ 	Dark shade
▔ 	Upper one eighth block
▕ 	Right one eighth block
▖ 	Quadrant lower left
▗ 	Quadrant lower right
▘ 	Quadrant upper left
▙ 	Quadrant upper left and lower left and lower right
▚ 	Quadrant upper left and lower right
▛ 	Quadrant upper left and upper right and lower left
▜ 	Quadrant upper left and upper right and lower right
▝ 	Quadrant upper right
▞ 	Quadrant upper right and lower left
▟ 	Quadrant upper right and lower left and lower right

    Copied from wikipedia
    https://en.wikipedia.org/wiki/List_of_Unicode_characters

    
    ▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    ▌ ▛
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌
    ▌

*/
/*


|-----------------------|
|   This section is     |    
|   responsible for     |
|   changing the display|
|   mess with it and    |
|   youre dead          |
|-----------------------|
*/

// //async function updateDisplay () {
    //? Okay this time were going to make it performant. For some reason it find it a flex
    //! This might as well run every second. decrease its dependance




    /*
    !     Here we get all the values to display
    const fueldis       = document.getElementById('fuelaverage')
    const t2refuel      = document.getElementById('ttrefuel')
    ?     END OF FUEL
    !     START OF COOLER
    const coollevel     = document.getElementById('cooler')
    const refridge      = document.getElementById('rfridge')
    const epsr_display  = document.getElementById('furesupress')
    ?     END OF COOLER
    !     START OF TEMPERATURE
    const display_heat  = document.getElementById('heatg')
    const coolrate      = document.getElementById('coolrate')
    const display_heath = document.getElementById('health')
    ?     END OF TEMPERATURE

    TODO: Add the values that we access
        * fuelcellavrg
        * EPRS
    */// }
    