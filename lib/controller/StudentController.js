const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/reader");

class StudentController {
    static getStudents() {
        return StudentService.getStudents();
    }
    static getStudentsByCerification() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCerification(students);
    }
    static getStudentsByCredits(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCredits(students, credits);
    }
}

module.exports = StudentController;
