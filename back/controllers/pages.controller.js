const { pageModel } = require("../models/pages.model");
const getPages = async (req, res) => {
  const pages = await pageModel.find(); // Find all documents in the 'Page' collection
  await res.status(200).json({ pages: pages, message: "success" });
};
const addPage = async (req, res) => {
  try {
    const { path } = req.body; // Extract path from request body
    // Check if page with the same path already exists
    // console.log(req.user);
    const existingPage = await pageModel.findOne({ path });

    if (existingPage) {
      return res
        .status(409)
        .json({ message: "Page with this path already exists!" });
    }

    // Path doesn't exist, proceed with creating the page
    const page = await pageModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Page created successfully!", pageId: page._id });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deletePage = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPage = await pageModel.deleteOne({ _id: id });

    if (!deletedPage.deletedCount) {
      // No page found with the provided path
      return res.status().json({ message: "Page not found!" });
    }

    return res.status(200).json({ message: "Page deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: `an error occured ${error}` });
  }
};
const updatePage = async (req, res) => {
  try {
    const id = req.params.id;
    const existingPage = await pageModel.findById(id);

    if (!existingPage) {
      return res
        .status(404)
        .json({ message: "page not found", success: false });
    }
    // Update the page with new data, excluding the _id field
    existingPage.set({ ...req.body, _id: existingPage._id });

    // Save the updated page to the database
    await existingPage.save();

    return res.status(200).json({
      message: "page updated successfully!",
      pageId: existingPage._id,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

module.exports.pagesController = { getPages, addPage, deletePage, updatePage };
