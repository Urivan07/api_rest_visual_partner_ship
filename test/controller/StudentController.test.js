const StudentController = require("./../../lib/controller/StudentController")

describe("Test StudentController", ()=>{
    test("Requerimiento 1 consultar todos los estudiantes con todos sus campo", () =>{
        const students = StudentController.getStudents();
        expect(students[0]).toHaveProperty("haveCertification");
        expect(students[0]).toHaveProperty("name");
        expect(students[0]).toHaveProperty("email");
        expect(students[0]).toHaveProperty("credits");
        expect(students.length).toBeGreaterThan(0);
    })
})