const { DiplomaCourse } = require("../models/diplomaCourse.model");

// Controller to create a new diploma course
exports.createDiplomaCourse = async (req, res) => {
  try {
    const newDiplomaCourse = await DiplomaCourse.create(req.body);
    res.status(201).json(newDiplomaCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all diploma courses
exports.getAllDiplomaCourses = async (req, res) => {
  try {
    const diplomaCourses = await DiplomaCourse.find();
    console.log(diplomaCourses);
    res.status(200).json(diplomaCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a specific diploma course by ID
exports.getDiplomaCourseById = async (req, res) => {
  try {
    const diplomaCourse = await DiplomaCourse.findById(req.params.id);
    if (!diplomaCourse) {
      return res.status(404).json({ message: "Diploma course not found" });
    }
    res.status(200).json(diplomaCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a specific diploma course by ID
exports.updateDiplomaCourseById = async (req, res) => {
  try {
    const updatedDiplomaCourse = await DiplomaCourse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDiplomaCourse) {
      return res.status(404).json({ message: "Diploma course not found" });
    }
    res.status(200).json(updatedDiplomaCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a specific diploma course by ID
exports.deleteDiplomaCourseById = async (req, res) => {
  try {
    const deletedDiplomaCourse = await DiplomaCourse.findByIdAndDelete(
      req.params.id
    );
    if (!deletedDiplomaCourse) {
      return res.status(404).json({ message: "Diploma course not found" });
    }
    res.status(200).json({ message: "Diploma course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
