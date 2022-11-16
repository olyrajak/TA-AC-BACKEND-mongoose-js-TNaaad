const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    name: { type: String, required: true },
    
    email: { type: String, required: true, lowercase: true, unique: true },
    
    age: { type: Number, default: 0 },
}, {
    
    timestamps: true,
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;
