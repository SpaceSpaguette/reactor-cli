## 3.1 TERMINAL - Direction
    DO'S
        Simple design. even a monkey should be able to write something
        Nothing flashy inside of the type box. Maybe a suggestion but no autocorrect.
        Should have  this as its beginning line {USER}:{CURRENT SUBSYSTEM}> {COMMAND} - COMMAND IS SOMETHING THEY TYPE AKA. INPUT FIELD
        
    DONT'S
        Dont make anything extra. BAREBONES FIRST. Make it work. REFACTOR IT AFTERWARDS.

## COMMANDS 
    Here i will just write out the functions of them. Aliases (AKA. What you type into terminal) will need to be added after
    Storing commands. Command will be stored inside a JSON file. This file is there to make it very extendible. File structure will look like this "{COMMAND}":"{JAVASCRIPT FUNCTION}"
        [] Anything inside this box below is a suggestion for what the alias would be. Type in teams if you have a suggestion.

        ## COMMAND ANYWHERE - Any subsystem or addition
        HELP                - Writes help in the game for anything you typed.
        EXIT                - Exits the current dir/Subsystem settings
        COLOR               - Changes the theme to what you typed in. (TO DO: STORE THIS IN A COOKIE)
        [STATION]           - Change in and out of subsystem Configuration. { COOLANT FLOW ETC.}
        
        ## Only in the admin system
        [BEGIN]             - Start the reactor 
        [EM-SHUTDOWN]       - This is emergency SHUTDOWN. Works only up to certain TEMPERATURE AND NEEDS A CODE TO ACTIVATE
        [EPRS]              - Emergency pressure releave system. Works only if reactor is online. (THIS WILL PURGE THE REACTOR OUTPUT.)
        

        # FROM HERE OUT ITS SUBSYSTEMS


        ## COOLING SUBSYSTEM 
        [COLLANT-TYPE]      - [CHLORINE] [BROMIUM] [OXYGEN] [HYDROGEN] [CO2] - UPGRADES ONLY - Affects collant efficiency
        [TYPE]              - Change between colling sectors {PROBABLY NATO PHONETIC ALPHABET NAMED}

            ## COOLANT SECTION SUBSYSTEM - You go here by 
            [COLLANT-VALVE]     - [OPEN] [CLOSE] [X%] This opens or closes valve of a certain cooling loop. Affects the effectiveness of cooling.
            [REFRIGENERATOR]    - [ON / OFF] This just is there for memes. Modifies the coolants ability to cool itself. 
                                    If OFF the coolant will slowly get its temperature increased.
                                    If ON the coolant will have its temperature slowly decreased. up to a point. AKA MAXIMUM COOLING OUTPUT
            [PURGE]             - This is one way. PURGES THE COOLANT FROM THE SECTOR.
        ## TURBINES. [AKA money printer go BRR]
        [START]                 - Takes few seconds. Starts the turbines
        [STOP]                  - SHUTS THEM DOWN
        [VALVE]                 - [ON/OFF/X%] Inlet valve. This allows you to allow the steam to flow into the turbines
        
        ## SHOP - This is for pleasure only.
        [LIST]  - Lists items
        [BUY]   - Buys items