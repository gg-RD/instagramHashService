
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://localhost/shoes');

var db = mongoose.connection;

let shoeSchema = mongoose.Schema({
  insta_user: String,
  likes: Number,
  image_url: String,
  name_shoe:String,
});

shoeSchema.plugin(AutoIncrement, {inc_field: 'id'});
let Shoe = mongoose.model('Shoe', shoeSchema);


module.exports.Shoe = Shoe;