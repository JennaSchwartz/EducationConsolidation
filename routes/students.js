var express = require('express');
var router = express.Router();var express = require('express');

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
router.get('/edit', function(req, res, next) {
  var student1 = {
    studentName: "Sana",
    guardian1Name: "Sana's mom",
    guardian1Email: "sanasmom@msn.com",
    guardian1Number: "123-456-7890",
    guardian1Language: ["English"],
    guardian2Name: "Sana's dad",
    guardian2Email: "Sanasdad@gmail.com",
    guardian2Number: "098-765-4321",
    guardian2Language: ["Hindi ", "English"]
  };
  res.render('student-edit', { title: 'Edit student info', json: student1 }) 

});
module.exports = router;
