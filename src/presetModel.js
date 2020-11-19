
var mongoose = require('mongoose');

var presetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Preset = module.exports = mongoose.model('preset', presetSchema);
module.exports.get = function (callback, limit) {
   Preset.find(callback).limit(limit); 
}