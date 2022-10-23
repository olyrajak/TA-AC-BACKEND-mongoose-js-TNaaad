var mongoose = require('mongoose');
var schema = mongoose.Schema;

var addressSchema = new Schema({
    city: string,
    village: string,
    state: string,
    state: string,
    pin: Number,
    marks: [number],
    favorites: [string],
    user: schema.Types.ObjectId

}, { timestamps: true })