var express = require('express');
var router = express.Router();
var twilio = require('../public/messaging/twilio');
var database = require('../public/messaging/database');

/* POST send reminder. */
router.post('/', async function(req, res) {
  studentName = req.body.sendReminderButton;
  studentId = "1"; //Testing
  var client = database.getDatabaseClient();
  var guardianPhoneNumbers = await database.getGuardianPhoneNumbers(client, studentId);
  guardianPhoneNumbers.forEach(pn => {
    twilio.sendMessage("Your student is failing the class!", pn);
  });
  console.log(guardianPhoneNumbers);

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

module.exports = router;
