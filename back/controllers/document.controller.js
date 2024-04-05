const { documentModel } = require("../models/document.model");
const postDocument = async (req, res) => {
  try {
    const { link } = req.body; // Extract link from request body
    // Check if document with the same link already exists
    const existingDocument = await documentModel.findOne({ link });

    if (existingDocument) {
      return res
        .status(409)
        .json({ message: "this document already exists!!", success: false });
    }
    const document = await documentModel.create(req.body);
    return res
      .status(201)
      .json({
        message: "document added successfully!",
        documentId: document._id,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getDocument = async (req, res) => {
  try {
    const document = await documentModel.find();
    return res
      .status(201)
      .json({ message: "all found document!", document, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const existingDocument = await documentModel.findById(id);

    if (!existingDocument) {
      return res
        .status(404)
        .json({ message: "document not found", success: false });
    }
    // Update the document with new data, excluding the _id field
    existingDocument.set({ ...req.body, _id: existingDocument._id });

    // Save the updated document to the database
    await existingDocument.save();

    return res.status(200).json({
      message: "document updated successfully!",
      documentId: existingDocument._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedDocument = await documentModel.deleteOne({ _id: id });

    if (!deletedDocument.deletedCount) {
      // No document found with the provided link
      return res
        .status(404)
        .json({ message: "document not found!", success: false });
    }

    return res.status(200).json({
      message: "document deleted successfully!",
      success: true,
      deletedDocumentId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.documentControllers = {
  postDocument,
  putDocument,
  deleteDocument,
  getDocument,
};
