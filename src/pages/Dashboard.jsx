import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { StudentContext } from "../context/StudentContext";
import StudentGenderChart from "../components/StudentGenderChart";

function Dashboard() {
  const { students, activities } = useContext(StudentContext);
  const navigate = useNavigate();

  // 📍 LOCATION STATE
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");

  // 📍 GET USER LOCATION ON DASHBOARD LOAD
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        setLocationError("Location permission denied");
      }
    );
  }, []);

  // STUDENT STATS
  const totalStudents = students.length;
  const boys = students.filter((s) => s.gender === "Male").length;
  const girls = students.filter((s) => s.gender === "Female").length;

  const present = students.filter((s) => s.present).length;
  const absent = totalStudents - present;

  const attendanceRate =
    totalStudents === 0
      ? 0
      : Math.round((present / totalStudents) * 100);

  return (
    <div className="layout">
      <Sidebar />

      <div className="dashboard">
        <h2 className="page-title">Dashboard</h2>

        {/* STATS */}
        <div className="stats-grid">
          <div
            className="stat-card blue"
            onClick={() => navigate("/students")}
          >
            <h4>Students</h4>
            <p>{totalStudents}</p>
          </div>

          <div className="stat-card purple">
            <h4>Boys</h4>
            <p>{boys}</p>
          </div>

          <div className="stat-card pink">
            <h4>Girls</h4>
            <p>{girls}</p>
          </div>
        </div>

        {/* GRID */}
        <div className="dashboard-grid">
          {/* CHART */}
          <div className="chart-card">
            <h3>Gender Distribution</h3>
            <StudentGenderChart boys={boys} girls={girls} />

            <p className="muted">
              Present: {present} | Absent: {absent}
            </p>

            <div className="attendance-box">
              <span>Attendance Rate</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${attendanceRate}%` }}
                />
              </div>
              <strong>{attendanceRate}%</strong>
            </div>
          </div>

          {/* LOCATION + ACTIVITY */}
          <div className="chart-card">
            <h3>Admin Location</h3>

            {location ? (
              <p className="location-text">
                📍 Lat: {location.lat.toFixed(4)} <br />
                📍 Lng: {location.lng.toFixed(4)}
              </p>
            ) : (
              <p className="muted">{locationError || "Fetching location..."}</p>
            )}

            <hr style={{ margin: "15px 0" }} />

            <h3>Recent Activity</h3>
            {activities.length === 0 ? (
              <p className="muted">No activity yet</p>
            ) : (
              activities.slice(0, 5).map((a) => (
                <div key={a.id} className="activity-item">
                  {a.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
