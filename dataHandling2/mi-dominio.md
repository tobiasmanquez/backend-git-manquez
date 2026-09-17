# Creá las tablas de tu dominio utilizando la sentencia CREATE TABLE, con las columnas y tipos de datos correspondientes a tu diagrama. Cada tabla lleva su clave primaria (PRIMARY KEY), y si tiene clave foránea, agregala con REFERENCES.
 
CREATE TABLE genres (id SERIAL PRIMARY KEY, name VARCHAR (50));

CREATE TABLE movies ( id SERIAL PRIMARY KEY, title VARCHAR (10), synopsis VARCHAR (100), trailer_url VARCHAR (100), release_year DATE, genres_id INTEGER REFERENCES genres(id));

# Poblá cada tabla con al menos 5 filas de datos de prueba, usando INSERT.

INSERT INTO genres (name) VALUES ('Drama'), ('Comedia'), ('Terror'), ('Suspenso'), ('Ficcion'), ('Accion');

INSERT INTO movies (title, synopsis, trailer_url, release_year, genres_id) VALUES ('Inception', 'Un ladrón prófugo, experto en el arte de entrar a los sueños de las personas para robar sus secretos, recibe la oportunidad de borrar su historial criminal si logra hacer lo opuesto', 'https://www.youtube.com', '2010-07-16', 5), 
('Parasite', 'Una familia de bajos recursos, llena de astucia y carisma, logra infiltrarse poco a poco como trabajadores domésticos en la lujosa casa de una adinerada e ingenua familia.', 'https://youtube.com', '2019-05-30', 5), 
('Spider-Man: Into the Spider-Verse', 'El joven Miles Morales se convierte en el nuevo Spider-Man de su universo. Pronto descubre que portales interdimensionales se han abierto, trayendo a diferentes versiones de héroes arácnidos de otras realidades para detener una amenaza común.', 'https://youtube.com', '2018-12-14', 6), 
('Interstellar', 'Con la Tierra al borde del colapso ambiental, un grupo de valientes astronautas y científicos viaja a través de un agujero de gusano en el espacio para encontrar un nuevo hogar habitable para la humanidad.', 'https://youtube.com', '2014-11-05', 5), 
('Whiplash', 'Un joven y ambicioso baterista de jazz se inscribe en un conservatorio de música muy exigente. Allí conoce a un instructor feroz y perfeccionista que utiliza métodos extremos e infunde terror para llevar el talento de sus alumnos al límite.', 'https://youtube.com', '2014-10-10', 1); 

# Corré todo el script en pgAdmin (o con psql) y confirmá que las tablas se crearon con sus datos, antes de darlo por terminado.
* Confirmo que se crearon con exito

# Guardá todo en un único archivo .sql en tu repo, llamado mi-dominio.sql.


