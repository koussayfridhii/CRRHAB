const {
  ScientificCouncilMembersModel,
} = require("../models/scientificCouncilMembers.model");

// Create a new member
exports.createMember = async (req, res) => {
  try {
    const newMember = new ScientificCouncilMembersModel(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await ScientificCouncilMembersModel.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single member by ID
exports.getMemberById = async (req, res) => {
  try {
    const member = await ScientificCouncilMembersModel.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a member by ID
exports.updateMemberById = async (req, res) => {
  try {
    const updatedMember = await ScientificCouncilMembersModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a member by ID
exports.deleteMemberById = async (req, res) => {
  try {
    const deletedMember = await ScientificCouncilMembersModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
