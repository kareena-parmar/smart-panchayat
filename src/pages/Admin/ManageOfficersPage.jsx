import {
    useState,
    useEffect
} from "react";
import AdminLayout from "../../layouts/AdminLayout";

function ManageOfficersPage() {

    const [officers, setOfficers] =
        useState([]);
    const [name, setName] =
        useState("");
    const [editingId,
        setEditingId] =
        useState(null);

    const [email, setEmail] =
        useState("");

    const [mobile, setMobile] =
        useState("");

    const [designation,
        setDesignation] =
        useState("");

    const [password,
        setPassword] =
        useState("");
    const fetchOfficers =
        async () => {

            try {

                const response =
                    await fetch(
                        "http://localhost:5000/api/officers/all"
                    );

                const data =
                    await response.json();

                setOfficers(
                    data
                );

            } catch (error) {

                console.log(
                    error
                );
            }
        };

    const saveOfficer =
        async () => {

            if (
                !name ||
                !email ||
                !mobile ||
                !designation
            ) {

                alert(
                    "All fields are required"
                );

                return;
            }

            try {

                if (
                    editingId
                ) {

                    const response =
                        await fetch(
                            `http://localhost:5000/api/officers/update/${editingId}`,
                            {
                                method: "PUT",

                                headers: {
                                    "Content-Type":
                                        "application/json",
                                },

                                body:
                                    JSON.stringify({
                                        name,
                                        email,
                                        mobile,
                                        designation
                                    }),
                            }
                        );

                    const data =
                        await response.json();

                    alert(
                        data.message
                    );

                    setEditingId(
                        null
                    );

                } else {

                    const response =
                        await fetch(
                            "http://localhost:5000/api/officers/add",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json",
                                },

                                body:
                                    JSON.stringify({
                                        name,
                                        email,
                                        mobile,
                                        designation,
                                        password,
                                    }),
                            }
                        );

                    const data =
                        await response.json();

                    alert(
                        data.message
                    );
                }

                setName("");
                setEmail("");
                setMobile("");
                setDesignation("");
                setPassword("");

                fetchOfficers();

            } catch (error) {

                alert(
                    "Operation Failed"
                );
            }
        };

    const deleteOfficer =
        async (id) => {

            const confirmDelete =
                window.confirm(
                    "Are you sure?"
                );

            if (
                !confirmDelete
            ) {
                return;
            }

            try {

                const response =
                    await fetch(
                        `http://localhost:5000/api/officers/delete/${id}`,
                        {
                            method:
                                "DELETE",
                        }
                    );

                const data =
                    await response.json();

                alert(
                    data.message
                );

                fetchOfficers();

            } catch (error) {

                alert(
                    "Delete Failed"
                );
            }
        };
    useEffect(() => {

        fetchOfficers();

    }, []);
    

    return (

        <AdminLayout>

            <h1>
                Manage Officers
            </h1>
            <h2>
                Add Officer
            </h2>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) =>
                    setMobile(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) =>
                    setDesignation(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <button
                onClick={saveOfficer}
            >
                {
                    editingId
                        ? "Update Officer"
                        : "Add Officer"
                }
            </button>

            <hr />
            <p>
                Total Officers:
                {officers.length}
            </p>

            <p>
                Active Officers:
                {
                    officers.filter(
                        (o) =>
                            o.status === "Active"
                    ).length
                }
            </p>

            <p>
                Inactive Officers:
                {
                    officers.filter(
                        (o) =>
                            o.status === "Inactive"
                    ).length
                }
            </p>
            {
                officers.map((officer) => (

                    <div
                        key={officer.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                        }}
                    >

                        <h3>
                            {officer.name}
                        </h3>

                        <p>
                            Designation:
                            {officer.designation}
                        </p>

                        <p>
                            Department:
                            N/A
                        </p>

                        <p>
                            Mobile:
                            {officer.mobile}
                        </p>

                        <p>
                            Status:
                            Active
                        </p>
                        <button
                            onClick={() => {

                                setEditingId(
                                    officer.id
                                );

                                setName(
                                    officer.name
                                );

                                setEmail(
                                    officer.email
                                );

                                setMobile(
                                    officer.mobile
                                );

                                setDesignation(
                                    officer.designation
                                );
                            }}
                        >
                            Edit Officer
                        </button>
                        <button
                            onClick={() =>
                                deleteOfficer(
                                    officer.id
                                )
                            }
                        >
                            Delete Officer
                        </button>



                    </div>


                ))
            }
            <h2>
                Officer Overview
            </h2>

            <p>
                Officers handle complaints,
                announcements and citizen
                services.
            </p>

        </AdminLayout>

    );
}

export default ManageOfficersPage;