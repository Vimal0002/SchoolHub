import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Reports() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar title="Reports" />
        <ul>
          <li>Monthly Attendance</li>
          <li>Student Performance</li>
          <li>Fee Collection</li>
        </ul>
      </div>
    </div>
  );
}

export default Reports;
