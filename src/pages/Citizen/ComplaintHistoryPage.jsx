import CitizenLayout from "../../layouts/CitizenLayout";

function ComplaintHistoryPage() {
    const complaints = [
        {
            id: "CMP001",
            title: "Street Light Not Working",
            category: "Street Light",
            description: "Light not working for 10 days",
            location: "ward 5",
            status: "Pending",
        },

        {
            id: "CMP002",
            title: "Road Damage",
            category: "Road Damage",
            description: "Road is damaged.",
            location: "ward 1",
            status: "In Progress",
        },

        {
            id: "CMP003",
            title: "Water Leakage",
            category: "Water Supply",
            description: "water leakage problem.",
            location: "Near Hanuman Mandir",
            status: "Resolved",
        },
    ];
    return (
        <CitizenLayout>
            <h1>Complaint History</h1>

            {complaints.map((complaint) => (
                <div key={complaint.id}>

                    <h3>{complaint.title}</h3>

                    <p>ID: {complaint.id}</p>

                    <p>Category: {complaint.category}</p>
                    <p>Description: {complaint.description}</p>
                    <p>Location: {complaint.location}</p>
                    <p>
                        Status:
                        {" "}
                        {complaint.status === "Pending"
                            ? "🟡 Pending"
                            : complaint.status === "In Progress"
                                ? "🔵 In Progress"
                                : "🟢 Resolved"}
                    </p>

                    <hr />

                </div>
            ))}

        </CitizenLayout>

    )}

    export default ComplaintHistoryPage;