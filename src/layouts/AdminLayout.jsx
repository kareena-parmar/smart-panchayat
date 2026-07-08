import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "Manage Citizens",
      path: "/admin/manage-citizens",
    },
    {
      label: "Manage Officers",
      path: "/admin/manage-officers",
    },
    {
      label: "Complaints",
      path: "/admin/monitor-complaints",
    },
    {
      label: "Announcements",
      path: "/admin/monitor-announcements",
    },
    {
      label: "Reports",
      path: "/admin/reports",
    },
    {
      label: "Profile",
      path: "/admin/profile",
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

export default AdminLayout;