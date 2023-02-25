const express = require("express");

const PORT = process.env.PORT || 5000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World! I am getting this response from backend");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));