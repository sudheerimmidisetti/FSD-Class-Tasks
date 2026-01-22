const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary data store
let students = [];
let id = 1;

// POST – Add student
app.post("/students", (req, res) => {
  const student = {
    id: id++,
    name: req.body.name,
    roll: req.body.roll,
    phone: req.body.phone,
    address: req.body.address
  };

  students.push(student);
  res.json(student);
});

// GET – All students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET – Single student (View)
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

// PUT – Update student
app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);

  students[index] = {
    id: students[index].id,
    ...req.body
  };

  res.json(students[index]);
});

// DELETE – Remove student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
