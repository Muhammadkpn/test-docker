const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Belajar Docker</h1>");
});

const PORT = 2000;
app.listen(PORT, () => `Server is running on PORT ${PORT}`);