const { statsModel } = require("../models/stats.model");

const getAllStats = async (req, res) => {
  try {
    const stats = await statsModel.find({});
    res.send(stats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createStats = async (req, res) => {
  try {
    const { title, value } = req.body;
    const newStats = new statsModel({ title, value });
    await newStats.save();
    res.status(201).send(newStats);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateStats = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, value } = req.body;
    const updatedStats = await statsModel.findByIdAndUpdate(
      id,
      { title, value },
      { new: true }
    );
    res.send(updatedStats);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteStats = async (req, res) => {
  try {
    const { id } = req.params;
    await statsModel.findByIdAndDelete(id);
    res.status(204).send({
      message: "deleted Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.statsControllers = {
  getAllStats,
  createStats,
  updateStats,
  deleteStats,
};
