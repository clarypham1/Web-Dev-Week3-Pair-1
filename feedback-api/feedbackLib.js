let feedbackList = [];
let nextId = 1;

function getAll() {
    return feedbackList;
}

function addOne(sender, message, rating, platform) {
    if (!sender || !message || !rating || !platform) {
        return false;
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating,
        platform,
    };

    feedbackList.push(newFeedback);
    return newFeedback;
}

function findById(id) {
    const feedback = feedbackList.find((item) => item.id == id);

    if (feedback) {
        return feedback;
    }

    return false;
}

function update(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedback.rating = updatedData.rating;
        }
        if (updatedData.platform) {
            feedback.platform = updatedData.platform;
        }
        return feedback;
    } else {
        return false;
    }
}

if (require.main === module) {
    const result = addOne(
        "John Smith",
        "Great session on React components!",
        5,
        "mobile"
    );

    console.log(result);
}

addOne("John Smith", "Great session!", 5, "mobile");
addOne("Anna Brown", "Very useful examples.", 4, "desktop");
console.log("getAll called:", getAll());

module.exports = {
    addOne,
    getAll,
    findById,
    update
};