import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

function Registration() {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");

  const handleSubmit = () => {
    addStudent({
      id: Date.now(),
      name,
      gender,
      present: true
    });

    navigate("/dashboard");
  };

  return (
    <div className="login-card">
      <h2>Add Student</h2>

      <input
        placeholder="Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
      </select>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Registration;
