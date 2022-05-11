const Reader = require("./../utils/reader");

class StudentService {
  static getStudents() {
    const students = Reader.readJsonFile("visualpartners.json");
    return students;
  }
}

module.exports = StudentService;
