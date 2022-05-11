const StudentController = require("./../../lib/controller/StudentController");

describe("Test StudentController", ()=>{
    test("Consulta todos los estudiantes con todos sus campo", () =>{
        const students = StudentController.getStudents();
        expect(students[0]).toHaveProperty("haveCertification");
        expect(students[0]).toHaveProperty("name");
        expect(students[0]).toHaveProperty("email");
        expect(students[0]).toHaveProperty("credits");
        expect(students.length).toBeGreaterThan(0);
    });
    test("Consulta los emails de todos los estudiantes que tengan certificación", ()=>{
        const mailsOfStudents = StudentController.getStudentsByCerification();
        expect(mailsOfStudents.length).toBeGreaterThan(0);
        expect(mailsOfStudents).toContain("Mcpherson@visualpartnership.xyz");
    });
    test("Consulta todos los estudiantes que tengan credits mayor a 500", ()=>{
        const StudentsByCredits = StudentController.getStudentsByCredits();
        expect(StudentsByCredits[0].name).toContain("Warren");
        expect(StudentsByCredits.length).toBe(27);
        expect(StudentsByCredits[0].credits).toBe(508);
    });
});