import express from "express";
import "dotenv/config.js";
import userController from "./controllers/userController.ts";

const app: express.Express = express();
const port: string = process.env.PORT!;

app.use("/users", express.json());

app.use("/users", userController);

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: Press Ctrl+C to quit.`);
});

export default app;
