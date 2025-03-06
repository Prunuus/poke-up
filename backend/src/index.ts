import express from "express";
import dotenv from "dotenv";
import userController from "./controllers/userController.ts";

dotenv.config();

const app: express.Express = express();
const port = process.env.PORT || 3000;

app.use("/users", express.json());

app.use("/users", userController);

app.get("/", (res: express.Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: Press Ctrl+C to quit.`);
});

export default app;
