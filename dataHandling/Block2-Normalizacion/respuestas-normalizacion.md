# ¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?

* El problema es que si ese autor cambia de nombre, o hay un error de tipeo, hay que corregirlo en decenas de filas.

# ¿Qué es la normalización, con tus propias palabras?

* La normalizacion vendria a ser como la separacion de diferentes datos de un proceso, por ejemplo en el caso de los autores y los libros, esta separado cada dato que se necesita por carpeta, los autores por un lado, los libros por otro, etc. Esto hace que dato viva en un lugar, esto hace tambien que los datos no se repitan.

# La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.

* La 1FN (Primera Forma Normal), es una regla fundamental en el diseño de bases de datos relacionales que exige que cada celda de una tabla contenga un único valor atomico (indivisible) y que no existan grupos o columnas repetidas

# Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).

*  Entidad 1: Pokémon
Esta entidad representa a la criatura en si.

Dato: Ratio de captura (o catch rate).
Es un numero propio de cada especie que define que tan facil o dificil es atraparlo con una Pokebola. 

* Entidad 2: Entrenador 
Esta entidad representa al jugador o personaje que junta a las criaturas.

Dato: Cantidad de medallas de gimnasio.
Es el logro que demuestra cuantos líderes de gimnasio vencio ese humano en su aventura. Un Pokemon puede ganar batallas, pero no junta medallas en su perfil; eso lo tiene solo el Entrenador.