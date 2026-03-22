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
}






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