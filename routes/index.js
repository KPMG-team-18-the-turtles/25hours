const express = require("express");
const { uuid } = require("uuidv4");
const UserLogic = require("../logic/user");

const router = express.Router();

router.get("/login", (req, res, next) => res.render("login"));
router.post("/login", UserLogic.login);

router.use("*", UserLogic.authenticate);
router.get("/clients", (req, res, next) => {
  const { user } = res.locals;
  res.render("clients", { user });
});
router.get("/", (req, res, next) => res.render("dashboard"));

module.exports = router;
