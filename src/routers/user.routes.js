const express = require("express");
const routers = express.Router();
const controller = require("../controllers/user.controller.js");

routers
    .get('/', (req, res) => {
        return controller.getAllUsers(req, res);
    });
routers
    .post('/', (req, res) => {
        return controller.createUser(req, res);
    });
routers
    .put('/', (req, res) => res.send("User put response"));
routers
    .delete('/', (req, res) => res.send("User delete response"));


module.exports = routers; 