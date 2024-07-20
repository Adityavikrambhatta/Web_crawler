const express = require("express");
const taskRouter = express.Router();
const path = require("path");
const User = require(path.join("..", "models", "user.js"));

taskRouter.get("/:id", (req, res) => {
    if (req.user && req.user.role == "user") {
        var { id } = req.params;
        Event.findOne({ _id: id })
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(500).send("Unable to find event");
            });
    } else {
        res.status(403).send("Unauthorized to perform this action.");
    }
});

module.exports = taskRouter;
