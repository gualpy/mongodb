'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutoSchema = Schema({
    marca:String,
    modelo:String,
    color:String,
    motor:String
});
module.exports=mongoose.model('Auto', AutoSchema);