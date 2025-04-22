import express from "express";
const app = express();
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  console.log("someone ping here");
  res.status(200).json({ success: true, message: "pong" });
});

export default app;
