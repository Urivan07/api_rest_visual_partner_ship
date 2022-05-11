const StudentService = require("./../../lib/services/StudentService")

describe("Test StudentService", () => {
    test("Requerimiento 1 consultar todos los estudiantes con todos sus campos", ()=>{
        const students = StudentService.getStudents();
        expect(students.length).toBe(51)
    })
})