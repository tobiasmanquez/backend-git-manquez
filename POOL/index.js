import express from 'express';
import { DeleteMovies, GetGenres, GetMovies, PostGenre, PostMovies } from './testing.js';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/movies', async (_req, res) => {
    GetMovies(_req, res)
});

app.get('/genres', async (_req, res) => {
    GetGenres(_req, res)
});


app.post('/genres', async (req, res) => {
    PostGenre(req, res);
});

app.post('/movies', async (req, res) => {
    PostMovies(req, res);
});

app.delete('/movies/:id', (req, res) => {
    DeleteMovies(req, res);
});


app.listen(PORT, () => {
  console.log(`starter-api corriendo en http://localhost:${PORT}`);
});