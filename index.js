'use strict'

const fs = require('fs');
const os = require('os');

//xochil - create the string of code to be sent to buffer

const code =
`'use strict'
const names = ['Meg', 'Ann', 'Mae'];
names.forEach(names => console.log(names));`


// split code into ministrings
const miniStrings = code.split();

//create a buffer for ministrings to be written into
const myBuffer = Buffer.alloc(code.length);

//take the split string, switch it to the proper characters and write it into the new buffer
function writeToBuffer(string)  {
    string.forEach(ms => myBuffer.write(ms));
};


writeToBuffer(miniStrings);


//take the new buffer and open it in a new file loop.js
fs.writeFile('files/loop.js', myBuffer, (err) => {
    if(err) console.log(err);
    console.log('done');
});

