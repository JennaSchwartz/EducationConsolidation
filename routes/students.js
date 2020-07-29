var express = require('express');
var router = express.Router();var express = require('express');
var database = require('../public/messaging/database');

router.get('/', async function(req, res, next) {
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

  res.render('students', { title: "Students and Assignments Page", students: studentsAndAssignmentsObj, guardians: guardian });
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
