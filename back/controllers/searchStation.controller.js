const { searchStationModel } = require("../models/searchStation.model");
const getSearchStations = async (req, res) => {
  const searchStations = await searchStationModel.find(); // Find all documents in the 'SearchStation' collection
  await res.status(200).json(searchStations);
};
const addSearchStation = async (req, res) => {
  try {
    const { address } = req.body; // Extract address from request body

    // Check if searchStation with the same address already exists
    const existingSearchStation = await searchStationModel.findOne({ address });

    if (existingSearchStation) {
      return res
        .status(409)
        .json({ message: "SearchStation with this address already exists!" });
    }

    // Address doesn't exist, proceed with creating the searchStation
    const searchStation = await searchStationModel.create(req.body);
    return res
      .status(201)
      .json({
        message: "SearchStation created successfully!",
        searchStationId: searchStation._id,
      });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteSearchStation = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSearchStation = await searchStationModel.deleteOne({
      _id: id,
    });

    if (!deletedSearchStation.deletedCount) {
      // No searchStation found with the provided address
      return res.status().json({ message: "SearchStation not found!" });
    }

    return res
      .status(200)
      .json({ message: "SearchStation deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: `an error occurred ${error}` });
  }
};
const updateSearchStation = async (req, res) => {
  try {
    const id = req.params.id;
    const existingSearchStation = await searchStationModel.findById(id);

    if (!existingSearchStation) {
      return res
        .status(404)
        .json({ message: "searchStation not found", success: false });
    }
    // Update the searchStation with new data, excluding the _id field
    existingSearchStation.set({ ...req.body, _id: existingSearchStation._id });

    // Save the updated searchStation to the database
    await existingSearchStation.save();

    return res.status(200).json({
      message: "searchStation updated successfully!",
      searchStationId: existingSearchStation._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

module.exports.searchStationsController = {
  getSearchStations,
  addSearchStation,
  deleteSearchStation,
  updateSearchStation,
};
