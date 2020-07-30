const { error } = require("jquery");
const {google} = require('googleapis');

module.exports = {
    GCInfo: class {
        constructor() {
            this.classroom = google.classroom({version: 'v1'});
        }

        /**
         * Lists the course that the user has access to.
         */
        async getCourse() {
            var resp = await this.classroom.courses.list({pageSize: 1, courseStates: 'ACTIVE'});
            if (resp.data != undefined && resp.data.courses != undefined) {
                return {
                    name: resp.data.courses[0].name,
                    id: resp.data.courses[0].id
                };
            }
            else {
                console.log("Error calling coursework API");
            }
        }

        /*
        * Input: Course ID
        * Output: List of students in the course (student objects).
        */
        getStudentsInCourse(courseId) {
            this.classroom.courses.students.list(courseId).then((studentList) => {
                if (studentList.nextPageToken !== "") {
                    console.log("student list page size should be bigger.");
                }
                return studentList.students;
            });
        }

        /*
        * Input: Student object
        * Output: List of guardians for this student.
        */
        getGuardianInfo(studentId) {
            this.classroom.userProfiles.guardians.list(studentId).then((guardians) => {
                if (guardians.nextPageToken !== "") {
                    console.log("guardians list page size should be bigger.");
                }
                return guardians.guardians;
            });
        }

        /*
        * Input: course ID
        * Output: list of studentSubmissions for the entire course.
        */
        getCourseWork(courseId) {
            this.classroom.courses.courseWork.studentSubmissions.list(
                {courseId: courseId, 
                courseWorkId: "-",
                pageSize: 1000000
                }
            ).then((studentSubmisions) => {
                return studentSubmisions;
            });
        }

        /*
        * Input: Course ID and assignment ID
        * Output: due date and name of the assignment
        */
        getAssignmentInfo(courseId, courseWorkId) {
            this.classroom.courses.courseWork.get({courseId: courseId, id: courseWorkId}).then((courseWork) => {
                return {
                    dueDate: courseWork.dueDate,
                    name: courseWork.name
                };
            });
        }
    }
}