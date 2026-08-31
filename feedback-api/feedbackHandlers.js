const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating, platform } = req.body;
    const newFeedback = Feedback.addOne(
        sender,
        message,
        rating,
        platform
    );
    
    if (newFeedback) {
        res.status(201).json(newFeedback);
    } else {
        res.status(500).json({ message: "Failed to create feedback" });
    }
};

const getFeedbackById = (req, res) => {
    res.json({ message: "Hello from get feedbacks by Id" });
};
const updateFeedback = (req, res) => {
    res.json({ message: "Hello from update feedbacks" });
};
const deleteFeedback = (req, res) => {
    res.json({ message: "Hello from delete feedbacks" });
};

module.exports = {
    getAllFeedbacks,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
    createFeedback,
};