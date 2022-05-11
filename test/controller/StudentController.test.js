const StudentController = require("./../../lib/controller/StudentController");

describe("Test StudentController", ()=>{
    test("Consultar todos los estudiantes con todos sus campo", () =>{
        const students = StudentController.getStudents();
        expect(students[0]).toHaveProperty("haveCertification");
        expect(students[0]).toHaveProperty("name");
        expect(students[0]).toHaveProperty("email");
        expect(students[0]).toHaveProperty("credits");
        expect(students.length).toBeGreaterThan(0);
    });
    test("Consultar los emails de todos los estudiantes que tengan no certificación", ()=>{
        const mailsOfStudents = StudentController.getStudentsByCerification(false);
        expect(mailsOfStudents.length).toBeGreaterThan(0);
        expect(mailsOfStudents).toContain("Camacho@visualpartnership.xyz");
    });
    test("Consultar los emails de todos los estudiantes que tengan certificación", ()=>{
        const mailsOfStudents = StudentController.getStudentsByCerification(true);
        expect(mailsOfStudents.length).toBeGreaterThan(0);
        expect(mailsOfStudents).toContain("Mcpherson@visualpartnership.xyz");
    });
});