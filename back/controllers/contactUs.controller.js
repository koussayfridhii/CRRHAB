const sendMail = require("./mailing.controller");

//TODO: configure custom message
const contactUsController = async (req, res) => {
  try {
    const { name, email, message } = req.body; // Extract path from request body
    sendMail([email], name, message);
    res.status(200).json({
      message: `thank you Mr/Mrs ${name} your mail was sent`,
      success: true,
      error: false,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong!!!", error, success: false });
  }
};
module.exports = contactUsController;
