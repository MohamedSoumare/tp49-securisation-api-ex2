import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 3,
  message: "Trop de requêtes effectuées à partir de cette ressource, veuillez réessayer plus tard."
});
app.use(limiter);

// Configuration de CORS
const corsOptions = {
  origin: 'http://localhost:', // Remplacez par l'origine autorisée
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Route GET /api/hello
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
