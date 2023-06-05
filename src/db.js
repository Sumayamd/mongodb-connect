const mongoose = require("mongoose");

//mongodb://localhost:27017


//mongoose.connect('mongodb+srv://fullstack:institute@practise.mtxdgew.mangodb.net/my-project')

function dbInitializer() {
    mongoose
        .connect(`mongodb+srv://fullstack:institute@practise.mtxdgew.mangodb.net/my-project`)
        .then(() => console.log(`MANGODB connected`))
        .catch(error => console.error(error))
}

module.exports = {
    dbInitializer}