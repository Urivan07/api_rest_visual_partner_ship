const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/reader");
const students = Reader.readJsonFile("visualpartners.json");

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
        const mailsOfStudents = StudentService.getStudentsByCerification(students);
        expect(mailsOfStudents.length).toBeGreaterThan(0);
        expect(mailsOfStudents).toContain("Todd@visualpartnership.xyz");
    });
    test("Requerimiento 3 consultar todos los estudiantes que tengan credits mayor a 500", ()=>{
        const StudentsByCredits = StudentService.getStudentsByCredits(students, 500);
        expect(StudentsByCredits[0].name).toContain("Warren");
        expect(StudentsByCredits[0].credits).toBe(508);
        expect(StudentsByCredits[0].enrollments).toContain("Visual Thinking Intermedio");
    });
});