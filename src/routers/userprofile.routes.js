const express = require("express");
const userprofileroutes = express.Router();

userprofileroutes
    .get('/', (req, res) => res.send("User profile get response"));
userprofileroutes
    .post('/', (req, res) => res.send("User profile post response"));
userprofileroutes
    .put('/', (req, res) => res.send("User profile put response"));
userprofileroutes
    .delete('/', (req, res) => res.send("User profile delete response"));


module.exports = userprofileroutes; 