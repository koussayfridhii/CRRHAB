const { documentModel } = require("../models/document.model");

const postDocument = async (req, res) => {
  try {
    const { link } = req.body; // Extraire le lien du corps de la requête
    // Vérifier si un document avec le même lien existe déjà
    const existingDocument = await documentModel.findOne({ link });

    if (existingDocument) {
      return res
        .status(409)
        .json({ message: "Ce document existe déjà !!", success: false });
    }
    const document = await documentModel.create(req.body);
    return res.status(201).json({
      message: "Document ajouté avec succès !",
      documentId: document._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Quelque chose a mal tourné !!",
        error,
        success: false,
      });
    console.log(error);
  }
};

const getDocument = async (req, res) => {
  try {
    const document = await documentModel.find();
    return res
      .status(201)
      .json({
        message: "Tous les documents trouvés !",
        document,
        success: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Quelque chose a mal tourné !!",
        error,
        success: false,
      });
    console.log(error);
  }
};

const getDocumentById = async (req, res) => {
  try {
    const id = req.params.id;
    const document = await documentModel.findById(id);

    if (!document) {
      return res
        .status(404)
        .json({ message: "Document non trouvé", success: false });
    }

    return res
      .status(200)
      .json({
        message: "Document trouvé avec succès !",
        document,
        success: true,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Quelque chose a mal tourné !!",
        error,
        success: false,
      });
    console.log(error);
  }
};

const putDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const existingDocument = await documentModel.findById(id);

    if (!existingDocument) {
      return res
        .status(404)
        .json({ message: "Document non trouvé", success: false });
    }
    // Mettre à jour le document avec les nouvelles données, à l'exclusion du champ _id
    existingDocument.set({ ...req.body, _id: existingDocument._id });

    // Enregistrer le document mis à jour dans la base de données
    await existingDocument.save();

    return res.status(200).json({
      message: "Document mis à jour avec succès !",
      documentId: existingDocument._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Quelque chose a mal tourné !!",
        error,
        success: false,
      });
    console.log(error);
  }
};

const deleteDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedDocument = await documentModel.deleteOne({ _id: id });

    if (!deletedDocument.deletedCount) {
      // Aucun document trouvé avec le lien fourni
      return res
        .status(404)
        .json({ message: "Document non trouvé !", success: false });
    }

    return res.status(200).json({
      message: "Document supprimé avec succès !",
      success: true,
      deletedDocumentId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Quelque chose a mal tourné !!",
        success: false,
        error,
      });
  }
};

module.exports.documentControllers = {
  postDocument,
  putDocument,
  deleteDocument,
  getDocument,
  getDocumentById,
};
