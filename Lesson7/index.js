const http = require('http');
const fs = require('fs');
const PORT =  3000;
hostName =  '127.0.0.1';

const handleReadFile = (statusCode, fileLocation, res) => {
    fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, {'content-type' : 'text/html'});
        res.write(data);
        res.end;
    });
}

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        handleReadFile(200, './views/index.html', res);
    }
    else if(req.url == '/about'){
        handleReadFile(200, './views/about.html', res);
    }
    else if(req.url == '/contact'){
        handleReadFile(200, './views/contact.html', res);
    }
    else{
        handleReadFile(404, './views/error.html', res);
    }
    
    
});

server.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});