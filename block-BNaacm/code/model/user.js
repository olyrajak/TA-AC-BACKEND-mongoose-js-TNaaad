var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: string, require: true },
    age: { type: Number, minlength: 18, maxlength: 30 },
    email: { type: string, lowercase: true, trim: true, match: /@/ },
    password: { type: string, minlength: 5, maxlength: 15 }
}, {
    timestamps: true
});
module.exports = mongoose.model("User", userSchema);