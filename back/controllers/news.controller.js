const { newsModel } = require("../models/news.model");
const { userModel } = require("../models/user.model");
const sendMail = require("./mailing.controller");
const postNews = async (req, res) => {
  try {
    const { title } = req.body; // Extract path from request body
    // Check if news with the same path already exists
    const existingNews = await newsModel.findOne({ title });

    if (existingNews) {
      return res
        .status(409)
        .json({ message: "this news already exists!!", success: false });
    }
    const news = newsModel.create(req.body);
    const usersList = await userModel.find({ news: true });
    sendMail(
      usersList.map((user) => {
        return user.email;
      })
    );
    return res
      .status(201)
      .json({ message: "news added successfully!", newsId: news._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const getNews = async (req, res) => {
  try {
    const news = await newsModel.find();
    return res
      .status(201)
      .json({ message: "all found news!", news, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const putNews = async (req, res) => {
  try {
    const id = req.params.id;
    const existingNews = await newsModel.findById(id);

    if (!existingNews) {
      return res
        .status(404)
        .json({ message: "news not found", success: false });
    }
    // Update the news with new data, excluding the _id field
    existingNews.set({ ...req.body, _id: existingNews._id });

    // Save the updated news to the database
    await existingNews.save();

    return res.status(200).json({
      message: "news updated successfully!",
      newsId: existingNews._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    const deletednews = await newsModel.deleteOne({ _id: id });

    if (!deletednews.deletedCount) {
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

module.exports.newsControllers = {
  postNews,
  putNews,
  deleteNews,
  getNews,
};
