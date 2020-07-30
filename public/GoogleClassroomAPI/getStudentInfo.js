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
                console.log("Error in getCourse()");
            }
        }

        /*
        * Input: Course ID
        * Output: List of students in the course (student objects).
        */
        async getStudentsInCourse(courseId) {
            var res = await this.classroom.courses.students.list({courseId: courseId});
            return res.data.students;
        }

        /*
        * Input: Student object
        * Output: List of guardians for this student.
        */
        async getGuardianInfo(studentId) {
            var res = await this.classroom.userProfiles.guardians.list(studentId);
            if (res.guardians.nextPageToken !== "") {
                console.log("guardians list page size should be bigger.");
            }
            return res.guardians.guardians;
        }

        /*
        * Input: course ID
        * Output: list of studentSubmissions for the entire course.
        */
        async getCourseWork(courseId) {
            var res = await this.classroom.courses.courseWork.studentSubmissions.list({
                courseId: courseId,
                courseWorkId: "-",
                pageSize: 1000000
            });
            if (res.data && res.data.studentSubmissions) {
                return res.data.studentSubmissions;
            }
            else {
                console.log("Error in getCourseWork()");
            }
        }

        /*
        * Input: Course ID and assignment ID
        * Output: due date and name of the assignment
        */
        async getAssignmentInfo(courseId, courseWorkId) {
            var res = await this.classroom.courses.courseWork.get({
                courseId: courseId,
                id: courseWorkId
            });
            if (res.data && res.data.courseWork) {
                return {
                    dueDate: res.data.courseWork.dueDate,
                    name: res.data.courseWork.name
                };
            }
            else {
                console.log("Error in getAssignmentInfo()");
            }
        }
    }
}