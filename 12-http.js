const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);

    if(req.url === '/') {
        res.write('Welcome to homepage');     
        res.end();   
    }
    if(req.url === '/about') {
        res.write('about page');
        res.end();
    }

    res.write(`<h1>Opps!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    res.end();
})

server.listen(5000);