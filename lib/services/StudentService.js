const Reader = require("./../utils/reader");

class StudentService {
    static getStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }
    static getStudentsByCerification(students,haveCertification){
        const studentsByCertification = students.filter((student) => student.haveCertification == haveCertification);
        const mailsOfStudents = studentsByCertification.map((student) => student.email);
        return mailsOfStudents;
    }
}

module.exports = StudentService;
