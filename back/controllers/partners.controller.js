const { partnerModel } = require("../models/partners.model");
const postPartner = async (req, res) => {
  try {
    const { name } = req.body; // Extract name from request body
    // Check if partner with the same name already exists
    const existingPartner = await partnerModel.findOne({ name });

    if (existingPartner) {
      return res
        .status(409)
        .json({ message: "this partner already exists!!", success: false });
    }
    const partner = await partnerModel.create(req.body);
    return res
      .status(201)
      .json({ message: "partner added successfully!", partnerId: partner._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getPartner = async (req, res) => {
  try {
    const partner = await partnerModel.find();
    return res
      .status(201)
      .json({ message: "all found partner!", partner, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putPartner = async (req, res) => {
  try {
    const id = req.params.id;
    const existingPartner = await partnerModel.findById(id);

    if (!existingPartner) {
      return res
        .status(404)
        .json({ message: "partner not found", success: false });
    }
    // Update the partner with new data, excluding the _id field
    existingPartner.set({ ...req.body, _id: existingPartner._id });

    // Save the updated partner to the database
    await existingPartner.save();

    return res.status(200).json({
      message: "partner updated successfully!",
      partnerId: existingPartner._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deletePartner = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedpartner = await partnerModel.deleteOne({ _id: id });

    if (!deletedpartner.deletedCount) {
      // No media found with the provided name
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

module.exports.partnerControllers = {
  postPartner,
  putPartner,
  deletePartner,
  getPartner,
};
