var url = require ('url');
var fs =require('fs');
const renderHTML=(path, response)=>{
    response.writeHead(200,{'content-Type':'text/html'});
    fs.readFile(path,(error,data)=>{
        if(error){
            response.writeHead(404);
            response.write('File not found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
    
}
module.exports ={
    handleRequests: (request,response)=>{
        response.writeHead(200,{'Content-Type':'text/html'} );
        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('./index.html',response);
                break;
            case '/login':
                renderHTML('./login.html',response);
                break;
                default:
                    response.writeHead(404);
                    response.write('Route not defined');
                    response.end();
        }
    }

}