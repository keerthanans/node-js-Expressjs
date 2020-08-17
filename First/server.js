var http = require('http');
const onRequest=(request, response)=>{
response.writeHead(200,{'content-Type':'text/plain'});
response.write('Hello World');
response.end();

}
http.createServer(onRequest).listen(8000);