import { Router } from "express";
import { scorersRouter } from "../config.js";

export const topScorersRoutes = Router();

topScorersRoutes.get("/league/:leagueId/top-scorers", (req, res) => {
  const leagueId = Number(req.params.leagueId);
  const topScorersData = scorersRouter.db.getState() as any;
  // Accede a los datos
  const topScorers = topScorersData.top_scorers.filter(
    (entry: { league_id: number }) => entry.league_id === leagueId
  );

  res.json(topScorers);
});
