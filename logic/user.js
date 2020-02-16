const debugLogicUser = require("debug")("25hours:logic:user");

const tempUser = { id: "a", pw: "a", name: "문성혁" };
const tempJWT = "dafsnboio129vvpp30%qsqk";

const login = (req, res, next) => {
  const { id, pw } = req.body;
  debugLogicUser("Login attempted :", { id, pw });
  if (id === tempUser.id && pw === tempUser.pw) {
    debugLogicUser("Login succeeded :", tempUser);
    res.cookie("sid", tempJWT);
    return res.redirect("clients");
  } else {
    debugLogicUser("Login failed");
    return res.redirect("login");
  }
};

const authenticate = (req, res, next) => {
  const { sid } = req.cookies;
  if (sid) {
    debugLogicUser("User authenticated with cookies");
    res.locals.user = tempUser;
    return next();
  } else {
    debugLogicUser("No user info in cookies");
    return res.redirect("login");
  }
};

module.exports = { login, authenticate };
