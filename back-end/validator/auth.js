const { check } = require("express-validator");

// RegEx used:
/**The string must contain at least 1 lowercase alphabetical character
 * The string must contain at least 1 uppercase alphabetical character
 * The string must contain at least 1 numeric character
 * The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
 * The string must be eight characters or longer
 */
exports.userSignUpValidator = [
  check("name").not().isEmpty().withMessage("Name is required."),
  check("email").isEmail().withMessage("Must be a valid email address."),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long.")
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    )
    .withMessage(
      "The string must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character,1 numeric character,special character, but we are escaping reserved RegEx characters to avoid conflict,must be eight characters or longer"
    ),
];

exports.userSignInValidator = [
  check("email").isEmail().withMessage("Must be a valid email address."),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password field can not be empty.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];
