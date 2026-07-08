import CitizenLayout from "../../layouts/CitizenLayout";

function CitizenDashboard() {
  const recentAnnouncements = [

  {
    id: 1,
    title: "Water Supply Maintenance",
  },

  {
    id: 2,
    title: "Village Cleanliness Drive",
  },

  {
    id: 3,
    title: "Health Camp",
  },

];
  return (
    <CitizenLayout>
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
    Citizen
  </p>
  
</div>
<h2>
  Upcoming Events
</h2>

<div
  style={{
    border: "1px solid gray",
    padding: "15px",
  }}
>

  <p>
    📅 15 June - Village Meeting
  </p>

  <p>
    📅 18 June - Health Camp
  </p>

  <p>
    📅 20 June - Tree Plantation Drive
  </p>

</div>
<h2>
  Complaint Progress Tracker
</h2>

<div
  style={{
    border: "1px solid gray",
    padding: "15px",
  }}
>

  <p>
    Complaint ID:
    CMP001
  </p>

  <p>
    ✅ Submitted
  </p>

  <p>
    ✅ Assigned
  </p>

  <p>
    🔄 In Progress
  </p>

  <p>
    ⏳ Resolved
  </p>

</div>

      <h1>Citizen Dashboard</h1>
      <div style={{
    border: "1px solid gray",
    padding: "15px",
  }}
>
      <p>Total Complaints: 10<br/><br/>

      Pending Complaints: 2<br/><br/>
      

      Resolved Complaints: 8 </p>
      </div>
      <h2>
  Recent Announcements
</h2>
<div style={{
    border: "1px solid gray",
    padding: "15px",
  }}>

{
  recentAnnouncements.map(
    (announcement) => (

      <div
        key={announcement.id}
      >
        📢
        {" "}
        {announcement.title}

      </div>

    )
  )
}
</div>
<h2>
  Emergency Contacts
</h2>

<div
  style={{
    border: "1px solid gray",
    padding: "15px",
  }}
>

  <p>
    ☎ Panchayat Office:
    9876543210
  </p>

  <p>
    ☎ Health Center:
    9876543211
  </p>

  <p>
    ☎ Police Station:
    100
  </p>

  <p>
    ☎ Fire Department:
    101
  </p>

</div>


    </CitizenLayout>
    
  );
}

export default CitizenDashboard;