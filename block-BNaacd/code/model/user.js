var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    name: string,
    age: Number,
    email: {
        type: string,
        lowercase: true
    },
    age: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});