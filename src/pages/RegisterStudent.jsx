import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { StudentContext } from "../context/StudentContext";

function RegisterStudent() {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  // FORM STATE
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !city || !email || !mobile) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name,
      gender,
      city,
      email,
      mobile,
      present: false,
    });

    navigate("/students");
  };

  return (
    <div className="layout add-student-page">
      <Sidebar />

      <div className="content">
        <h2 className="page-title">Register Student</h2>

        <form className="student-form" onSubmit={handleSubmit}>
          {/* NAME */}
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* GENDER */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* CITY */}
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* MOBILE */}
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          {/* SUBMIT */}
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent;

