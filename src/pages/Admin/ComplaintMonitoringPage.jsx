import AdminLayout from "../../layouts/AdminLayout";

function ComplaintMonitoringPage() {
    const complaints = [

        {
            id: "CMP001",
            title: "Street Light Not Working",
            category: "Street Light",
            citizen: "Ravi Kumar",
            location: "Ward 5",
            status: "Pending",
        },

        {
            id: "CMP002",
            title: "Road Damage",
            category: "Road Damage",
            citizen: "Suresh Patel",
            location: "Ward 1",
            status: "In Progress",
        },

        {
            id: "CMP003",
            title: "Water Leakage",
            category: "Water Supply",
            citizen: "Amit Singh",
            location: "Near Hanuman Mandir",
            status: "Resolved",
        },

        {
            id: "CMP004",
            title: "Garbage Collection",
            category: "Sanitation",
            citizen: "Kiran Sharma",
            location: "Ward 3",
            status: "Rejected",
        },

    ];
    const totalComplaints =
        complaints.length;
    const pendingCount =
        complaints.filter(
            (c) =>
                c.status === "Pending"
        ).length;
    const inProgressCount =
        complaints.filter(
            (c) =>
                c.status === "In Progress"
        ).length;
    const resolvedCount =
        complaints.filter(
            (c) =>
                c.status === "Resolved"
        ).length;
    const rejectedCount =
        complaints.filter(
            (c) =>
                c.status === "Rejected"
        ).length;

    return (

        <AdminLayout>

            <h1>
                Complaint Monitoring
            </h1>
            <h2>
                Complaint Statistics
            </h2>

            <p>
                Total Complaints:
                {totalComplaints}
            </p>

            <p>
                Pending:
                {pendingCount}
            </p>

            <p>
                In Progress:
                {inProgressCount}
            </p>

            <p>
                Resolved:
                {resolvedCount}
            </p>

            <p>
                Rejected:
                {rejectedCount}
            </p>
            <p>

                Resolution Rate:

                {" "}

                {
                    (
                        resolvedCount
                        /
                        totalComplaints
                        *
                        100
                    ).toFixed(1)
                }

                %

            </p>
            <h2>
                All Complaints
            </h2>
            {
                complaints.map(
                    (complaint) => (

                        <div
                            key={complaint.id}
                            style={{
                                border: "1px solid gray",
                                padding: "15px",
                                marginBottom: "15px",
                            }}
                        >

                            <h3>
                                {complaint.title}
                            </h3>

                            <p>
                                ID:
                                {complaint.id}
                            </p>

                            <p>
                                Citizen:
                                {complaint.citizen}
                            </p>

                            <p>
                                Category:
                                {complaint.category}
                            </p>

                            <p>
                                Location:
                                {complaint.location}
                            </p>

                            <p>

                                Status:

                                {" "}

                                {
                                    complaint.status ===
                                        "Pending"

                                        ? "🟡 Pending"

                                        : complaint.status ===
                                            "In Progress"

                                            ? "🔵 In Progress"

                                            : complaint.status ===
                                                "Resolved"

                                                ? "🟢 Resolved"

                                                : "🔴 Rejected"
                                }

                            </p>

                        </div>

                    )
                )
            }

        </AdminLayout>

    );
}

export default ComplaintMonitoringPage;