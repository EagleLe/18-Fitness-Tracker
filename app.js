const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");
const url = "mongodb://localhost/workout";

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false });
app.use(require('./routes/workoutApi'));
//require("./routes/workoutApi")(app);

// const con = mongoose.connection;

// con.on('open', function() {
//     console.log("connected");
// });
app.listen(5000, () => {
    console.log('App running');
});