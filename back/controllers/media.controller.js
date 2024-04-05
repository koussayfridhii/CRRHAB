const { mediaModel } = require("../models/media.model");
const postMedia = async (req, res) => {
  try {
    const { link } = req.body; // Extract path from request body
    // Check if media with the same path already exists
    const existingMedia = await mediaModel.findOne({ link });

    if (existingMedia) {
      return res
        .status(409)
        .json({ message: "this media already exists!!", success: false });
    }
    const media = mediaModel.create(req.body);
    return res
      .status(201)
      .json({ message: "media added successfully!", mediaId: media._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getMedia = async (req, res) => {
  try {
    const media = await mediaModel.find();
    return res
      .status(201)
      .json({ message: "all found media!", media, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putMedia = async (req, res) => {
  try {
    const id = req.params.id;
    const existingMedia = await mediaModel.findById(id);

    if (!existingMedia) {
      return res
        .status(404)
        .json({ message: "media not found", success: false });
    }
    // Update the media with new data, excluding the _id field
    existingMedia.set({ ...req.body, _id: existingMedia._id });

    // Save the updated media to the database
    await existingMedia.save();

    return res.status(200).json({
      message: "media updated successfully!",
      mediaId: existingMedia._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteMedia = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMedia = await mediaModel.deleteOne({ _id: id });

    if (!deletedMedia.deletedCount) {
      // No media found with the provided path
      return res
        .status(404)
        .json({ message: "media not found!", success: false });
    }

    return res.status(200).json({
      message: "media deleted successfully!",
      success: true,
      deletedMediaId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.mediaControllers = {
  postMedia,
  putMedia,
  deleteMedia,
  getMedia,
};
