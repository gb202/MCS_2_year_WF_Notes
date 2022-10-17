/*
Create a text file named input.txt having the following content −
Streams are one of the fundamental concepts that power Node.js applications. 
They are data-handling method and are used to read or write input into output sequentially.

Create a js file named main.js with the following code −

*/

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

/*Now run the main.js to see the result −

$ node main.js

*/
