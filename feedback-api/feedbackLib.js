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

if (require.main === module) {
    const result = addOne(
        "John Smith",
        "Great session on React components!",
        5,
        "mobile"
    );

    console.log(result);
}

module.exports = {
    addOne,
};