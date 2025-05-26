import express from "express";
import { leaderboardRoutes } from "./routes/leaderboard.js";
import { topScorersRoutes } from "./routes/top_scorers.js";
import { topAssistsRoutes } from "./routes/top_assists.js";
import { topRedCardsRoutes } from "./routes/top_red_cards.js";
// import topScorersRoutes from "./routes/topScorers.js";
// import topAssistsRoutes from "./routes/topAssists.js";
import {
  middlewares,
  leaderboardRouter,
  scorersRouter,
  assistsRouter,
  redCardsRouter,
} from "./config.js";

const server = express();

server.use(middlewares);

// 🔹 Cargar rutas personalizadas
server.use(leaderboardRoutes);
server.use(topScorersRoutes);
server.use(topAssistsRoutes);
server.use(topRedCardsRoutes);

// 🔹 Servir JSON Server con múltiples archivos
server.use("/leaderboard", leaderboardRouter);
server.use("/top_scorers", scorersRouter);
server.use("/top_assists", assistsRouter);
server.use("/top_red_cards", redCardsRouter);

server.listen(3001, () => {
  console.log("🚀 JSON Server corriendo en http://localhost:3001");
});
