const { eventModel } = require("../models/event.model");
const { userModel } = require("../models/user.model");
const sendMail = require("./mailing.controller");
const postEvent = async (req, res) => {
  try {
    const { title } = req.body; // Extract path from request body
    // Check if event with the same path already exists
    const existingEvent = await eventModel.findOne({ title });

    if (existingEvent) {
      return res
        .status(409)
        .json({ message: "this event already exists!!", success: false });
    }
    const event = await eventModel.create(req.body);
    const usersList = await userModel.find({ news: true });
    sendMail(
      usersList.map((user) => {
        return user.email;
      })
    );
    return res
      .status(201)
      .json({ message: "event added successfully!", eventId: event._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getEvent = async (req, res) => {
  try {
    const event = await eventModel.find();
    return res
      .status(201)
      .json({ message: "all found event!", event, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
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
        .json({ message: "event not found", success: false });
    }
    // Update the event with new data, excluding the _id field
    existingEvent.set({ ...req.body, _id: existingEvent._id });

    // Save the updated event to the database
    await existingEvent.save();

    return res.status(200).json({
      message: "event updated successfully!",
      eventId: existingEvent._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedevent = await eventModel.deleteOne({ _id: id });

    if (!deletedevent.deletedCount) {
      // No media found with the provided path
      return res
        .status(404)
        .json({ message: "media not found!", success: false });
    }

    return res.status(200).json({
      message: "media deleted successfully!",
      success: true,
      deletedMediaId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

module.exports.eventControllers = {
  postEvent,
  putEvent,
  deleteEvent,
  getEvent,
};
