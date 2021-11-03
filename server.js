//install packages
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//set port
const PORT = process.env.PORT || 3001;

const app = express();

//use logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fittrack'  
  );

//require('./seeders/seed')

//use routes
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'))
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname,"public"));

});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})