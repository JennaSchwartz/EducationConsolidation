var express = require('express');
var router = express.Router();var express = require('express');
var database = require('../public/messaging/database');
var GCInfo = require('../public/GoogleClassroomAPI/getStudentInfo');

router.get('/', async function(req, res, next) {
  var gcInfo = new GCInfo.GCInfo();
  var course = await gcInfo.getCourse();
  var gcStudents = await gcInfo.getStudentsInCourse(course.id);


  var students = new Map();
  gcStudents.forEach((student) => {
    students[student.id] =  {
      name: student.profile.name,
      id: student.id,
      assignments: []
    }
  });

  // Get assignment info
  var studentSubmissions = await gcInfo.getCourseWork(course.id);
  studentSubmissions.forEach(async function(studentSubmission) {
    var assignmentInfo = await gcInfo.getAssignmentInfo(course.id, studentSubmission.courseWorkId);
    if (isLateAssignment(assignmentInfo.dueDate, studentSubmission) || !pastDue(assignmentInfo.dueDate)) {
      students[studentSubmission.userId].assignments.push({
        name: assignmentInfo.name,
        status: studentSubmission.late ? "Late" : studentSubmission.state,
        dueDate: assignmentInfo.dueDate
      })
    }
  });

  res.render('students', {title: "Students and Assignments Page", students: studentsAndAssignmentsObj});
});

/* Edit student's guardian info. */
router.get('/edit', async function(req, res, next) {
  var client = database.getDatabaseClient();
  await database.syncGuardianInfoWithGoogleClassroom(client, getCGGuardianInfo(req.student));
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
  
  res.render('student-edit', { title: 'Edit  info', json: guardianInfo })
});

module.exports = router;

// Helper functions
async function getGCGuardianInfo(studentId) {
      var gcGuardianInfo = await gcInfo.getGuardianInfo(studentId);
      return gcGuardianInfo.forEach((guardianInfoObj) => {
        return {
          studentId: studentId,
          id: guardianInfoObj.guardianId,
          name: guardianInfoObj.guardianProfile.name.fullName,
          email: guardianInfoObj.guardianProfile.emailAddress
        };
      });
}

function isLateAssignment(dueDate, studentSubmission) {
  return pastDue(dueDate) && studentSubmission.late && studentSubmission.state !== "TURNED_IN" && studentSubmission.state !== "RETURNED";
}

function pastDue(dueDate) {
  let today = new Date();
  let dueDate = new Date(dueDate.year, dueDate.month, dueDate.day);
  return today > dueDate;
}
