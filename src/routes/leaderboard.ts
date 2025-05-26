import { Router } from "express";
import { leaderboardRouter } from "../config.js";

export const leaderboardRoutes = Router();

leaderboardRoutes.get("/league/:leagueId/leaderboard", (req, res) => {
  const leagueId = Number(req.params.leagueId);
  const leaderboardData = leaderboardRouter.db.getState() as any;
  console.log(leaderboardData);
  // Accede a los datos
  const leaderboard = leaderboardData.leaderboard.filter(
    (entry: { league_id: number }) => entry.league_id === leagueId
  );

  res.json(leaderboard);
});
