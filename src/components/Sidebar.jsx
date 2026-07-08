import { Link } from "react-router-dom";

function Sidebar({ menuItems }) {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        borderRight: "1px solid #ccc",
        padding: "20px",
      }}
    >
      <h2>Smart Panchayat</h2>

      {menuItems.map((item) => (
        <div key={item.path} style={{ marginBottom: "15px" }}>
          <Link to={item.path}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;