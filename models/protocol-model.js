const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const protocolSchema = new Schema({
    protocol: String,
    register: String,
    name: String
});

const Protocol = mongoose.model('protocol', protocolSchema);

module.exports = Protocol;