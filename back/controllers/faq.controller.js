const { faqModel } = require("../models/faq.model");
const postFaq = async (req, res) => {
  try {
    const { title } = req.body; // Extract title from request body
    // Check if title with the same title already exists
    const existingFaq = await faqModel.findOne({ title });

    if (existingFaq) {
      return res
        .status(409)
        .json({ message: "this faq already exists!!", success: false });
    }
    const createdFaq = await faqModel.create(req.body);
    return res.status(201).json({
      message: "faq added successfully!",
      faqId: createdFaq._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getFaq = async (req, res) => {
  try {
    const faq = await faqModel.find();
    return res
      .status(201)
      .json({ message: "all found faq!", faq, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putFaq = async (req, res) => {
  try {
    const id = req.params.id;
    const existingFaq = await faqModel.findById(id);

    if (!existingFaq) {
      return res.status(404).json({ message: "faq not found", success: false });
    }
    // Update the faq with new data, excluding the _id field
    existingFaq.set({ ...req.body, _id: existingFaq._id });

    // Save the updated faq to the database
    await existingFaq.save();

    return res.status(200).json({
      message: "faq updated successfully!",
      faqId: existingFaq._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteFaq = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedFaq = await faqModel.deleteOne({ _id: id });

    if (!deletedFaq.deletedCount) {
      // No faq found with the provided faq
      return res
        .status(404)
        .json({ message: "faq not found!", success: false });
    }

    return res.status(200).json({
      message: "faq deleted successfully!",
      success: true,
      deletedFaqId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.faqControllers = {
  postFaq,
  putFaq,
  deleteFaq,
  getFaq,
};
