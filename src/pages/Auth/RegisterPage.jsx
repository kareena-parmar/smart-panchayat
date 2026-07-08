import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
    const navigate = useNavigate();
    const [showPassword,
        setShowPassword] =
        useState(false);

    const [
        showConfirmPassword,
        setShowConfirmPassword
    ] = useState(false);
    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [mobile, setMobile] =
        useState("");

    const [village, setVillage] =
        useState("");

    const [ward, setWard] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [
        confirmPassword,
        setConfirmPassword
    ] = useState("");

    const handleRegister =
        async () => {
            if (
                !name ||
                !email ||
                !mobile ||
                !village ||
                !ward ||
                !password ||
                !confirmPassword
            ) {
                alert(
                    "Please fill all fields"
                );
                return;
            }
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailPattern.test(email)
            ) {
                alert(
                    "Please enter a valid email address"
                );
                return;
            }
            const mobilePattern =
                /^[0-9]{10}$/;

            if (
                !mobilePattern.test(mobile)
            ) {
                alert(
                    "Mobile number must contain exactly 10 digits"
                );
                return;
            }
            const passwordPattern =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

            if (
                !passwordPattern.test(password)
            ) {
                alert(
                    "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and minimum 6 characters"
                );
                return;
            }

            if (
                password !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match"
                );

                return;
            }

            try {

                const response =
                    await fetch(
                        "http://localhost:5000/api/citizens/register",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body:
                                JSON.stringify({
                                    name,
                                    mobile,
                                    email,
                                    password,
                                    village,
                                    ward,
                                }),
                        }
                    );

                const data =
                    await response.json();

                if (response.ok) {

    alert(data.message);

    navigate("/login");

} else {

    alert(data.message);
}

            } catch (error) {

                console.log(error);

                alert(
                    "Registration Failed"
                );
            }
        };
    return (
        <div style={{ padding: "20px" }}>

            <h1>Citizen Registration</h1>

            <input
                type="text"
                placeholder="Full Name"
                value={name}
                required
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Phone Number"
                value={mobile}
                required
                onChange={(e) =>
                    setMobile(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Village"
                value={village}
                required
                onChange={(e) =>
                    setVillage(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Ward Number"
                value={ward}
                required
                onChange={(e) =>
                    setWard(e.target.value)
                }
            />

            <br /><br />

            <input
                type={
                    showPassword
                        ? "text"
                        : "password"
                }
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <button
                type="button"
                onClick={() =>
                    setShowPassword(
                        !showPassword
                    )
                }
            >
                {
                    showPassword
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
            <p
                style={{
                    color: "gray",
                    fontSize: "12px"
                }}
            >
                Password must contain:
                <br />
                • 1 Uppercase Letter
                <br />
                • 1 Lowercase Letter
                <br />
                • 1 Number
                <br />
                • 1 Special Character
                <br />
                • Minimum 6 Characters
            </p>


            <br /><br />

            <button
                onClick={
                    handleRegister
                }
            >
                Register
            </button>
            <p>
                Already have an account?
            </p>
            <a href="/login">
                Login Here
            </a>

        </div>
    );
}

export default RegisterPage;