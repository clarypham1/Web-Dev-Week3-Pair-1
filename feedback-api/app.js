const express = require("express");
const app = express();

const {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("./feedbackHandlers"); 

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /feedback
app.get("/feedback", getAllFeedbacks);

// POST /feedback
app.post("/feedback", createFeedback);

// GET /feedback/:feedbackId
app.get("/feedback/:feedbackId", getFeedbackById);

// PATCH /feedback/:feedbackId
app.patch("/feedback/:feedbackId", updateFeedback);

// DELETE /feedback/:feedbackId
app.delete("/feedback/:feedbackId", deleteFeedback);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});