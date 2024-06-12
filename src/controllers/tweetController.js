const Tweet = require('../models/tweet');

exports.createTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user.userId, text });
    await tweet.save();
    res.status(201).send({ message: 'Tweet posted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const { userId } = req.params;
    const { cursor } = req.query;
    const limit = 10;

    const query = { userId };
    if (cursor) {
      query._id = { $lt: cursor };
    }

    const tweets = await Tweet.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();

    const nextCursor = tweets.length > 0 ? tweets[tweets.length - 1]._id : null;

    res.send({ tweets, nextCursor });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
