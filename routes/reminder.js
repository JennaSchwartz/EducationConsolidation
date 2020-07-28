var express = require('express');
var router = express.Router();
var twilio = require('../public/messaging/twilio');

/* GET users listing. */
router.post('/:studentId', function(req, res) {
  console.log('StudentId: ' + req.params.studentId);
  twilio.sendMessage("Testing", process.env.twilioToPhoneNumber);
  res.render('index', { title: 'Education Consolidation' });
});

module.exports = router;
