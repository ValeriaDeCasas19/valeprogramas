const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Datos = new Schema({
    producto: String,
    precio: String,
    iva: String
});

module.exports = mongoose.model('datos', Datos);