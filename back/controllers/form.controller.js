const { formModel } = require("../models/form.model");

const postForm = async (req, res) => {
  try {
    const { label } = req.body; // Extract path from request body
    // Check if page with the same path already exists
    const existingInput = await formModel.findOne({ label });

    if (existingInput) {
      return res
        .status(409)
        .json({ message: "this input already exists!!", success: false });
    }
    const form = formModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Input added successfully!", formId: form._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getForm = async (req, res) => {
  try {
    const inputs = await formModel.find();
    return res
      .status(201)
      .json({ message: "all found Inputs!", inputs, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putForm = async (req, res) => {
  try {
    const id = req.params.id;
    const existingForm = await formModel.findById(id);

    if (!existingForm) {
      return res
        .status(404)
        .json({ message: "Form not found", success: false });
    }
    // Update the form with new data, excluding the _id field
    existingForm.set({ ...req.body, _id: existingForm._id });

    // Save the updated form to the database
    await existingForm.save();

    return res.status(200).json({
      message: "Form updated successfully!",
      formId: existingForm._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteForm = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedForm = await formModel.deleteOne({ _id: id });

    if (!deletedForm.deletedCount) {
      // No page found with the provided path
      return res
        .status(404)
        .json({ message: "form not found!", success: false });
    }

    return res.status(200).json({
      message: "form deleted successfully!",
      success: true,
      deletedFormId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.formControllers = { postForm, putForm, deleteForm, getForm };
