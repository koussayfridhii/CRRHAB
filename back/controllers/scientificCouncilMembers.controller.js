const {
  ScientificCouncilModel,
} = require("../models/scientificCouncilMembers.model");
const addMember = async (req, res) => {
  try {
    const newMember = new ScientificCouncilModel(req.body);
    await newMember.save();
    res.status(201).send(newMember);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteMember = async (req, res) => {
  try {
    const deletedMember = await ScientificCouncilModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMember) return res.status(404).send("Member not found.");
    res.send(deletedMember);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAll = async (req, res) => {
  try {
    const members = await ScientificCouncilModel.find({}).populate({
      path: "userId",
      select: "-password",
    });
    res.send(members);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
};

module.exports.ScientificCouncilMembersController = {
  addMember,
  deleteMember,
  getAll,
};
