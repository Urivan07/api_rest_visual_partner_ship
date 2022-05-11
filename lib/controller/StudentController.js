const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/reader");

class StudentController {
    static getStudents() {
        return StudentService.getStudents();
    }
}

module.exports = StudentController;
