function Topbar({ title }) {
  return (
    <div className="topbar">
      <h2>{title}</h2>
      <input className="search" placeholder="Search..." />
    </div>
  );
}

export default Topbar;
