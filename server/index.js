import express from "express";
import cors from "cors";
import { CLIENT_ORIGIN, PORT } from "./utils/env.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: CLIENT_ORIGIN }));

app.listen(PORT, () => {
  console.log("Server listening at port 3000.");
});
