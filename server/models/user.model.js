const mongoose = require("mongoose");

const NewUserSchema = new mongoose.Schema({
    email: { type: String },
    lastName: { type: String },
    firstName: { type: String },
    address: { type: String },
    city: { type: String },
    stateCode: { type: String },
    zip: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
},
    { timestamps: true }
);

const User = mongoose.model("User", NewUserSchema);

module.exports = User;