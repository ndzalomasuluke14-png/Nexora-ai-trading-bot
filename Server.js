const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "AI Trading Bot backend is running",
    mode: "demo"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    connected: true,
    mode: "demo",
    message: "Backend connected successfully"
  });
});

app.post("/api/analyze", (req, res) => {
  const { pair = "EUR/USD", risk = "Low" } = req.body;

  // Temporary demo analysis.
  // Real market-data/AI logic will be connected later.
  const signals = ["BUY", "SELL", "WAIT"];
  const signal = signals[Math.floor(Math.random() * signals.length)];

  res.json({
    pair,
    risk,
    signal,
    mode: "demo",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`AI Trading Bot backend running on port ${PORT}`);
});
