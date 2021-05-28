const express = require("express");
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Belajar Docker</h1> <br> <h1>Hello, ${process.env.NAME}, ${process.env.CITY}</h1>`);
});

const PORT = 8080;
app.listen(PORT, () => `Server is running on PORT ${PORT}`);