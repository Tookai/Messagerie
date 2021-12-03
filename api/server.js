const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());

// ---------- MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// ----------

app.use(async (req, res) => {
  try {
    res.status(200).json("Bonjour depuis le serveur.");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5500, () => {
  console.log("Backend server is running!");
});
