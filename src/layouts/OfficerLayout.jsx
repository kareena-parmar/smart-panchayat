import Sidebar from "../components/Sidebar";

function OfficerLayout({ children }) {

  const menuItems = [
    {
      label: "Dashboard",
      path: "/officer/dashboard",
    },
    {
      label: "Manage Complaints",
      path: "/officer/manage-complaints",
    },
    {
      label: "View Announcements",
      path: "/officer/view-announcements",
    },
    {
      label: "Post Announcement",
      path: "/officer/post-announcement",
    },
    {
      label: "Feedback review",
      path: "/officer/review-feedback",
    },
    {
      label: "Profile",
      path: "/officer/profile",
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

export default OfficerLayout;