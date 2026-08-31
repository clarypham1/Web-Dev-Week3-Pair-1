const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    res.json({message: "Hello from get all feedbacks"});
};

const createFeedback = (req, res) => {
    res.json({message: "Hello from create feedbacks"});
};

const getFeedbackById = (req, res) => {
    res.json({message: "Hello from get feedbacks by Id"});
};
const updateFeedback = (req, res) => {
    res.json({message: "Hello from update feedbacks"});
};
const deleteFeedback = (req, res) => {
    res.json({message: "Hello from delete feedbacks"});
};

module.exports = {
    getAllFeedbacks,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
    createFeedback,
};