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
