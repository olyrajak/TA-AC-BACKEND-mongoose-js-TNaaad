var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleSchema = new Schema({
    title: { type: string, require: true },
    description: { type: string },

});

module.exports = mongoose.model("Article", articleSchema);