const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/reader");

class StudentController {
    static getStudents() {
        return StudentService.getStudents();
    }
    static getStudentsByCerification(haveCertification) {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCerification(students, haveCertification);
    }
}

module.exports = StudentController;
