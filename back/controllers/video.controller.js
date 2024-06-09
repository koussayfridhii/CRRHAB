const { videoModel } = require("../models/video.model");

const postVideo = async (req, res) => {
  try {
    const { media } = req.body;

    // Vérifier si une vidéo avec le même titre existe déjà
    const existingVideo = await videoModel.findOne({ media });

    if (existingVideo) {
      return res
        .status(409)
        .json({ message: "Cette vidéo existe déjà !", success: false });
    }

    const video = await videoModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Vidéo ajoutée avec succès !", videoId: video._id });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const getVideos = async (req, res) => {
  console.log(req.body);
  try {
    const videos = await videoModel.find();
    return res
      .status(200)
      .json({ message: "Toutes les vidéos trouvées !", videos, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const getVideoById = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await videoModel.findById(id);

    if (!video) {
      return res
        .status(404)
        .json({ message: "Vidéo non trouvée", success: false });
    }

    return res
      .status(200)
      .json({ message: "Vidéo trouvée avec succès !", video, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const putVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const existingVideo = await videoModel.findById(id);

    if (!existingVideo) {
      return res
        .status(404)
        .json({ message: "Vidéo non trouvée", success: false });
    }

    // Mettre à jour la vidéo avec les nouvelles données, sans modifier le champ _id
    existingVideo.set({ ...req.body, _id: existingVideo._id });

    // Sauvegarder la vidéo mise à jour dans la base de données
    await existingVideo.save();

    return res.status(200).json({
      message: "Vidéo mise à jour avec succès !",
      videoId: existingVideo._id,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedVideo = await videoModel.deleteOne({ _id: id });

    if (!deletedVideo.deletedCount) {
      return res
        .status(404)
        .json({ message: "Vidéo non trouvée !", success: false });
    }

    return res.status(200).json({
      message: "Vidéo supprimée avec succès !",
      success: true,
      deletedVideoId: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      success: false,
      error,
    });
  }
};

module.exports.videoControllers = {
  postVideo,
  getVideos,
  getVideoById,
  putVideo,
  deleteVideo,
};
