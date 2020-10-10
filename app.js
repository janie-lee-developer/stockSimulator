const app = require('express')();
const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
    console.log('running on 3000.');
});

var fs = require('fs');
fs.readFile('./stock_mock_data/mock_data.json', function(err, data) {
    var jsonData = JSON.parse(data);
    
    app.get('/index.html', function(req,res,next){
        res.json(jsonData);
    });
});

// const app = require('express')();
// const http = require('http');

// //The three helper functions used for serving static HTTP files.
// function send404(response) {
//     response.writeHead(404, {'Content-Type' : 'text/plain'});
//     response.write('Error 404: resource not found.');
//     response.end();
// }

// function sendFile(response, filePath, fileContents) {
//     // response.writeHead(200, {"content-type" : mime.lookup(path.basename(filePath))});
//     //받는 파일 타입을 html 이길 원한다.
//     response.writeHead(200,{'content-type': 'text/html'});
//     response.end(fileContents);
// }

// //Check if file is cached in memory, serve file from memory, check if file exists using fs, read file from dish or serve file read from disk. Send HTTP 404 error response
// function serveStatic(response, cache, absPath) {
//     if (cache[absPath]) {
//         sendFile(response, absPath, cache[absPath]);
//     } else {
//         fs.exists(absPath, function(exists) {
//             if(exists) {
//                 fs.readFile(absPath, function(err, data) {
//                     if(err) {
//                         send404(response);
//                     } else {
//                         cache[absPath] = data;
//                         sendFile(response, absPath, data);
//                     }
//                 });
//             } else {
//                 send404(response);
//             }
//         });
//     }
// }
// var cache = {};
// //Create HTTP server, define per-request behavior
// var server = http.createServer(function(request, response) {
//     var filePath = false;

//     if(request.url == '/') {
//         filePath = 'index.html';
//     }
//     var absPath = './' + filePath;
//     serveStatic(response, cache, absPath);
    
// });

// server.listen(3000, function() {
//     console.log('server listening on port 3000.');
// });

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//     res.sendFile(__dirname + 'stock_mock_data/mock_data.json');
// });
// const bodyParser = require('body-parser');
// const app = require('express')();
// const server = require('http').createServer(app);
// const fs = require('fs');
// const path = require('path');
// const mime = require('mime');
// const fetch = require('node-fetch');

// var url = '/Users/janielee/Desktop/Stock App/node_modules/node-fetch'
// fetch('./MOCK_DATA.json').then((resp) => resp.json()).then(function(data){
//     console.log(data[0]);
// })

// app.listen(3000, function() {
//     console.log("The server is running on port 3000.")
// })

// fs.readFile(stock, 'utf8', (err, data) => {
//     try {
//         data = JSON.parse(data);
//         console.log(data[0]);
//     } catch(e) {
//         console.log('error caught.');
//     }
// });