const StudentService = require("./../../lib/services/StudentService")

describe("Test StudentService", () => {
    test("Requerimiento 1 consultar todos los estudiantes con todos sus campos", ()=>{
        const students = StudentService.getStudents();
        expect(students[0]).toHaveProperty("haveCertification")
        expect(students[0]).toHaveProperty("name")
        expect(students[0]).toHaveProperty("email")
        expect(students[0]).toHaveProperty("username")
        expect(students.length).toBeGreaterThan(0)
    })
})