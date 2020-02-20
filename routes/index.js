const express = require("express");
const { uuid } = require("uuidv4");
const UserLogic = require("../logic/user");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");

const router = express.Router();

router.get("/login", (req, res, next) => res.render("login"));
router.post("/login", UserLogic.login);

router.use("*", UserLogic.authenticate);
router.get("/clients", (req, res, next) => {
  const { user } = res.locals;
  res.render("clients", { user });
});
router.get("/", (req, res, next) => res.render("dashboard"));

router.post("/record", upload.single("audio"), (req, res, next) => {
  if (!!req.file) {
    const { filename } = req.file;

    const targetFile = path.join(__dirname, "..", "uploads", filename);
    const resultWavFile = path.join(__dirname, "..", "uploads", "record.wav");

    ffmpeg(targetFile)
      .toFormat("wav")
      .save(resultWavFile); //path where you want to save your file

    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
