var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleSchema = new Schema({
    title: string,
    description: Number,
    type: string
});