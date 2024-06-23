// Importer le modèle history
const { historyModel } = require("../models/history.model");

// Fonction pour obtenir toutes les entrées d'historique
const getAllHistories = async (req, res) => {
  try {
    const histories = await historyModel.find();
    res.status(200).json(histories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des historiques" });
  }
};

// Fonction pour obtenir une entrée d'historique par ID
const getHistoryById = async (req, res) => {
  try {
    const history = await historyModel.findById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: "Historique non trouvé" });
    }
    res.status(200).json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'historique" });
  }
};

// Fonction pour créer une nouvelle entrée d'historique
const createHistory = async (req, res) => {
  const { fr, ar, en } = req.body;
  try {
    const newHistory = new historyModel({
      description: { fr, ar, en },
    });
    await newHistory.save();
    res.status(201).json(newHistory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'historique" });
  }
};

// Fonction pour mettre à jour une entrée d'historique par ID
const updateHistory = async (req, res) => {
  try {
    const updatedHistory = await historyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHistory) {
      return res.status(404).json({ message: "Historique non trouvé" });
    }
    res.status(200).json(updatedHistory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'historique" });
  }
};

// Fonction pour supprimer une entrée d'historique par ID
const deleteHistory = async (req, res) => {
  try {
    const deletedHistory = await historyModel.findByIdAndDelete(req.params.id);
    if (!deletedHistory) {
      return res.status(404).json({ message: "Historique non trouvé" });
    }
    res.status(200).json({ message: "Historique supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'historique" });
  }
};

// Exporter les fonctions du contrôleur
module.exports = {
  getAllHistories,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
};
