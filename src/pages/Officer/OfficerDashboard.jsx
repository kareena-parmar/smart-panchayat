import OfficerLayout from "../../layouts/OfficerLayout";

function OfficerDashboard() {
  const recentComplaints = [

  {
    id: "CMP021",
    title: "Water Leakage",
  },

  {
    id: "CMP022",
    title: "Road Damage",
  },

  {
    id: "CMP023",
    title: "Street Light Not Working",
  },

];
  return (
    <OfficerLayout>
      <h1>Officer Dashboard</h1>
      <div
  style={{
    border: "1px solid gray",
    padding: "15px",
    marginBottom: "20px",
  }}
>
  <h2>Welcome, Kareena 👋</h2>

  <p>
    Today:
    {" "}
    {new Date().toLocaleDateString()}
  </p>

  <p>
    Role:
    Officer
  </p>
  
</div>
<h2>
  Recent Complaints
</h2>
<div
  style={{
    border: "1px solid gray",
    padding: "15px",
    marginTop: "15px",
  }}
>

{
  recentComplaints.map(
    (complaint) => (

      <div
        key={complaint.id}
      >
        📄 {complaint.id}
        {" - "}
        {complaint.title}
      </div>

    )
  )
}
</div>
<h2>Today's Work Summary</h2>
      <div
  style={{
    border: "1px solid gray",
    padding: "15px",
    marginBottom: "20px",
  }}
>

  

  <p>
    Assigned Complaints: 12
  </p>

  <p>
    Pending: 5
  </p>

  <p>
    In Progress: 4
  </p>

  <p>
    Resolved Today: 3
  </p>

</div>
<h2>
    Performance Overview
  </h2>
<div
  style={{
    border: "1px solid gray",
    padding: "15px",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <h2>
    Performance Overview
  </h2>

  <p>
    Complaints Resolved This Month: 28
  </p>

  <p>
    Resolution Rate: 85%
  </p>

  <p>
    Citizen Rating: ⭐ 4.5 / 5
  </p>

</div>
<h2>
  Notifications
</h2>

<div
  style={{
    border: "1px solid gray",
    padding: "15px",
  }}
>

  <p>
    🔔 New Complaint Assigned
  </p>

  <p>
    🔔 New Feedback Received
  </p>

  <p>
    🔔 Announcement Edit Window Ending Soon
  </p>

</div>
<h2>
  Upcoming Tasks
</h2>

<div
  style={{
    border: "1px solid gray",
    padding: "15px",
    marginTop: "15px",
  }}
>

  <p>
    📌 Visit Ward 5
  </p>

  <p>
    📌 Road Inspection
  </p>

  <p>
    📌 Water Supply Check
  </p>

</div>


      <h1>Officer Dashboard</h1>

      <h3>Assigned Complaints: 25</h3>

      <h3>Pending: 7</h3>

      <h3>Resolved: 18</h3>

    </OfficerLayout>
  );
}

export default OfficerDashboard;