const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const { signupValidation } = require("../lib/validators/signup.validator");
// TODO: add account restoration
// TODO: add account update
// TODO: add account deactivation
//signIn Controller
const signIn = async (req, res) => {
  console.log("signIn req.body", req.body);
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).send({ message: "user does not exist" });
    } else {
      const authenticated = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (authenticated) {
        const payload = {
          id: user._id,
          email: user.email,
          role: user.role,
        };
        const expiresIn = "1h";
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

        res.status(200).json({ token: token, userId: user._id });
      } else {
        res.status(401).send({ message: "Invalid password." });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong!!" });
  }
};

//signUp Controller
const signUp = async (req, res) => {
  try {
    const values = await signupValidation.schema.validateAsync(req.body);
    console.log(values);
    const user = await userModel.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = {
      ...req.body,
      password: hashedPassword,
    };

    const createdUser = await userModel.create(newUser);
    const userId = createdUser._id;
    const payload = {
      id: userId,
      email: createdUser.email,
      role: createdUser.role,
    };
    const expiresIn = "1d";
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

    res.json({ token, userId });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong", error });
  }
};

module.exports.userController = { signIn, signUp };
