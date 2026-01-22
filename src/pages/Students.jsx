import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students, toggleAttendance } = useContext(StudentContext);
  const navigate = useNavigate();

  // ✅ EXPORT CSV FUNCTION
  const exportCSV = () => {
    if (students.length === 0) {
      alert("No students to export");
      return;
    }

    const headers = "Name,Gender,Attendance\n";
    const rows = students.map(
      (s) =>
        `${s.name},${s.gender},${s.present ? "Present" : "Absent"}`
    );

    const csvContent = headers + rows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="layout students-page">
      <Sidebar />

      <div className="content">
        <div className="students-header">
          <h2 className="page-title">Students</h2>

          {/* EXPORT BUTTON */}
          <button className="export-btn" onClick={exportCSV}>
            Export CSV
          </button>
        </div>

        {/* EMPTY STATE */}
        {students.length === 0 ? (
          <div className="empty-state">
            <p>No students added yet.</p>
          </div>
        ) : (
          <div className="student-grid">
            {students.map((student) => (
              <div
                key={student.id}
                className="student-card"
                onClick={() => navigate(`/students/${student.id}`)}
              >
                <h4>{student.name}</h4>
                <p>{student.gender}</p>

                <span
                  className={`status ${
                    student.present ? "present" : "absent"
                  }`}
                >
                  {student.present ? "Present" : "Absent"}
                </span>

                {/* ATTENDANCE BUTTON */}
                <button
                  className="attendance-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAttendance(student.id);
                  }}
                >
                  Toggle Attendance
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Students;
