var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoes');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var shoeSchema = mongoose.Schema({
  name: String,
  insta_user: String,
  likes: Number,
  image_url: String,
  });
  var Shoe = mongoose.model('Shoe', shoeSchema);
});
