import { pool } from "./db.js";


export async function getAllMovies() {
    try {
        const res = await pool.query('SELECT * FROM movies')
        console.log(res.rows)

        return res
    } catch (error) {
        console.error(error.message)
    }
}
getAllMovies();