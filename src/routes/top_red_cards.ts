import { Router } from "express";
import { redCardsRouter } from "../config.js";

export const topRedCardsRoutes = Router();

topRedCardsRoutes.get("/league/:leagueId/top-red-cards", (req, res) => {
  const leagueId = Number(req.params.leagueId);
  const topRedCardsData = redCardsRouter.db.getState() as any;
  // Accede a los datos
  const topRedCards = topRedCardsData.top_red_cards.filter(
    (entry: { league_id: number }) => entry.league_id === leagueId
  );

  res.json(topRedCards);
});
