import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:3000/students";

function App() {
  // form states
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [editId, setEditId] = useState(null);

  // data states
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // GET all students
  const getStudents = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setStudents(data);

    // update view box data after update
    if (selectedStudent) {
      const updated = data.find(s => s.id === selectedStudent.id);
      setSelectedStudent(updated || null);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // SAVE / UPDATE
  const saveStudent = async () => {
    if (name === "" || roll === "") {
      alert("Name and Roll required");
      return;
    }

    const student = { name, roll, phone, address };

    if (editId === null) {
      // POST
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
    } else {
      // PUT
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      setEditId(null);
    }

    // clear form
    setName("");
    setRoll("");
    setPhone("");
    setAddress("");

    getStudents();
  };

  // DELETE
  const deleteStudent = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setSelectedStudent(null);
    getStudents();
  };

  // EDIT
  const editStudent = (s) => {
    setEditId(s.id);
    setName(s.name);
    setRoll(s.roll);
    setPhone(s.phone);
    setAddress(s.address);
  };

  // VIEW
  const viewStudent = (s) => {
    setSelectedStudent(s);
  };

  return (
    <div className="container">
      <h2>Student Form</h2>

      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button onClick={saveStudent}>
          {editId === null ? "Save" : "Update"}
        </button>
      </div>

      <hr />

      {/* STUDENT CARDS */}
      {students.length > 0 && (
        <>
          <h2>Students</h2>

          {students.map((s) => (
            <div className="card" key={s.id}>
              <b>{s.name}</b>
              <p>Roll: {s.roll}</p>

              <div className="buttons">
                <button onClick={() => viewStudent(s)}>View</button>
                <button onClick={() => editStudent(s)}>Edit</button>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* VIEW DETAILS BOX */}
      {selectedStudent && (
        <>
          <hr />
          <h2>Student Details</h2>

          <div className="card">
            <p><b>Name:</b> {selectedStudent.name}</p>
            <p><b>Roll:</b> {selectedStudent.roll}</p>
            <p><b>Phone:</b> {selectedStudent.phone}</p>
            <p><b>Address:</b> {selectedStudent.address}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
