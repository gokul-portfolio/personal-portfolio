const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Backend running macha 🔥");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
