'use strict'


const bufferArray = ['58,6F,63,68,69,6C', '4A,6F,73,65,70,68', '4C,75,63,69,97,6E,61'];
const testBuffer =


const fs = require('fs');
fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    else

    console.log("The file was saved!");
});
