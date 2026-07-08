import AdminLayout from "../../layouts/AdminLayout";

function ReportsPage() {
    const totalCitizens = 150;

const totalOfficers = 10;

const totalComplaints = 50;

const resolvedComplaints = 27;

const pendingComplaints = 10;

const inProgressComplaints = 8;

const rejectedComplaints = 5;

const totalAnnouncements = 20;

const totalFeedbacks = 40;

const averageRating = 4.2;

    return (

        <AdminLayout>

            <h1>
                Reports
            </h1>
            <h2>
    Complaint Report
</h2>

<p>
    Total Complaints:
    {totalComplaints}
</p>

<p>
    🟡 Pending:
    {pendingComplaints}
</p>
<p>
    🔵 In Progress:
    {inProgressComplaints}
</p>

<p>
    🟢 Resolved:
    {resolvedComplaints}
</p>

<p>
    🔴 Rejected:
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
    Citizen Report
</h2>

<p>
    Total Citizens:
    {totalCitizens}
</p>
<h2>
    Officer Report
</h2>

<p>
    Total Officers:
    {totalOfficers}
</p>
<h2>
    Announcement Report
</h2>

<p>
    Total Announcements:
    {totalAnnouncements}
</p>
<h2>
    Feedback Report
</h2>

<p>
    Total Feedbacks:
    {totalFeedbacks}
</p>

<p>
    Average Rating:
    {averageRating}
    / 5
</p>
<h2>
    System Performance
</h2>
<p>
Citizen Participation:
High
</p>

<p>
Complaint Resolution:
Good
</p>

<p>
Service Quality:
Excellent
</p>
<button
onClick={() =>
alert(
"Report Generated Successfully"
)
}
>
Generate Report
</button>

        </AdminLayout>

    );
}

export default ReportsPage;