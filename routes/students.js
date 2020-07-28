var express = require('express');
var router = express.Router();var express = require('express');

router.get('/', function(req, res, next) {
  var assignment1 = {
    AssignmentName: "assignment1",
    CompletionStatus: "0"
  };
  var student1 = {
    studentName: "jenna",
    assignments: [assignment1]
  };
  var studentsAndAssignmentsObj = [student1];
  res.render('students', {title: "Students and Assignments Page", students: studentsAndAssignmentsObj});
});

module.exports = router;
