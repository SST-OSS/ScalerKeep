import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3000;

// Define a route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
