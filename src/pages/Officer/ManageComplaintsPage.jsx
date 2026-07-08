import { useState } from "react";
import OfficerLayout from "../../layouts/OfficerLayout";

function ManageComplaintsPage() {

    const complaintsData = [
        {
            id: "CMP001",
            title: "Street Light Not Working",
            category: "Street Light",
            description: "Light not working for 10 days",
            location: "Ward 5",
            status: "Pending",
            selectedStatus: "Pending",
        },

        {
            id: "CMP002",
            title: "Road Damage",
            category: "Road Damage",
            description: "Road damaged due to rain",
            location: "Ward 1",
            status: "In Progress",
            selectedStatus: "In Progress",
        },

        {
            id: "CMP003",
            title: "Water Leakage",
            category: "Water Supply",
            description: "Water leakage near temple",
            location: "Near Hanuman Mandir",
            status: "Resolved",
            selectedStatus: "Resolved",
        },
    ];

    const [complaints, setComplaints] =
        useState(complaintsData);

    const updateStatus = (
        id,
        newStatus
    ) => {

        const updatedComplaints =
            complaints.map((complaint) =>

                complaint.id === id

                    ? {
                        ...complaint,
                        selectedStatus: newStatus,
                    }

                    : complaint
            );

        setComplaints(updatedComplaints);
    };



    const saveComplaint = (id) => {

        const updatedComplaints =
            complaints.map((complaint) =>

                complaint.id === id

                    ? {
                        ...complaint,
                        status:
                            complaint.selectedStatus,
                    }

                    : complaint
            );

        setComplaints(updatedComplaints);

        alert(
            "Complaint Updated Successfully"
        );
    };

    return (
        <OfficerLayout>

            <h1>Manage Complaints</h1>

            <p>
                Total Complaints:
                {complaints.length}
            </p>

            <p>
                Pending:
                {
                    complaints.filter(
                        (c) =>
                            c.status === "Pending"
                    ).length
                }
            </p>

            <p>
                In Progress:
                {
                    complaints.filter(
                        (c) =>
                            c.status ===
                            "In Progress"
                    ).length
                }
            </p>

            <p>
                Resolved:
                {
                    complaints.filter(
                        (c) =>
                            c.status ===
                            "Resolved"
                    ).length
                }
            </p>
            <p>
                Rejected:
                {
                    complaints.filter(
                        (c) => c.status === "Rejected"

                    ).length
                }
            </p>


            {complaints.map((complaint) => (
                <div
                    key={complaint.id}
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        marginBottom: "20px",
                    }}
                >

                    <h3>{complaint.title}</h3>

                    <p>ID: {complaint.id}</p>

                    <p>
                        Category:
                        {complaint.category}
                    </p>

                    <p>
                        Description:
                        {complaint.description}
                    </p>

                    <p>
                        Location:
                        {complaint.location}
                    </p>
                    <p>
                        Current Status:
                        {" "}
                        {complaint.status}
                    </p>

                    <p>
                        Selected Status:
                        {" "}
                        {complaint.selectedStatus}
                    </p>

                    <select
                        value={complaint.selectedStatus}
                        onChange={(e) =>
                            updateStatus(
                                complaint.id,
                                e.target.value
                            )
                        }
                    >
                        <option value="Pending">
                            Pending
                        </option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Resolved">
                            Resolved
                        </option>

                        <option value="Rejected">
                            Rejected
                        </option>

                    </select>

                    <br /><br />

                    <textarea
                        rows="3"
                        placeholder="Officer Remarks"
                    />

                    <br /><br />

                    <button
                        onClick={() =>
                            saveComplaint(
                                complaint.id
                            )
                        }
                    >
                        Update Complaint
                    </button>

                </div>
            ))}

        </OfficerLayout>
    );
}

export default ManageComplaintsPage;