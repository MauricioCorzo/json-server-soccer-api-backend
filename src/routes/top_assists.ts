import { Router } from "express";
import { assistsRouter } from "../config.js";

export const topAssistsRoutes = Router();

topAssistsRoutes.get("/league/:leagueId/top-assists", (req, res) => {
  const leagueId = Number(req.params.leagueId);
  const topAssistsData = assistsRouter.db.getState() as any;
  // Accede a los datos
  const topAssists = topAssistsData.top_assists.filter(
    (entry: { league_id: number }) => entry.league_id === leagueId
  );

  res.json(topAssists);
});
