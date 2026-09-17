import { pool } from "./index.js";


export async function showOrderMovies() {
    try {
        const res = await pool.query('SELECT * FROM movies')
        console.log(res.rows)

        return res
    } catch (error) {
        console.error(error.message)
    }
}
showOrderMovies();