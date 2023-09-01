const mongoose = require('mongoose');

//Schema is like the blueprint, or structure 
const pokesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: false}
});

//model adds all the methods to the schema that we can use to edit our data
const Pokes = mongoose.model('Pokes', pokesSchema);

module.exports = Pokes;