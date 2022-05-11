const Reader = require("./../utils/reader");

class StudentService {
    static getStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }
    static getStudentsByCerification(students){
        const studentsByCertification = students.filter((student) => student.haveCertification == true);
        const mailsOfStudents = studentsByCertification.map((student) => student.email);
        return mailsOfStudents;
    }
    static getStudentsByCredits(students){
        const StudentsByCredits = students.filter((student)=> student.credits > 500);
        return StudentsByCredits;
    }
}

module.exports = StudentService;
