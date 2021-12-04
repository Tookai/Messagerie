const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const hashedPw = await bcrypt.hash(req.body.password, 10);
  try {
    const newUser = new User({
      pseudo: req.body.pseudo,
      password: hashedPw,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ pseudo: req.body.pseudo });
    if (!user) {
      req.status(404).json(`Pas d'utilisateurs avec ce pseudo.`);
    } else {
      const validPw = await bcrypt.compare(req.body.password, user.password);
      if (!validPw) {
        res.status(401).json(`Le mot de passe  n'est pas bon.`);
      } else {
        res.status(200).json(user);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//
//
module.exports = router;
