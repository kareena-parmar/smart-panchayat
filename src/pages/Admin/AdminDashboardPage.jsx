import AdminLayout from "../../layouts/AdminLayout";

function AdminDashboardPage() {

  const totalCitizens = 150;

const totalOfficers = 10;

const totalComplaints = 45;

const pendingComplaints = 8;

const resolvedComplaints = 30;

const rejectedComplaints = 7;

const totalAnnouncements = 12;

const totalFeedbacks = 25;
  return (
    <AdminLayout>

      <h1>Admin Dashboard</h1>
      <h2>
    System Overview
</h2>
<div
    style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
    }}
>

    <h3>
        Total Citizens
    </h3>

    <p>
        {totalCitizens}
    </p>

</div>
<div
    style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
    }}
>

    <h3>
        Total Officers
    </h3>

    <p>
        {totalOfficers}
    </p>

</div>
<div
    style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
    }}
>

    <h3>
        Total Complaints
    </h3>

    <p>
        {totalComplaints}
    </p>

</div>
<h2>
    Complaint Status
</h2>

<p>
    Pending:
    {pendingComplaints}
</p>

<p>
    Resolved:
    {resolvedComplaints}
</p>

<p>
    Rejected:
    {rejectedComplaints}
</p>
<p>

Resolution Rate:

{" "}

{
(
resolvedComplaints
/
totalComplaints
*
100
).toFixed(1)
}

%

</p>
<h2>
    Announcements
</h2>

<p>
    Total Announcements:
    {totalAnnouncements}
</p>
<h2>
    Feedback
</h2>

<p>
    Total Feedbacks:
    {totalFeedbacks}
</p>


    </AdminLayout>
  );
}

export default AdminDashboardPage;