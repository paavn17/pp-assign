
const express = require("express");
const cors = require("cors");

const PORT = 5000;

const app = express();
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "pong from bckend" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
