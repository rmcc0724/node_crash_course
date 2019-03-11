const http = require('http');
http.createServer((requires) => {
    res.write('Hello World');
    res.end();
}).
listen(5000, () => console.log('Server Running'));