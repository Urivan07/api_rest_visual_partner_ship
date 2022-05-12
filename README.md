# API Rest Visual Partner Ship para mission NodeJs de Launch X

## Requerimientos y descripcion del proyecto: 
Visual Partner-Ship te ha asignado el siguiente proyecto:

### Cursos de Visual Thinking API
DB en formato JSON de los estudiantes de Visual Partner-Ship: https://gist.github.com/carlogilmar/1f5164637fb77aecef3b9e6b9e2a9b63

```marqdawn
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
```

## Estructura del proyecto
### /lib/utils/Reader: Script para leer la informacion de los estudiantes de Visual Partner-Ship utilizando el módulo File System de Node.js.
* Metodo:
```javascript
const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
```
### /lib/services/StudentService : En este servicio se realizan todas las operaciones de filtrado y mapeo que se necesitan.
* Metodos:
```javascript
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
```
### lib/controller/StudentController : Script para conectar la funcionalidad con el servicio StudentService.
* Metodos:
```javascript
    static getStudents() {
        return StudentService.getStudents();
    }
    static getStudentsByCerification() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCerification(students);
    }
    static getStudentsByCredits(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCredits(students);
    }
```
### lib/server : Script para montar el servidor con Express Server y creacion de endpoints necesarios para el proyecto.
* APIs:
```javascript
app.get("/v1/students", (req, res) => {
    const students = StudentController.getStudents();
    res.json(students);
});
app.get("/v1/students/emails", (req, res) => {
    const mailsByCertification = StudentController.getStudentsByCerification();
    res.json(mailsByCertification);
});
app.get("/v1/students/credits", (req, res) => {
    const StudentsByCredits = StudentController.getStudentsByCredits();
    res.json(StudentsByCredits);
});
```
### Capturas de ejemplo de consulta utilizando los endpoints configurados:
* Requerimiento 1:
```
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
```
![req1](https://github.com/Urivan07/api_rest_visual_partner_ship/blob/master/lib/assets/api_rest/v1_students.JPG)
* Requerimiento 2:
```
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
```
![req2](https://github.com/Urivan07/api_rest_visual_partner_ship/blob/master/lib/assets/api_rest/v1_students_emails.JPG)
* Requerimiento 3:
```
3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
```
![req3](https://github.com/Urivan07/api_rest_visual_partner_ship/blob/master/lib/assets/api_rest/v1_students_credits.JPG)

## Herramientas y dependencias utilizadas en el proyecto:
### Jest : Framework utilizado para realizar pruebas de funcionalidad, se realizaron las pruebas a los scripts utilizados en el proyecto.
* Ejemplos de test realizados:
```javascript
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
        const StudentsByCredits = StudentService.getStudentsByCredits(students);
        expect(StudentsByCredits[0].name).toContain("Warren");
        expect(StudentsByCredits[0].credits).toBe(508);
        expect(StudentsByCredits[0].enrollments).toContain("Visual Thinking Intermedio");
    });
```
### EsLint: Herramienta para comprobación de errores de sintaxis y prevencion de errores.
* Configuracion utilizada:
```javascript
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
```
### Express Server: Framework utilizado para montar el servidor utilizado para el consumo de las apis generadas.
* Configuracion inicial realizada:
```javascript
const express = require("Express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Visual Partner-Ship" });
});

app.listen(port, () => {
    console.log(` Visual Partner-Ship API in localhost: ${port}`);
});
```
### Github Workflows: Utilizado para automatizacion de pruebas con Jest en github actions.
* Configuracion realizada:
```yml
name: Run Tests in my project every push on GitHub

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
```
* Captura GitHub Actions:<br>
![image](https://user-images.githubusercontent.com/99374761/167958631-f196e7ad-b805-4f92-a9f5-fd2a24d1d1c5.png)




