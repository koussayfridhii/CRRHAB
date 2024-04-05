const { linkModel } = require("../models/link.model");
const postLink = async (req, res) => {
  try {
    const { link } = req.body; // Extract link from request body
    // Check if link with the same link already exists
    const existingLink = await linkModel.findOne({ link });

    if (existingLink) {
      return res
        .status(409)
        .json({ message: "this link already exists!!", success: false });
    }
    const createdLink = await linkModel.create(req.body);
    return res.status(201).json({
      message: "link added successfully!",
      linkId: createdLink._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getLink = async (req, res) => {
  try {
    const link = await linkModel.find();
    return res
      .status(201)
      .json({ message: "all found link!", link, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putLink = async (req, res) => {
  try {
    const id = req.params.id;
    const existingLink = await linkModel.findById(id);

    if (!existingLink) {
      return res
        .status(404)
        .json({ message: "link not found", success: false });
    }
    // Update the link with new data, excluding the _id field
    existingLink.set({ ...req.body, _id: existingLink._id });

    // Save the updated link to the database
    await existingLink.save();

    return res.status(200).json({
      message: "link updated successfully!",
      linkId: existingLink._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteLink = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedLink = await linkModel.deleteOne({ _id: id });

    if (!deletedLink.deletedCount) {
      // No link found with the provided link
      return res
        .status(404)
        .json({ message: "link not found!", success: false });
    }

    return res.status(200).json({
      message: "link deleted successfully!",
      success: true,
      deletedLinkId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.linkControllers = {
  postLink,
  putLink,
  deleteLink,
  getLink,
};
