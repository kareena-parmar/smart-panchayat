import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
    const navigate =
        useNavigate();

    const [contact, setContact] =
        useState("");

    const [otp, setOtp] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");
    const [showNewPassword,
        setShowNewPassword] =
        useState(false);

    const [showConfirmPassword,
        setShowConfirmPassword] =
        useState(false);

    const [otpSent, setOtpSent] =
        useState(false);

    const [otpVerified, setOtpVerified] =
        useState(false);

    const sendOtp =
        async () => {

            if (!contact) {

                alert(
                    "Please enter Email"
                );

                return;
            }

            try {

                const response =
                    await fetch(
                        "http://localhost:5000/api/citizens/check-email",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body:
                                JSON.stringify({
                                    email:
                                        contact,
                                }),
                        }
                    );

                const data =
                    await response.json();

                if (
                    response.ok
                ) {

                    setOtpSent(true);

                    alert(
                        "OTP Sent Successfully\nDemo OTP: 123456"
                    );

                } else {

                    alert(
                        data.message
                    );
                }

            } catch (error) {

                alert(
                    "Server Error"
                );
            }
        };

    const verifyOtp = () => {

        if (otp === "123456") {

            setOtpVerified(true);

            alert(
                "OTP Verified Successfully"
            );

        } else {

            alert(
                "Invalid OTP"
            );
        }
    };

    const updatePassword =
        async () => {

            if (
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

            const passwordPattern =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

            if (
                !passwordPattern.test(
                    newPassword
                )
            ) {

                alert(
                    "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and minimum 6 characters"
                );

                return;
            }

            try {

                const response =
                    await fetch(
                        "http://localhost:5000/api/citizens/reset-password",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body:
                                JSON.stringify({
                                    email:
                                        contact,
                                    password:
                                        newPassword,
                                }),
                        }
                    );

                const data =
                    await response.json();

                alert(
                    data.message
                );

                if (
                    response.ok
                ) {

                    navigate(
                        "/login"
                    );
                }

            } catch (error) {

                alert(
                    "Password Reset Failed"
                );
            }
        };

    return (

        <div
            style={{
                maxWidth: "500px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid gray",
            }}
        >

            <h1>
                Forgot Password
            </h1>

            <input
                type="text"
                placeholder="Enter Email or Mobile Number"
                value={contact}
                onChange={(e) =>
                    setContact(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <button
                onClick={sendOtp}
            >
                Send OTP
            </button>

            {
                otpSent && (

                    <>
                        <br /><br />

                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) =>
                                setOtp(
                                    e.target.value
                                )
                            }
                        />

                        <br /><br />

                        <button
                            onClick={verifyOtp}
                        >
                            Verify OTP
                        </button>
                    </>

                )
            }

            {
                otpVerified && (

                    <>
                        <br /><br />

                        <input
                            type={
                                showNewPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowNewPassword(
                                    !showNewPassword
                                )
                            }
                        >
                            {
                                showNewPassword
                                    ? "Hide"
                                    : "Show"
                            }
                        </button>

                        <br /><br />

                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                        >
                            {
                                showConfirmPassword
                                    ? "Hide"
                                    : "Show"
                            }
                        </button>

                        <br /><br />

                        <button
                            onClick={
                                updatePassword
                            }
                        >
                            Update Password
                        </button>
                    </>

                )
            }

        </div>
    );
}

export default ForgotPasswordPage;