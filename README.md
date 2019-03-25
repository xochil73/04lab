![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers - File Transformers

### Author: Xochil Squaglia

### Links and Resources
* [repo] https://github.com/xochil73/04lab
* [travis]



### Modules
#### `index.js`
##### Exported Values and Methods

###### `fs.writeFile('files/loop.js', myBuffer, (err) => {
            if(err) console.log(err);
            console.log('done');
        });`
#### Running the app
* `npm start`
* Endpoint: `fs.writeFile('files/loop.js', myBuffer, (err) => {
                 if(err) console.log(err);
                 console.log('done');
             });`
  * Returns a new file loop.js with an forEach that runs through an array of names.
* Endpoint: `files/loop.js`
  * Returns a three names with console.log.
  
#### Tests
* npm run test

