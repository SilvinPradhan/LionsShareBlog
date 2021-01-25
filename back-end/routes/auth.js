const express = require("express");
// Handle incoming routes
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

// validators
const { runValidation } = require("../validator/index");
const {
  userSignUpValidator,
  userSignInValidator,
} = require("../validator/auth");

router.post("/signup", userSignUpValidator, runValidation, signup);
router.post("/signin", userSignInValidator, runValidation, signin);
router.get("/signout", signout);

// Testing - send valid token on sign in from headers, and put the token in the authorization header in Postman
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "Only the logged in user are allowed to access this page.",
  });
});

module.exports = router;
