var http = require('http');
var fs=require('fs');

const onRequest=(request, response)=>{
response.writeHead(200,{'content-Type':'text/html'});
fs.readFile('./index.html',(error,data)=>{
    if(error){
        response.writeHead(404);
        response.write(data);
    }
    else{
        response.write(data);
    }
    response.end();
});




}
http.createServer(onRequest).listen(8000);