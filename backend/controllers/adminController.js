const db =
    require("../config/db");

const loginAdmin =
    (req, res) => {

        let {
            email,
            password
        } = req.body;

        if (
            !email ||
            !password
        ) {

            return res
                .status(400)
                .json({
                    message:
                        "All fields are required"
                });
        }

        email =
            email.trim();

        const sql =
            "SELECT * FROM admins WHERE email = ?";

        db.query(
            sql,
            [email],
            (err, result) => {

                if (err) {

                    return res
                        .status(500)
                        .json({
                            message:
                                "Server Error"
                        });
                }

                if (
                    result.length === 0
                ) {

                    return res
                        .status(404)
                        .json({
                            message:
                                "Admin Not Found"
                        });
                }

                if (
                    result[0].password !==
                    password
                ) {

                    return res
                        .status(401)
                        .json({
                            message:
                                "Incorrect Password"
                        });
                }

                res
                    .status(200)
                    .json({
                        message:
                            "Login Successful",
                        admin:
                            result[0]
                    });
            }
        );
    };

module.exports = {
    loginAdmin
};