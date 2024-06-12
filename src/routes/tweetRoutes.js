const express = require('express');
const tweetController = require('../controllers/tweetController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/tweets', auth, tweetController.createTweet);
router.get('/users/:userId/timeline', auth, tweetController.getUserTimeline);

module.exports = router;
