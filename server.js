import express from 'express';
import dbInit from './db/init.js';
import cors from 'cors';
import leaderboardRoutes from "./routes/leaderboardRoutes.js";

const app = express();
const port = process.env.PORT || 8000;

await dbInit();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.get('/', (req, res) => {
  res.json({ msg: 'Running' });
});

app.use('/leaderboard', leaderboardRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ msg: err.message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
