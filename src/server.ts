
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data/leaderboard.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`🚀 JSON Server corriendo en http://localhost:${port}`);
});