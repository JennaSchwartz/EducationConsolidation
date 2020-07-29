var express = require('express');
var router = express.Router();var express = require('express');
var database = require('../public/messaging/database');

router.get('/', function(req, res, next) {
  var assignment1 = {
    AssignmentName: "Assignment1",
    CompletionStatus: "0"
  };
  var student1 = {
    studentName: "Jenna",
    assignments: [assignment1],
    guardian: "Jenna's Mom"
  };
  var studentsAndAssignmentsObj = [student1];
  res.render('students', {title: "Students and Assignments Page", students: studentsAndAssignmentsObj});
});

/* Edit student's guardian info. */
router.get('/edit', async function(req, res, next) {
  var client = database.getDatabaseClient();
  var guardian = await database.getGuardian(client, "1");

  res.render('student-edit', { title: 'Edit  info', json: guardian }) 

});

/* Save student's guardian info. */
router.get('/save', async function (req, res, next) {
  var guardianInfo = 
  {
    Name: req.query.Name,
    Email: req.query.Email,
    PhoneNumber: req.query.PhoneNumber,
    PreferredLanguage: req.query.PreferredLanguage,
    PreferredContactMethod: req.query.PreferredContactMethod
  }
  var client = database.getDatabaseClient();
  await database.updateGuardian(client, "1", guardianInfo);
});

module.exports = router;
