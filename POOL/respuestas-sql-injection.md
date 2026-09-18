# Con tus palabras, ¿qué es un ataque de SQL Injection? Dá un ejemplo simple (no hace falta que sea de tu proyecto) de un input que podría romper una query mal armada.

* Un ataque de SQL Injection, seria algo como vulnerar la seguridad que permite a una persona manipular las consultas que una aplicación web envía a su base de datos para acceder a información protegida. Un ejemplo simple seria algo como buscar un nombre de usuario y contraseña para poder entrar a su cuenta bancaria o otro tipo de app. 
SELECT * FROM usuarios WHERE nombre = '[DATO_DEL_USUARIO]' AND clave = '[CLAVE]', este select esta seleccionando, todos los datos del dominio o tabla usuarios de la base de datos, 'WHERE' busca cierto nombre y la clave que quiera hakear el ladron. 

# ¿Qué diferencia concreta hay, a nivel de cómo se ejecuta la query, entre concatenar un string y usar un placeholder ($1, $2)?

* Concatenando el input directamente en el texto de la query es peligroso si alguien manda un input diseñado para alterar la estructura de la consulta, puede lograr que la base de datos ejecute algo que vos nunca escribiste, esto se llama SQL Injection, uno de los ataques más comunes contra aplicaciones web con la query parametrizada el input se pasa por separado, como un valor asociado a un placeholder (algo como $1, $2), y la librería se encarga de tratarlo siempre como un dato, nunca como código SQL ejecutable

# Elegí una ruta de tu propia API (o de starter-api) que reciba un dato del usuario (por ejemplo, un id o un nombre en el body). Si esa ruta armara su query concatenando ese dato directamente, ¿qué tendría que mandar alguien en ese campo para intentar alterar la consulta? (no hace falta ejecutarlo, alcanza con describirlo)

* Despues de buscar la info, la conclusion seria.

SELECT * FROM pokemons WHERE name = 'Pikachu' OR '1'='1' --;

Como la condición '1'='1' -- siempre es verdadera, la base de datos se ve forzada a devolver todos los registros de la tabla, saltándose el filtro original.
La conclusión final seria que nunca se tiene que concatenar la entrada del usuario directamente en una query. Hacerlo rompe la seguridad del sistema y permite a un atacante alterar la lógica del negocio, robar información o incluso borrar datos (por ejemplo, poniendo un DROP TABLE). La solución definitiva es usar siempre consultas parametrizadas. 