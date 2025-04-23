import express from "express";
import diagnoseRoutes from "./src/routes/diagnoseRoute";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/ping", (_req, res) => {
  console.log("someone ping here");
  res.status(200).json({ success: true, message: "pong" });
});

app.use("/api/diagnoses", diagnoseRoutes);

export default app;
