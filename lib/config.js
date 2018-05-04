
"use strict"

const fs = require('fs');



exports.appClass = class { //aplikacio funkciok
    appsListRead(){}
    appAddToList(){}
    appDetailsRead(){}
    addNewApp(){}
    constructor() {
        
    }    
};



/* 

let readedFile = JSON.parse(fs.readFileSync("modules/apps/apps.json", 'utf8', (e, d) => {
            if (e)
                tools.die('File read error' + JSON.stringify(e))
        }));

*/