import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [role, setRole] = useState("");
    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword,
        setShowPassword] =
        useState(false);

    const handleLogin =
    async () => {

        if (
            !email ||
            !password ||
            !role
        ) {

            alert(
                "Please fill all fields"
            );

            return;
        }

        if (
            role === "citizen"
        ) {

            try {

                const response =
                    await fetch(
                        "http://localhost:5000/api/citizens/login",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body:
                                JSON.stringify({
                                    email,
                                    password,
                                }),
                        }
                    );

                const data =
                    await response.json();

                if (
                    response.ok
                ) {

                    alert(
                        data.message
                    );

                    navigate(
                        "/citizen/dashboard"
                    );

                } else {

                    alert(
                        data.message
                    );
                }

            } catch (
                error
            ) {

                console.log(
                    error
                );

                alert(
                    "Login Failed"
                );
            }
        }

        else if (
    role === "officer"
) {

    try {

        const response =
            await fetch(
                "http://localhost:5000/api/officers/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body:
                        JSON.stringify({
                            email,
                            password,
                        }),
                }
            );

        const data =
            await response.json();

        if (
            response.ok
        ) {

            alert(
                data.message
            );

            navigate(
                "/officer/dashboard"
            );

        } else {

            alert(
                data.message
            );
        }

    } catch (
        error
    ) {

        console.log(
            error
        );

        alert(
            "Login Failed"
        );
    }
}
        else if (
    role === "admin"
) {

    try {

        const response =
            await fetch(
                "http://localhost:5000/api/admin/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body:
                        JSON.stringify({
                            email,
                            password,
                        }),
                }
            );

        const data =
            await response.json();

        if (
            response.ok
        ) {

            alert(
                data.message
            );

            navigate(
                "/admin/dashboard"
            );

        } else {

            alert(
                data.message
            );
        }

    } catch (
        error
    ) {

        console.log(
            error
        );

        alert(
            "Login Failed"
        );
    }
}
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Login</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <br /><br />

            <input
                type={
                    showPassword
                        ? "text"
                        : "password"
                }
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
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

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="">
                    Select Role
                </option>

                <option value="citizen">
                    Citizen
                </option>

                <option value="officer">
                    Panchayat Officer
                </option>

                <option value="admin">
                    Admin
                </option>
            </select>

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>
            <br />
            <br />

            <Link to="/forgot-password">
                Forgot Password?
            </Link>

            <p>
                Don't have an account?
            </p>
            <a href="/register">
                Register Here
            </a>
        </div>
    );
}

export default LoginPage;