const express = require("express");
const app = express();
app.use(express.json());

const db = require('./src/db.js');
db.dbInitializer();
const routers = require('./src/routers/user.routes.js');
const userprofileroutes = require('./src/routers/userprofile.routes.js');

app.use("/user", routers);
app.use("./profile", userprofileroutes)

app.listen(4000, () => {
    console.log('server is running.....')
})