const { newsModel } = require("../models/news.model");
const { userModel } = require("../models/user.model");
const sendMail = require("./mailing.controller");

// Controller to add a new news
const postNews = async (req, res) => {
  try {
    const { title } = req.body; // Extract title from request body

    // Check if news with the same title already exists
    const existingNews = await newsModel.findOne({ title });

    if (existingNews) {
      return res
        .status(409)
        .json({ message: "This news already exists!", success: false });
    }

    // Create a new news
    const news = await newsModel.create(req.body);

    // Get list of users interested in news
    const usersList = await userModel.find({ news: true });

    // Send email notification to users interested in news
    sendMail(usersList.map((user) => user.email));

    return res
      .status(201)
      .json({ message: "News added successfully!", newsId: news._id });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", error, success: false });
  }
};

// Controller to get all news
const getNews = async (req, res) => {
  try {
    const news = await newsModel.find();
    return res
      .status(200)
      .json({ message: "All found news!", news, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", error, success: false });
  }
};

// Controller to update a news by id
const putNews = async (req, res) => {
  try {
    const id = req.params.id;
    const existingNews = await newsModel.findById(id);

    if (!existingNews) {
      return res
        .status(404)
        .json({ message: "News not found", success: false });
    }

    // Update the news with new data
    existingNews.set({ ...req.body, _id: existingNews._id });

    // Save the updated news to the database
    await existingNews.save();

    return res.status(200).json({
      message: "News updated successfully!",
      newsId: existingNews._id,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", error, success: false });
  }
};

// Controller to delete a news by id
const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNews = await newsModel.deleteOne({ _id: id });

    if (!deletedNews.deletedCount) {
      return res
        .status(404)
        .json({ message: "News not found!", success: false });
    }

    return res.status(200).json({
      message: "News deleted successfully!",
      success: true,
      deletedNewsId: id,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", success: false, error });
  }
};

// Controller to get a news by id
const getNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await newsModel.findById(id);

    if (!news) {
      return res
        .status(404)
        .json({ message: "News not found!", success: false });
    }

    return res
      .status(200)
      .json({ message: "News found!", news, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", error, success: false });
  }
};

module.exports.newsControllers = {
  postNews,
  putNews,
  deleteNews,
  getNews,
  getNewsById,
};
