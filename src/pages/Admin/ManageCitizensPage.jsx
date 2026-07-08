import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function ManageCitizensPage() {
    const initialCitizens = [

        {
            id: 1,
            name: "Ravi Kumar",
            village: "Rampur",
            mobile: "9876543210",
            status: "Active",
        },

        {
            id: 2,
            name: "Suresh Patel",
            village: "Shiv Nagar",
            mobile: "9876543211",
            status: "Active",
        },

        {
            id: 3,
            name: "Amit Singh",
            village: "Lakshmi Pur",
            mobile: "9876543212",
            status: "Inactive",
        },

    ];
    const [citizens, setCitizens] =
        useState(initialCitizens);

    const toggleStatus = (id) => {

        const updatedCitizens =
            citizens.map((citizen) =>

                citizen.id === id

                    ? {
                        ...citizen,
                        status:
                            citizen.status ===
                                "Active"

                                ? "Inactive"

                                : "Active",
                    }

                    : citizen
            );

        setCitizens(updatedCitizens);
    };

    return (

        <AdminLayout>

            <h1>
                Manage Citizens
            </h1>
            <p>
                Total Citizens:
                {citizens.length}
            </p>
            <p>
                            Active Citizens:
                            {
                                citizens.filter(
                                    (c) =>
                                        c.status ===
                                        "Active"
                                ).length
                            }
                        </p>

                        <p>
                            Inactive Citizens:
                            {
                                citizens.filter(
                                    (c) =>
                                        c.status ===
                                        "Inactive"
                                ).length
                            }
                        </p>
            {
                citizens.map((citizen) => (

                    <div
                        key={citizen.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                        }}
                    >

                        <h3>
                            {citizen.name}
                        </h3>

                        <p>
                            Village:
                            {citizen.village}
                        </p>

                        <p>
                            Mobile:
                            {citizen.mobile}
                        </p>

                        <p>
                            Status:
                            {citizen.status}
                        </p>
                        <button
                            onClick={() =>
                                toggleStatus(
                                    citizen.id
                                )
                            }
                        >
                            {
                                citizen.status ===
                                    "Active"

                                    ? "Deactivate"

                                    : "Activate"
                            }
                        </button>

                    </div>

                ))
            }

        </AdminLayout>

    );
}

export default ManageCitizensPage;