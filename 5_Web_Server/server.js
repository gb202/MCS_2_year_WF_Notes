
var http = require('http');
//importing node.js core module

//creating web server
var server = http.createServer(function(request,response)
//return new instance of http.server
{
    //to see the response type we have 
    //response.setHeader('Content-Type' : 'text/html');
//request is taken but it did not find response so in browser it will reload
//response.end('response from server')

});

//listing to incoming request
server.listen(8080)
/*server.listen(8080 ,() => {
    console.log('Server Running at http://localhost:8080');
});*/