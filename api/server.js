const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
//
//
const userRoute = require("./routes/users");
const messageRoute = require("./routes/messages");
const conversationRoute = require("./routes/conversations");
//
//

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

app.use("/api/auth", userRoute);
app.use("/api/message", messageRoute);
app.use("/api/conversation", conversationRoute);

app.listen(5500, () => {
  console.log("Backend server is running!");
});
