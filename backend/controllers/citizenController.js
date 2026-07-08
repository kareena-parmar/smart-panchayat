const db = require("../config/db");



const registerCitizen = (
    req,
    res
) => {

    const {
        name,
        mobile,
        email,
        password,
        village,
        ward
    } = req.body;
    const checkEmailQuery =
        "SELECT * FROM citizens WHERE email = ?";

    const sql = `
        INSERT INTO citizens
        (
            name,
            mobile,
            email,
            password,
            village,
            ward
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
    checkEmailQuery,
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
            result.length > 0
        ) {

            return res
                .status(400)
                .json({
                    message:
                        "Email already registered"
                });
        }

        db.query(
            sql,
            [
                name,
                mobile,
                email,
                password,
                village,
                ward
            ],
            (err, insertResult) => {

                if (err) {

                    return res
                        .status(500)
                        .json({
                            message:
                                "Registration Failed"
                        });
                }

                res
                    .status(201)
                    .json({
                        message:
                            "Citizen Registered Successfully"
                    });
            }
        );
    }
);
};



const loginCitizen = (
    req,
    res
) => {

    const {
        email,
        password
    } = req.body;

    const sql =
        "SELECT * FROM citizens WHERE email = ?";

    db.query(
        sql,
        [email],
        (err, result) => {

            if (err) {

                return res.status(500)
                    .json({
                        message:
                            "Server Error"
                    });
            }

            if (
                result.length === 0
            ) {

                return res.status(404)
                    .json({
                        message:
                            "Citizen Not Found"
                    });
            }

            if (
                result[0].password !==
                password
            ) {

                return res.status(401)
                    .json({
                        message:
                            "Incorrect Password"
                    });
            }

            res.status(200)
                .json({
                    message:
                        "Login Successful",
                    citizen:
                        result[0]
                });

        }
    );
};
const resetPassword = (
    req,
    res
) => {

    const {
        email,
        password
    } = req.body;

    const sql =
        `
        UPDATE citizens
        SET password = ?
        WHERE email = ?
        `;

    db.query(
        sql,
        [
            password,
            email
        ],
        (err, result) => {

            if (err) {

                return res
                    .status(500)
                    .json({
                        message:
                            "Password Reset Failed"
                    });
            }

            if (
                result.affectedRows === 0
            ) {

                return res
                    .status(404)
                    .json({
                        message:
                            "Email Not Registered"
                    });
            }

            res
                .status(200)
                .json({
                    message:
                        "Password Updated Successfully"
                });
        }
    );
};
const checkEmail = (
    req,
    res
) => {

    const { email } =
        req.body;

    const sql =
        "SELECT * FROM citizens WHERE email = ?";

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
                            "Email Not Registered"
                    });
            }

            res
                .status(200)
                .json({
                    message:
                        "Email Found"
                });
        }
    );
};
module.exports = {
    registerCitizen, loginCitizen, resetPassword, checkEmail
};