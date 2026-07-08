const express =
    require("express");

const router =
    express.Router();

const {
    registerCitizen, loginCitizen, resetPassword, checkEmail
} = require(
    "../controllers/citizenController"
);

router.post(
    "/register",
    registerCitizen
);
router.post(
    "/login",
    loginCitizen
);
router.post(
    "/reset-password",
    resetPassword
);
router.post(
    "/check-email",
    checkEmail
);

module.exports =
    router;