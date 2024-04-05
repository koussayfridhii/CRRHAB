const { searchStructureModel } = require("../models/searchStructure.model");
const getSearchStructures = async (req, res) => {
  const searchStructures = await searchStructureModel.find(); // Find all documents in the 'SearchStructure' collection
  await res.status(200).json(searchStructures);
};
const addSearchStructure = async (req, res) => {
  try {
    const { address } = req.body; // Extract address from request body

    // Check if searchStructure with the same address already exists
    const existingSearchStructure = await searchStructureModel.findOne({
      address,
    });

    if (existingSearchStructure) {
      return res
        .status(409)
        .json({ message: "SearchStructure with this address already exists!" });
    }

    // Address doesn't exist, proceed with creating the searchStructure
    const searchStructure = await searchStructureModel.create(req.body);
    return res.status(201).json({
      message: "SearchStructure created successfully!",
      searchStructureId: searchStructure._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteSearchStructure = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSearchStructure = await searchStructureModel.deleteOne({
      _id: id,
    });

    if (!deletedSearchStructure.deletedCount) {
      // No searchStructure found with the provided address
      return res.status().json({ message: "SearchStructure not found!" });
    }

    return res
      .status(200)
      .json({ message: "SearchStructure deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: `an error occurred ${error}` });
  }
};
const updateSearchStructure = async (req, res) => {
  try {
    const id = req.params.id;
    const existingSearchStructure = await searchStructureModel.findById(id);

    if (!existingSearchStructure) {
      return res
        .status(404)
        .json({ message: "searchStructure not found", success: false });
    }
    // Update the searchStructure with new data, excluding the _id field
    existingSearchStructure.set({
      ...req.body,
      _id: existingSearchStructure._id,
    });

    // Save the updated searchStructure to the database
    await existingSearchStructure.save();

    return res.status(200).json({
      message: "searchStructure updated successfully!",
      searchStructureId: existingSearchStructure._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

module.exports.searchStructuresController = {
  getSearchStructures,
  addSearchStructure,
  deleteSearchStructure,
  updateSearchStructure,
};
