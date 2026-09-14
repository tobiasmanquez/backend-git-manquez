const http = require('http');

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.url === "/") {
        res.statusCode = 200;
        res.end('inicio')
    }

    else if (req.url === "/alumnos") {
        res.statusCode = 200;
        res.end('Carlos, Maria, Juan')
    }

    else {
        res.statusCode = 404;
        res.end('No encontrado')
    }

});

server.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en http://${hostname}:${port}/`);
});

// Respuestas desde la terminal:

// tmanquez@MBP-de-Diego-2 exercise4 % curl  http://localhost:4000/ 
// inicio%                                                                                                                                    
// tmanquez@MBP-de-Diego-2 exercise4 % curl  http://localhost:4000/alumnos
// Carlos, Maria, Juan%                                                                                                                       
// tmanquez@MBP-de-Diego-2 exercise4 % curl  http://localhost:4000/profesores
// No encontrado%        