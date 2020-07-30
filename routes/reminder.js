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
    twilio.sendMessage("Check your student's assignments on Google Classroom", pn);
  });
  console.log(guardianPhoneNumbers);

  var assignment1 = {
    name: "Assignment1",
    status: "0",
    dueDate: "1.21.2020"
  };
  var student1 = {
    name: "Jenna",
    assignments: [assignment1],
    guardian: "Jenna's Mom"
  };
  var studentsAndAssignmentsObj = [student1];
  var client = database.getDatabaseClient();
  var guardian = await database.getGuardian(client, "1");

  res.render('students', { title: "View Students & Assignments", students: studentsAndAssignmentsObj, guardians: guardian });
});

module.exports = router;
