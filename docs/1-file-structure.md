# 1.1 file structure
    bin/                                    # command-line files
    config/                                 # configuration files
    docs/                                   # documentation files
    public/                                 # web files
            styles/                         # css + themes
                style.css                   # main css file. (ONLY BASIC THINGS)
                default.css                 # DEFAULT COLORS file. DO NOT mess with it too much.
                themes/                     # THEMES. USER COLORS go there
            img/                            # IMAGES 
            meta/                           # javascript and other browser scripts
    resources/                              # other resource files
    src/                                    # PHP source files
    CONTRIBUTING(.*)                        # contribution guidelines
    README(.*)                              # read-me-first file


    this amazing file structure has been coppied from skeleton research.
    https://github.com/php-pds/skeleton_research
# CSS
    there is a json put on .gitingore one line goes there. "theme":"{YOUR THEME}.css"
    this will load your preferred colors on startup. 