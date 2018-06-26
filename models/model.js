/**
 *
 * @type {*|Mongoose}
 */

const mongoose = require('mongoose');
const url = require('url');

mongoose.connect('mongodb://localhost:27017/cspTest', {useMongoClient: true});
mongoose.set('debug', true);

let cspSchema = new mongoose.Schema({
    "domain": {
        type: String
    },
    "document-uri": {
        type: String
    },
    "blocked-uri": {
        type: String
    },
    "violated-directive": {
        type: String
    },
    "original-policy": {
        type: String
    },
    "date": {
        type: String
    }
});

module.exports = mongoose.model('cspReport', cspSchema);


