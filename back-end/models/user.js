const mongoose = require("mongoose");
// Hash Password
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true,
    },
    profile: {
      type: String,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    salt: String,
    about: {
      type: String,
    },
    role: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Save hashed password in the database
userSchema
  .virtual("password")
  .set(function (password) {
    // create temporary variable called _password
    this._password = password;
    // generate salt used for hashing algorithm
    this.salt = this.makeSalt();
    // encrypt password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  // authenticate the user (compare passwords) - hashed version with string password
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);
