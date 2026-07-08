
import Sidebar from "../components/Sidebar";

function CitizenLayout({ children }) {

  const menuItems = [
    {
      label: "Dashboard",
      path: "/citizen/dashboard",
    },
    {
      label: "Complaints",
      path: "/citizen/complaints",
    },
    {
      label: "Announcements",
      path: "/citizen/announcements",
    },
    {
      label: "Feedback",
      path: "/citizen/feedback",
    },
    {label: "Complaint History",
      path: "/citizen/complaint-history",
    },
    {
      label: "Profile",
      path: "/citizen/profile",
    },
    
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar menuItems={menuItems} />

      <div style={{ padding: "20px", flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default CitizenLayout;