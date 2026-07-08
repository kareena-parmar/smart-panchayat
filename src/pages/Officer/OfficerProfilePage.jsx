import { useState } from "react";
import OfficerLayout from "../../layouts/OfficerLayout";


function OfficerProfilePage() {
    const [name, setName] =
        useState("Rajesh Sharma");

    const [designation, setDesignation] =
        useState("Panchayat Officer");

    const [department, setDepartment] =
        useState("Rural Development");

    const [email, setEmail] =
        useState("rajesh@gmail.com");

    const [mobile, setMobile] =
        useState("9876543210");

    const [currentPassword, setCurrentPassword] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [showPasswordSection,
        setShowPasswordSection] =
        useState(false);

    const [isEditing, setIsEditing] =
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
        <OfficerLayout>

            <h1>Officer Profile</h1>
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
                        isEditing ?

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />

                            :

                            name
                    }

                </p>
                <p>

                    <strong>Designation:</strong>

                    {
                        isEditing ?

                            <input
                                type="text"
                                value={designation}
                                onChange={(e) =>
                                    setDesignation(
                                        e.target.value
                                    )
                                }
                            />

                            :

                            designation
                    }

                </p>
                <p>

                    <strong>Department:</strong>

                    {
                        isEditing ?

                            <input
                                type="text"
                                value={department}
                                onChange={(e) =>
                                    setDepartment(
                                        e.target.value
                                    )
                                }
                            />

                            :

                            department
                    }

                </p>
                <p>

                    <strong>Email:</strong>

                    {
                        isEditing ?

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
                        isEditing ?

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
                {
                    !isEditing && (

                        <button
                            onClick={() =>
                                setIsEditing(true)
                            }
                        >
                            Edit Profile
                        </button>

                    )
                }
                {
                    isEditing && (

                        <button
                            onClick={() => {

                                setIsEditing(false);

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
                <h2>
                    Work Statistics
                </h2>
                <div
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        marginTop: "15px",
                    }}
                >

                    <p>
                        Complaints Managed: 15
                    </p>

                    <p>
                        Pending: 4
                    </p>

                    <p>
                        In Progress: 3
                    </p>

                    <p>
                        Resolved: 6
                    </p>

                    <p>
                        Rejected: 2
                    </p>

                </div>
            </div>

        </OfficerLayout>
    );
}

export default OfficerProfilePage;