# ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?

* La diferencia principal entre las bases de datos SQL y NoSQL esta en que las primeras son relacionales, usan tablas estructuradas con un esquema fijo y como lo dice la palabra se relacionan entre si entre sus tablas y elementos, y las segundas son no relacionales y flexibles, permitiendo almacenar datos variables o sin estructura predefinida. 

# Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).

* Motores de Base de Datos Relacionales
 PostgreSQL 
 MySQL

* Motores de Base de Datos No Relacionales
 MongoDB (Documentos) 
 Redis (Clave-Valor)

# Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.

* WikiMon
{
  "_id": 6,
  "name": "charizard",
  "base_experience": 240,
  "height": 17,
  "weight": 905,
  "is_default": true,
  "order": 7,
  "abilities": [    
    {
      "name": "blaze",
      "is_hidden": false,
      "effect": "Aumenta los movimientos de tipo fuego cuando tiene poca salud."
    },
    {
      "name": "solar-power",
      "is_hidden": true,
      "effect": "Aumenta el ataque especial bajo el sol, pero pierde vida."
    }
  ],
  "home_region": {
    "name": "kanto",
    "generation": "generation-i"
  }
}

* 2

{
  "_id": 25,
  "name": "pikachu",
  "base_experience": 112,
  "height": 4,
  "weight": 60,
  "is_default": true,
  "order": 35,
  "abilities": [
    {
      "name": "static",
      "is_hidden": false,
      "effect": "Puede paralizar al enemigo si lo tocan."
    },
    {
      "name": "lightning-rod",
      "is_hidden": true,
      "effect": "Atrae los ataques eléctricos y sube su ataque especial."
    }
  ],
  "home_region": {
    "name": "kanto",
    "generation": "generation-i"
  }
}

# ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).

* Elegiria base no relacional datos completamente no estructurados o esquemas en constante cambio en el caso de si guardas objetos dificiles que cambian para cada usuario o cada registro como catálogos de productos, usar tablas relacionales te obligaria a hacer migraciones constantes o a poblar tablas con columnas vacías. Las bases de datos de documentos como MongoDB resuelven esto de forma natural y no relacional. 