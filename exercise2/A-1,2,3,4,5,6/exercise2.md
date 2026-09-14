# Exercise 2  - A.1

* ¿Qué versión de TLS/protocolo aparece en el handshake?
* ¿Cuál es el código de status de la respuesta?
* Anotá al menos 3 headers de la respuesta y qué creés que significa cada uno.

1. SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384 / [blank] / UNDEF
2. Request completely sent off “ HTTP/2 200 “
3. 
A- content-type: application/json; charset= utf-8. Esta línea dice qué tipo de información estás recibiendo y cómo leerla.
B- content-length: 292. Esta línea dice qué tan grande es el mensaje
C-  cache-control: max-age=43200. Esta línea da instrucciones sobre cómo guardar una copia del mensaje para ahorrar tiempo en el futuro.

# A.2 GET

* ¿Cuántos resultados devolvió?
* ¿Cómo armaste la URL para filtrar? 

1. Devuelve 5 resultados 
2. 'https://jsonplaceholder.typicode.com/comments?postId=1'

# A.3 POST
* ¿Qué código de status devolvió?
* ¿Qué id le asignó el servidor al nuevo recurso? ¿Por qué creés que pasa eso, sabiendo que la API no persiste datos?

1. Código de status = HTTP/2 201 
2. Nueva id= id": 101 

# A.4 PATCH O PUT

* ¿Qué diferencia notás (o investigás) entre usar PUT y PATCH?
* ¿El body de la respuesta refleja el cambio que mandaste?

1. PATCH: Modificación parcial
2. PUT: Reemplazo total 

# A.5 DELETE

* ¿Qué código de status devolvió?
* ¿Qué contenido tiene el body de la respuesta?  1. HTTP/2 200  2. No contiene nada el body 

# A.6 Recurso inexistente

* ¿Qué código de status devolvió?
* ¿Cómo es el body de la respuesta en este caso?

1. HTTP/2 404 tira error 404
2. No contiene nada el body como en DELETE
