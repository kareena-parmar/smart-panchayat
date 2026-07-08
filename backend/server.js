const express = require("express");
require("./config/db");
const citizenRoutes =
    require("./routes/citizenRoutes");
const officerRoutes =
    require(
        "./routes/officerRoutes"
    );
const adminRoutes =
    require(
        "./routes/adminRoutes"
    );

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/citizens",
    citizenRoutes
);
app.use(
    "/api/officers",
    officerRoutes
);
app.use(
    "/api/admin",
    adminRoutes
);
app.get("/", (req, res) => {

    res.send(
        "Smart Panchayat Backend Running"
    );

});

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
