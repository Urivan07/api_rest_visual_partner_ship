const StudentController = require("./controller/StudentController");
const express = require("Express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Visual Partner-Ship" });
});

app.get("/v1/students", (req, res) => {
    const students = StudentController.getStudents();
    res.json(students);
});

app.get("/v1/students/emails", (req, res) => {
    const mailsByCertification = StudentController.getStudentsByCerification();
    res.json(mailsByCertification);
});

app.listen(port, () => {
    console.log(` Visual Partner-Ship API in localhost: ${port}`);
});
