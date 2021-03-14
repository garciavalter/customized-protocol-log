const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const protocolSchema = new Schema({
    protocol: Number,
    register: String,
    name: String
});

const Protocols = mongoose.model('protocol', protocolSchema);

module.exports = Protocols;