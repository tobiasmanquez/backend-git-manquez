import { syncBuiltinESMExports } from "node:module";
    import { pool } from "./db.js";

    export async function PostGenre(req, res) {    
        try {

            const { name } = req.body;

            const queryText = 'INSERT INTO genres (name) VALUES ($1)'
            const values = [name]
            const content = await pool.query(queryText, values)
            
            res.status(201).json({
                mensage: `Creado Correctamente ${name}`
            });
            return res
        }
        catch (error)
        {
            res.status(500).json({ error: error.message });
        }
    }
    export async function postMovies(req, res) {
        const { title, synopsis , trailer_url, release_year } = req.body;
        if (!title) return res.status(400).json({ error: 'No tenes un titulo, escribilo' });
        if (!synopsis) return res.status(400).json({ error: 'No hay una synopsis, redactala' });
        if (!trailer_url) return res.status(400).json({ error: 'Pega el link del Trailer' });
        if (!release_year) return res.status(400).json({ error: 'Escribe la Fecha de Lanzamiento' });

        try {
            const values = [title, synopsis, trailer_url, release_year]
            const queryText =`INSERT INTO movies (title, synopsis, trailer_url, realease_year) VALUES ($1, $2, $3, $4)`
            const content = await pool.query(queryText, values)

            res.status(201).json({
                mensage: `Creado Corectamente ${values}`
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    export async function getAllMovies(req, res) {
        try {
            const result = await pool.query('SELECT * FROM movies');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    export async function getAllGenres(req, res) {
        try {
            const result = await pool.query('SELECT * FROM genres');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    