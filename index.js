const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const players = require('./routes/players');
const config = require('./config');

const app = express();
const port = process.env.PORT || 4000;

const dbConnString = config.DB;
const db = mongoose.connect(dbConnString, { useNewUrlParser: true })
  .catch(e => console.log(e.message));

//Set the COR header to allow cross domain
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});
// setting body parser middleware 
app.use(bodyParser.json());
// API routes
app.use('/api', players);

// Running the server
app.listen(port, () => {
	console.log(`Listening on new: http://localhost:${port}`)
})

module.exports = app; //for testing