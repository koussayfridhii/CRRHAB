const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// signIn Controller
const signIn = async (req, res) => {
  console.log("signIn req.body", req.body);
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).send({ message: "User does not exist" });
    } else if (!user.isActive) {
      res.status(401).send({
        message: "User account is not active contact the administartion",
      });
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
        const expiresIn = process.env.JWT_EXPIRES_IN;
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

        res.status(200).json({
          token: token,
          userId: user._id,
          ...user._doc,
        });
      } else {
        res
          .status(401)
          .json({ message: "Invalid password.", error: true, success: false });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!!" });
  }
};

// signUp Controller
const signUp = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .send({ message: "User already exists!", success: false, error: true });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    let profilePic = req.body.profilePic;
    if (!profilePic) {
      profilePic = `https://avatar.iran.liara.run/public/boy?username=${req.body.username}`;
    }

    const newUser = {
      ...req.body,
      profilePic,
      password: hashedPassword,
    };

    const createdUser = await userModel.create(newUser);
    const userId = createdUser._id;
    const payload = {
      id: userId,
      email: createdUser.email,
      role: createdUser.role,
    };
    const expiresIn = process.env.JWT_EXPIRES_IN;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

    res.json({
      token: token,
      userId: createdUser._id,
      role: createdUser.role,
      fullName: createdUser.fullName,
      expiresIn,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Something went wrong", error, success: false });
  }
};

// getUsersForSidebar Controller
const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.params.id;
    const filteredUsers = await userModel
      .find({ _id: { $ne: loggedInUserId } })
      .select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

// Restore Account Controller
const restoreAccount = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email, isActive: false });

    if (!user) {
      return res.status(404).json({
        message: "User not found or already active",
        success: false,
        error: true,
      });
    }

    user.isActive = true;
    await user.save();

    res.status(200).json({
      message: "Account restored successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in restoreAccount: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

// Update Account Controller
const updateAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const existingUser = await userModel.findById(id);

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "utilisateur non trouvée", success: false });
    }

    // Mettre à jour la vidéo avec les nouvelles données, sans modifier le champ _id
    existingUser.set({ ...req.body, _id: existingUser._id });

    // Sauvegarder la vidéo mise à jour dans la base de données
    await existingUser.save();

    return res.status(200).json({
      message: "user mise à jour avec succès !",
      videoId: existingUser._id,
      success: true,
    });
  } catch (error) {
    console.error("Error in updateAccount: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

// Deactivate Account Controller
const deactivateAccount = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false, error: true });
    }

    user.isActive = false;
    await user.save();

    res.status(200).json({
      message: "Account deactivated successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in deactivateAccount: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

// Forgot Password Controller
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false, error: true });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = await bcrypt.hash(resetToken, 12);

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASS,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.NODE_MAILER_USER,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      http://${process.env.FRONT_URL}/reset/${resetToken}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Reset password email sent",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in forgotPassword: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

// Reset Password Controller
const resetPassword = async (req, res) => {
  try {
    const resetToken = req.params.token;
    const user = await userModel.findOne({
      resetPasswordToken: { $exists: true },
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Password reset token is invalid or has expired",
        success: false,
        error: true,
      });
    }

    const isTokenValid = await bcrypt.compare(
      resetToken,
      user.resetPasswordToken
    );
    if (!isTokenValid) {
      return res.status(400).json({
        message: "Password reset token is invalid or has expired",
        success: false,
        error: true,
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      message: "Password has been reset",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error in resetPassword: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error, success: false });
  }
};

module.exports.userController = {
  signIn,
  signUp,
  getUsersForSidebar,
  restoreAccount,
  updateAccount,
  deactivateAccount,
  forgotPassword,
  resetPassword,
};
