const express = require('express');
const route = require('./routes/route.js');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://Wasim:sjdwsm86@mycluster.hazwc4e.mongodb.net/BlockChain")
  .then(() => console.log('mongodb is connected'))
  .catch((err) => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port' + (process.env.PORT || 3000))

});