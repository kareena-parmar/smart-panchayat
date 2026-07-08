import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function ProfilePage() {
    const [name, setName] =
        useState("System Administrator");

    const [email, setEmail] =
        useState("admin@gmail.com");

    const [mobile, setMobile] =
        useState("9876543210");

    const [role, setRole] =
        useState("Administrator");

    const [editing, setEditing] =
        useState(false);


    const [currentPassword,
        setCurrentPassword] =
        useState("");

    const [newPassword,
        setNewPassword] =
        useState("");

    const [confirmPassword,
        setConfirmPassword] =
        useState("");
    const [showPasswordSection,
        setShowPasswordSection] =
        useState(false);


    const handlePasswordChange =
        () => {

            if (
                !currentPassword ||
                !newPassword ||
                !confirmPassword
            ) {

                alert(
                    "Please fill all fields"
                );

                return;
            }

            if (
                newPassword !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match"
                );

                return;
            }

            alert(
                "Password Updated Successfully"
            );

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            setShowPasswordSection(
                false
            );
        };


    return (

        <AdminLayout>

            <h1>
                Admin Profile
            </h1>
            <div
                style={{
                    border: "1px solid gray",
                    padding: "20px",
                    marginTop: "20px",
                }}
            >
                <p>

                    <strong>Name:</strong>

                    {
                        editing ?

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(
                                        e.target.value
                                    )
                                }
                            />

                            :

                            name

                    }

                </p>
                <p>

                    <strong>Email:</strong>

                    {
                        editing ?

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                            />

                            :

                            email

                    }

                </p>
                <p>

                    <strong>Mobile:</strong>

                    {
                        editing ?

                            <input
                                type="text"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value
                                    )
                                }
                            />

                            :

                            mobile

                    }

                </p>
                <p>

                    <strong>Role:</strong>

                    {role}

                </p>
                {
                    !editing && (

                        <button
                            onClick={() =>
                                setEditing(true)
                            }
                        >
                            Edit Profile
                        </button>

                    )
                }
                {
                    editing && (

                        <button
                            onClick={() => {

                                setEditing(false);

                                alert(
                                    "Profile Updated Successfully"
                                );

                            }}
                        >
                            Save Changes
                        </button>

                    )
                }
                <button
                    onClick={() =>
                        setShowPasswordSection(
                            !showPasswordSection
                        )
                    }
                >
                    Change Password
                </button>
                {
                    showPasswordSection && (

                        <div
                            style={{
                                marginTop: "20px",
                                border: "1px solid gray",
                                padding: "15px",
                            }}
                        >

                            <h3>
                                Change Password
                            </h3>

                            <input
                                type="password"
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(
                                        e.target.value
                                    )
                                }
                            />

                            <br /><br />

                            <input
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(
                                        e.target.value
                                    )
                                }
                            />

                            <br /><br />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                            />

                            <br /><br />

                            <button
                                onClick={
                                    handlePasswordChange
                                }
                            >
                                Update Password
                            </button>
                        </div>
                    )
                }
            </div>
            <h2>
                Admin Privileges
            </h2>

            <p>
                Manage Citizens
            </p>

            <p>
                Manage Officers
            </p>

            <p>
                Monitor Complaints
            </p>

            <p>
                Monitor Announcements
            </p>

            <p>
                Generate Reports
            </p>
        </AdminLayout>

    );
}

export default ProfilePage;