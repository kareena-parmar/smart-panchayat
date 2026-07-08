const express =
    require("express");

const router =
    express.Router();

const {
    loginOfficer, addOfficer, getAllOfficers, deleteOfficer, updateOfficer
} =
    require(
        "../controllers/officerController"
    );

router.post(
    "/login",
    loginOfficer
);
router.post(
    "/add",
    addOfficer
);
router.get(
    "/all",
    getAllOfficers
);
router.delete(
    "/delete/:id",
    deleteOfficer
);
router.put(
    "/update/:id",
    updateOfficer
);

module.exports =
    router;