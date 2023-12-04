const mongoose = require("mongoose");

const startMongo = async () => {
    mongoose.connect("mongodb+srv://remerc:5MwukqQX5dAsx45r@mongodb-login-practice.dgiveww.mongodb.net/user-auth?retryWrites=true&w=majority")
    .then(() => {console.log("Connected to MongoDB")})
    .catch((error)=>{"Couldn't connect to MongoDB".error});
}

module.exports = startMongo;