const { missionModel } = require("../models/mission.model");

// Fonction pour obtenir toutes les missions
const getAllMissions = async (req, res) => {
  try {
    const missions = await missionModel.find();
    res.status(200).json(missions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des missions" });
  }
};

// Fonction pour obtenir une mission par ID
const getMissionById = async (req, res) => {
  try {
    const mission = await missionModel.findById(req.params.id);
    if (!mission) {
      return res.status(404).json({ message: "Mission non trouvée" });
    }
    res.status(200).json(mission);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la mission" });
  }
};

// Fonction pour créer une nouvelle mission
const createMission = async (req, res) => {
  const { fr, ar, en } = req.body;
  try {
    const newMission = new missionModel({
      description: { fr, ar, en },
    });
    await newMission.save();
    res.status(201).json(newMission);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de la mission" });
  }
};

// Fonction pour mettre à jour une mission par ID
const updateMission = async (req, res) => {
  try {
    const updatedMission = await missionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMission) {
      return res.status(404).json({ message: "Mission non trouvée" });
    }
    res.status(200).json(updatedMission);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de la mission" });
  }
};

// Fonction pour supprimer une mission par ID
const deleteMission = async (req, res) => {
  try {
    const deletedMission = await missionModel.findByIdAndDelete(req.params.id);
    if (!deletedMission) {
      return res.status(404).json({ message: "Mission non trouvée" });
    }
    res.status(200).json({ message: "Mission supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la mission" });
  }
};

// Exporter les fonctions du contrôleur
module.exports = {
  getAllMissions,
  getMissionById,
  createMission,
  updateMission,
  deleteMission,
};
