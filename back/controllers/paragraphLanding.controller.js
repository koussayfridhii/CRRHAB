// Importer le modèle paragraphLanding
const { paragraphLandingModel } = require("../models/paragraphLanding.model");

// Fonction pour obtenir tous les paragraphes
const getAllParagraphs = async (req, res) => {
  try {
    const paragraphs = await paragraphLandingModel.find();
    res.status(200).json(paragraphs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des paragraphes" });
  }
};

// Fonction pour obtenir un paragraphe par ID
const getParagraphById = async (req, res) => {
  try {
    const paragraph = await paragraphLandingModel.findById(req.params.id);
    if (!paragraph) {
      return res.status(404).json({ message: "Paragraphe non trouvé" });
    }
    res.status(200).json(paragraph);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du paragraphe" });
  }
};

// Fonction pour créer un nouveau paragraphe
const createParagraph = async (req, res) => {
  const { fr, ar, en, directeur } = req.body;
  try {
    const newParagraph = new paragraphLandingModel({ fr, ar, en, directeur });
    await newParagraph.save();
    res.status(201).json(newParagraph);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du paragraphe" });
  }
};

// Fonction pour mettre à jour un paragraphe par ID
const updateParagraph = async (req, res) => {
  try {
    const updatedParagraph = await paragraphLandingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedParagraph) {
      return res.status(404).json({ message: "Paragraphe non trouvé" });
    }
    res.status(200).json(updatedParagraph);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du paragraphe" });
  }
};

// Fonction pour supprimer un paragraphe par ID
const deleteParagraph = async (req, res) => {
  try {
    const deletedParagraph = await paragraphLandingModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedParagraph) {
      return res.status(404).json({ message: "Paragraphe non trouvé" });
    }
    res.status(200).json({ message: "Paragraphe supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du paragraphe" });
  }
};

// Exporter les fonctions du contrôleur
module.exports = {
  getAllParagraphs,
  getParagraphById,
  createParagraph,
  updateParagraph,
  deleteParagraph,
};
