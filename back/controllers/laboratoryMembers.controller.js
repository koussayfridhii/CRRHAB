const { researcherModel } = require("../models/laboratoryMembers.model");

// Create a new laboratory member
const createMember = async (req, res) => {
  try {
    const newMember = new researcherModel(req.body);
    console.log(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all laboratory members
const getAllMembers = async (req, res) => {
  try {
    const members = await researcherModel.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a laboratory member by ID
const getMemberById = async (req, res) => {
  try {
    const member = await researcherModel.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a laboratory member by ID
const updateMemberById = async (req, res) => {
  try {
    const updatedMember = await researcherModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a laboratory member by ID
const deleteMemberById = async (req, res) => {
  try {
    const deletedMember = await researcherModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
