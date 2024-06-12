const { eventModel } = require("../models/event.model");
const { userModel } = require("../models/user.model");
const sendMail = require("./mailing.controller");

const postEvent = async (req, res) => {
  try {
    const { title } = req.body; // Extraire le titre du corps de la requête
    // Vérifier si un événement avec le même titre existe déjà
    const existingEvent = await eventModel.findOne({ title });

    if (existingEvent) {
      return res
        .status(409)
        .json({ message: "Cet événement existe déjà !!", success: false });
    }
    const event = await eventModel.create(req.body);
    const usersList = await userModel.find({ news: true });
    sendMail(
      usersList.map((user) => user.email),

      event.title?.en,
      event.description?.en,
      event.link,
      event.media
    );
    return res
      .status(201)
      .json({ message: "Événement ajouté avec succès !", eventId: event._id });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const getEvent = async (req, res) => {
  try {
    const events = await eventModel.find();
    return res.status(200).json({
      message: "Tous les événements trouvés !",
      events,
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

const getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await eventModel.findById(id);

    if (!event) {
      return res
        .status(404)
        .json({ message: "Événement non trouvé", success: false });
    }

    return res
      .status(200)
      .json({ message: "Événement trouvé !", event, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Quelque chose s'est mal passé !!",
      error,
      success: false,
    });
    console.log(error);
  }
};

const putEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const existingEvent = await eventModel.findById(id);

    if (!existingEvent) {
      return res
        .status(404)
        .json({ message: "Événement non trouvé", success: false });
    }
    // Mettre à jour l'événement avec les nouvelles données, en excluant le champ _id
    existingEvent.set({ ...req.body, _id: existingEvent._id });

    // Enregistrer l'événement mis à jour dans la base de données
    await existingEvent.save();

    return res.status(200).json({
      message: "Événement mis à jour avec succès !",
      eventId: existingEvent._id,
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

const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedevent = await eventModel.deleteOne({ _id: id });

    if (!deletedevent.deletedCount) {
      // Aucun événement trouvé avec l'ID fourni
      return res
        .status(404)
        .json({ message: "Événement non trouvé !", success: false });
    }

    return res.status(200).json({
      message: "Événement supprimé avec succès !",
      success: true,
      deletedEventId: id,
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

module.exports.eventControllers = {
  postEvent,
  getEvent,
  getEventById,
  putEvent,
  deleteEvent,
};
