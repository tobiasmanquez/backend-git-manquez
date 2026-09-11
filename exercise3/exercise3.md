# Reto 1 — Ver tu propia request
* Objetivo: Lograr que el servidor te devuelva, en el body de la respuesta, exactamente los headers que vos le mandaste.
Pista: el endpoint que necesitás es '/headers'.
Extra: agregá un header personalizado tuyo (por ejemplo 'X-Alumno: tu-nombre') y confirmá que aparece en la respuesta.

curl https://httpbin.org/headers -H "Alumno: Tobias"
{
  "headers": {
    "Accept": "*/*", 
    "Alumno": "Tobias", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41b5b-534c65de3a5e6d473306011c"
  }
}


# Reto 2 — Mandar Body y Content-Type, y verificar que llego bien
* ¿En qué parte del JSON de respuesta aparece el body que mandaste?
* ¿Qué pasa si mandás el body sin indicar el tipo de contenido? Probalo y compará.

curl  https://httpbin.org/post  -H "Alumno: Tobias" -d "body=saludos"    
{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "body": "saludos" aca aparece
  }, 
  "headers": {
    "Accept": "*/*", 
    "Alumno": "Tobias", 
    "Content-Length": "12", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41cdd-149c713f1c00bf816ff5b6ae"
  }, 
  "json": null, 
  "origin": "190.55.239.132", 
  "url": "https://httpbin.org/post"
}

* Body sin indicar el contenido.
* No ocurre nada, solamente envia lo que esta dentro de las comillas 

curl  https://httpbin.org/post  -H "Alumno: Tobias" -d "saludos"     
{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "saludos": ""
  }, 
  "headers": {
    "Accept": "*/*", 
    "Alumno": "Tobias", 
    "Content-Length": "7", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41da1-25f1d80b2d52c0cf1ec65b6f"
  }, 
  "json": null, 
  "origin": "190.192.146.29", 
  "url": "https://httpbin.org/post"
}



# Reto 3 — Provocar un status code a pedido
* ¿Cómo te das cuenta del código de status sin ver ningún body en la respuesta? ¿Qué flag o técnica usaste?


curl -i  https://httpbin.org/status/{404} 
HTTP/2 404 
date: Fri, 11 Sep 2026 15:32:44 GMT
content-type: text/html; charset=utf-8
content-length: 0
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true

curl -i  https://httpbin.org/status/{500} 
HTTP/2 500 
date: Fri, 11 Sep 2026 15:34:51 GMT
content-type: text/html; charset=utf-8
content-length: 0
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true


# Reto 4 — Seguir una redirección
* ¿Qué código de status viste en el primer intento?
* ¿Qué header te decía a dónde te tenías que redirigir?
* ¿Cuántas líneas de "salto" ves si le pedís a curl que te muestre el detalle completo de la comunicación mientras sigue las redirecciones?



# Reto 5 — Simular lentitud de red
* Objetivo: El endpoint '/delay/5' tarda 5 segundos en responder. Hacé la petición y medí cuánto tiempo real tardó en completarse (no hace falta un flag de curl para esto, puede valer un truco de terminal).


# Reto 6 — Autenticación básica
 * Objetivo: El endpoint '/basic-auth/usuario/clave123' requiere autenticación. Primero probá acceder sin credenciales y observá qué código de status te devuelve. Después conseguí autenticarte correctamente.


 