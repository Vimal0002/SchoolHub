import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Profile() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar title="Profile" />
        <p>Name: Admin</p>
        <p>Email: admin@schoolhub.com</p>
      </div>
    </div>
  );
}

export default Profile;
