const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;
var Shoe = require('./../database/index.js')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/shoes/shoe', function (req, res) {;
  console.log(Shoe);
  Shoe.Shoe.find(function (err, repos) {
    if (err) return next(err);
    res.json(repos);
  });
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
