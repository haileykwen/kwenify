const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

app.use("/src", express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});