const db =
    require("../config/db");

const loginOfficer =
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

        email = email.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(
                email
            )
        ) {

            return res
                .status(400)
                .json({
                    message:
                        "Invalid Email Format"
                });
        }

        const sql =
            "SELECT * FROM officers WHERE email = ?";

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
                                "Officer Not Found"
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
                        officer:
                            result[0]
                    });
            }
        );
    };
const addOfficer = (
    req,
    res
) => {

    let {
        name,
        email,
        mobile,
        designation,
        password
    } = req.body;

    if (
        !name ||
        !email ||
        !mobile ||
        !designation ||
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

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailPattern.test(
            email
        )
    ) {

        return res
            .status(400)
            .json({
                message:
                    "Invalid Email Format"
            });
    }

    if (
        mobile.length !== 10
    ) {

        return res
            .status(400)
            .json({
                message:
                    "Mobile Number must contain 10 digits"
            });
    }

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (
        !passwordPattern.test(
            password
        )
    ) {

        return res
            .status(400)
            .json({
                message:
                    "Password is not strong enough"
            });
    }
    const checkEmailSql =
        "SELECT * FROM officers WHERE email = ?";

    db.query(
        checkEmailSql,
        [email],
        (err, existingOfficer) => {

            if (
                existingOfficer.length > 0
            ) {

                return res
                    .status(400)
                    .json({
                        message:
                            "Email already exists"
                    });
            }

            // INSERT query goes here
        }
    );

    const sql = `
        INSERT INTO officers
        (
            name,
            email,
            mobile,
            designation,
            password
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            email,
            mobile,
            designation,
            password
        ],
        (err, result) => {

            if (err) {

                return res
                    .status(500)
                    .json({
                        message:
                            "Officer Creation Failed"
                    });
            }

            res
                .status(201)
                .json({
                    message:
                        "Officer Added Successfully"
                });
        }
    );
};
const getAllOfficers = (
    req,
    res
) => {

    const sql =
        "SELECT * FROM officers";

    db.query(
        sql,
        (err, result) => {

            if (err) {

                return res
                    .status(500)
                    .json({
                        message:
                            "Failed to Fetch Officers"
                    });
            }

            res
                .status(200)
                .json(result);
        }
    );
};
const deleteOfficer = (
    req,
    res
) => {

    const { id } =
        req.params;

    const sql =
        "DELETE FROM officers WHERE id = ?";

    db.query(
        sql,
        [id],
        (err, result) => {

            if (err) {

                return res
                    .status(500)
                    .json({
                        message:
                            "Failed to Delete Officer"
                    });
            }

            res
                .status(200)
                .json({
                    message:
                        "Officer Deleted Successfully"
                });
        }
    );
};
const updateOfficer = (
    req,
    res
) => {

    const { id } =
        req.params;

    const {
        name,
        email,
        mobile,
        designation
    } = req.body;

    const sql = `
        UPDATE officers
        SET
            name = ?,
            email = ?,
            mobile = ?,
            designation = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            name,
            email,
            mobile,
            designation,
            id
        ],
        (err, result) => {

            if (err) {

                return res
                    .status(500)
                    .json({
                        message:
                            "Update Failed"
                    });
            }

            res
                .status(200)
                .json({
                    message:
                        "Officer Updated Successfully"
                });
        }
    );
};

module.exports = {
    loginOfficer, addOfficer, getAllOfficers, deleteOfficer, updateOfficer
};