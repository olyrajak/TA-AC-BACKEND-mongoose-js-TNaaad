const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var User = require("./user");
var Article = require("./article");
const userSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: User },
    article: { type: Schema.Types.ObjectId, ref: Article }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;