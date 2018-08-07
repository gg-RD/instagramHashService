const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var mongoUrl = 'mongodb://database/instagram';

mongoose.connect(mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});

var db = mongoose.connection;

let shoeSchema = mongoose.Schema({
  insta_user: String,
  likes: Number,
  image_url: String,
  name_shoe:String,
  user_image_url: String,
  created_at: Number,
});

shoeSchema.plugin(AutoIncrement, {inc_field: 'id'});
let Shoe = mongoose.model('Shoe', shoeSchema);

module.exports.Shoe = Shoe;
