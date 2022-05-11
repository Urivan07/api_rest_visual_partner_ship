const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/reader");

describe("Test StudentService", () => {
    test("Requerimiento 1 consultar todos los estudiantes con todos sus campos", ()=>{
        const students = StudentService.getStudents();
        expect(students[0]).toHaveProperty("haveCertification");
        expect(students[0]).toHaveProperty("name");
        expect(students[0]).toHaveProperty("email");
        expect(students[0]).toHaveProperty("credits");
        expect(students.length).toBeGreaterThan(0);
    });
    test("Requerimiento 2 consultar los emails de todos los estudiantes que tengan certificación", ()=>{
        const students = Reader.readJsonFile("visualpartners.json");
        const mailsOfStudents = StudentService.getStudentsByCerification(students, true);
        expect(mailsOfStudents.length).toBeGreaterThan(0);
        expect(mailsOfStudents).toContain("Todd@visualpartnership.xyz");
    });
});