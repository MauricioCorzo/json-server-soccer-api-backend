import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export const leaderboardRouter  = jsonServer.router(path.join(__dirname, "data/leaderboard.json"));
export const topScorersRouter  = jsonServer.router(path.join(__dirname, "data/top_scorers.json"));
export const middlewares = jsonServer.defaults();