'use strict'

const fs = require('fs');
fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    else

    console.log("The file was saved!");
});
