async function loadDefaults() {
    const linkTag = document.getElementById('theme');
    const fallbackTheme = 'styles/themes/default.css';

    try {
        // Fetch the JSON file
        const response = await fetch('../../default.json');
        // Check if the response is actually okay (AKA, not a 404)
        if (!response.ok) {
            throw new Error('default.json not found. reverted to default');
        }
        const data = await response.json();
        const devtheme = data.theme; 
        // Update the href
        // Check if theme exists just in case the JSON is empty
        if (devtheme) {
            linkTag.href = `styles/themes/${devtheme}`;
        } else {
            linkTag.href = fallbackTheme;
            console.warn("No default given. reverted to default", error.message);
        }
    } catch (error) {
        // If file is not found or doesnt exist we output this.
        console.warn("Didnt find the default dev file. Putting default.css as href", error.message);
        linkTag.href = fallbackTheme;
    }}

loadDefaults();
var me = "WHAT";