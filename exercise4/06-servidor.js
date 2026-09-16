const {createServer} = require ('node:http')

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('¡Hola desde Node.js!');
});

server.listen(port, hostname, () => {
  console.log(`Servidor ejecutándose en http://${hostname}:${port}/`);
});

// 1) El Servidor HTTP recibe peticiones de los usuarios, procesa la información necesaria y devuelve una respuesta como una página web. Mientras que el módulo http de Node.js Es la herramienta nativa que permite levantar ese servidor web directamente con JavaScript. Sirve para crear el objeto servidor, etc.

// 2) req (Request / Solicitud): Representa el pedido que hace el cliente. Contiene datos como la URL visitada, los parámetros, los datos enviados, etc.
// res (Response / Respuesta): Representa lo que el servidor le va a devolver al cliente. Nos Permite configurar el código de estado por ejemplo, 200 para OK, los encabezados y el cuerpo del mensaje el contenido final.

// 3) Un puerto es un número que funciona como una puerta o canal específico dentro de una computadora para que un programa reciba datos de la red. Escuchar en el 3000 significa que el servidor se queda activo y atento en esa puerta numérica (3000) esperando que llegue cualquier mensaje o pedido dirigida a él. 

// 4) Es un nombre de dominio estándar o predeterminado que apunta a tu propia computadora. Permite que tu computadora actúe como cliente y servidor al mismo tiempo para hacer pruebas locales.

// 5) 'curl' es una herramienta de la línea de comandos para enviar peticiones HTTP a un servidor y ver la respuesta en texto plano. Es útil porque permite probar rutas, enviar datos y revisar códigos de estado rápidamente desde la terminal, sin necesidad de abrir un navegador web.