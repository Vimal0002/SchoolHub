import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { StudentContext } from "../context/StudentContext";

function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students } = useContext(StudentContext);

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="profile-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="profile-card">
          <h2>{student.name}</h2>

          <div className="profile-info">
            <p><strong>Gender:</strong> {student.gender}</p>
            <p>
              <strong>Status:</strong>{" "}
              {student.present ? "Present" : "Absent"}
            </p>
            <p>
              <strong>Student ID:</strong> {student.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
