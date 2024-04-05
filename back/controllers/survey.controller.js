const { surveyModel } = require("../models/survey.model/survey.model");
const {
  surveyQuestionModel,
} = require("../models/survey.model/surveyQuestion.model");
const {
  surveyResponseModel,
} = require("../models/survey.model/surveyResponse.model");

// .. survey Controllers

const createSurvey = async (req, res) => {
  try {
    const { title } = req.body; // Extract title from request body
    // Check if survey with the same title already exists
    const existingSurvey = await surveyModel.findOne({ title });

    if (existingSurvey) {
      return res
        .status(409)
        .json({ message: "this survey already exists!!", success: false });
    }
    const survey = await surveyModel.create(req.body);
    return res.status(201).json({
      message: "survey added successfully!",
      surveyId: survey._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

const getSurveys = async (req, res) => {
  try {
    const survey = await surveyModel.find();
    return res
      .status(201)
      .json({ message: "all found surveys!", survey, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

const deleteSurvey = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSurvey = await surveyModel.deleteOne({ _id: id });

    if (!deletedSurvey.deletedCount) {
      // No survey found with the provided link
      return res
        .status(404)
        .json({ message: "survey not found!", success: false });
    }

    return res.status(200).json({
      message: "survey deleted successfully!",
      success: true,
      deletedSurveyId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

//questions

const createSurveyQuestion = async (req, res) => {
  try {
    const { title } = req.body; // Extract title from request body
    // Check if surveyQuestion with the same title already exists
    const existingSurveyQuestion = await surveyQuestionModel.findOne({ title });

    if (existingSurveyQuestion) {
      return res.status(409).json({
        message: "this surveyQuestion already exists!!",
        success: false,
      });
    }
    const surveyQuestion = await surveyQuestionModel.create(req.body);
    return res.status(201).json({
      message: "surveyQuestion added successfully!",
      surveyQuestionId: surveyQuestion._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

const deleteSurveyQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSurveyQuestion = await surveyQuestionModel.deleteOne({
      _id: id,
    });

    if (!deletedSurveyQuestion.deletedCount) {
      // No surveyQuestion found with the provided link
      return res
        .status(404)
        .json({ message: "surveyQuestion not found!", success: false });
    }

    return res.status(200).json({
      message: "surveyQuestion deleted successfully!",
      success: true,
      deletedSurveyQuestionId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

const getSurveyQuestions = async (req, res) => {
  try {
    const { id } = req.body;
    const surveyQuestions = await surveyQuestionModel.find({ survey: id });
    return res.status(201).json({
      message: "all found surveyQuestions!",
      surveyQuestions,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

// survey responses

const createSurveyResponse = async (req, res) => {
  const { surveyId, respondentIp, answerData } = req.body;

  try {
    // Check if survey is open (optional)
    // check if respondent has already responded to the survey
    const survey = await surveyModel.findById(surveyId);
    const respondent = await surveyResponseModel.findOne({
      respondentIp,
      survey: surveyId,
    });
    if (survey?.closedAt < Date.now() || respondent) {
      return res
        .status(400)
        .json({ message: "Survey is closed for responses.", success: false });
    }

    const surveyResponse = await surveyResponseModel.create({
      survey: surveyId,
      respondentIp,
      answerData,
    });
    res.status(201).json({
      message: "Survey response submitted",
      responseId: surveyResponse._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
  }
};
const getSurveyResponses = async (req, res) => {
  try {
    const { surveyId } = req.body;
    //get all the responses for the survey i want
    const surveyResponse = await surveyResponseModel.findOne({
      survey: surveyId,
    });
    res.status(200).json({
      message: "these are all responses for the survey you asked ",
      data: surveyResponse,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
  }
};
const getSurveyResponse = async (req, res) => {
  try {
    const id = req.params.id;
    //get all the responses for the survey i want
    const surveyResponse = await surveyResponseModel.findById(id);
    res.status(200).json({
      message: "these is the response for the survey you asked ",
      data: surveyResponse,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
  }
};

module.exports.surveyControllers = {
  createSurvey,
  createSurveyQuestion,
  createSurveyResponse,
  getSurveys,
  getSurveyQuestions,
  getSurveyResponses,
  getSurveyResponse,
  deleteSurvey,
  deleteSurveyQuestion,
};

/*
//survey answers

const createSurveyAnswer = async (req, res) => {
  try {
    const { title } = req.body; // Extract title from request body
    // Check if surveyAnswer with the same title already exists
    const existingSurveyAnswer = await surveyAnswerModel.findOne({ title });

    if (existingSurveyAnswer) {
      return res.status(409).json({
        message: "this surveyAnswer already exists!!",
        success: false,
      });
    }
    const surveyAnswer = await surveyAnswerModel.create(req.body);
    return res.status(201).json({
      message: "surveyAnswer added successfully!",
      surveyAnswerId: surveyAnswer._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};

const deleteSurveyAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSurveyAnswer = await surveyAnswerModel.deleteOne({ _id: id });

    if (!deletedSurveyAnswer.deletedCount) {
      // No surveyAnswer found with the provided link
      return res
        .status(404)
        .json({ message: "surveyAnswer not found!", success: false });
    }

    return res.status(200).json({
      message: "surveyAnswer deleted successfully!",
      success: true,
      deletedSurveyAnswerId: id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `something went wrong!!`, success: false, error });
  }
};

const getSurveyAnswers = async (req, res) => {
  try {
    const { id } = req.body;
    const surveyAnswers = await surveyAnswerModel.find({ survey: id });
    return res.status(201).json({
      message: "all found surveyAnswers!",
      surveyAnswers,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !!", error, success: false });
    console.log(error);
  }
};
*/
