import { Router } from "express";
import { leaderboardRouter } from "../config.js";

const leaderboardRoutes = Router();

leaderboardRoutes.get("/league/:leagueId/leaderboard", (req, res) => {
  const leagueId = Number(req.params.leagueId);
  const leaderboard = leaderboardRouter.db
  console.log({leaderboard})
 
});

export default leaderboardRoutes;