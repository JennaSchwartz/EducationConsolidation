const { error } = require("jquery");
const {google} = require('googleapis');

module.exports = {
    GCInfo: class {
        constructor(auth) {
            if (auth == null) {
                throw new error("User not authorized.");
            }
            this.classroom = google.classroom({version: 'v1', auth});
        }

        /**
         * Lists the course that the user has access to.
         */
        getCourse() {
            classroom.courses.list({
                pageSize: 1,
                }, (err, res) => {
                    if (err) return console.error('The API returned an error: ' + err);
                    const courses = res.data.courses;
                    if (courses && courses.length) {
                        return {
                            CourseName: courses[0].name,
                            CourseId: courses[0].id
                        }
                    } else {
                        throw new error("User does not have access to any courses.");
                    }
                }
            );
        }

        /*
        * Input: Course ID
        * Output: List of student IDs and their names enrolled in the course.
        */
        getStudentsInCourse(courseId) {
            // TODO
        }

        /*
        * Input: Student ID
        * Output: Guardian Info for this student.
        */
        getGuardianInfo(studentId) {
            // TODO
        }

        /*
        * Input: student ID
        * Output: list of active assignments, their deadlines, and completion status for this student.
        */
        getCourseworkForStudent(studentId) {
            // TODO
        }

    }
}