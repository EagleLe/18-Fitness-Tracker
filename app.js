const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");
var port = process.env.PORT || 8000;
const url = "mongodb+srv://EagleLamle:eaglelamle@cluster0.nwthj.mongodb.net/workout?retryWrites=true&w=majority";

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose
.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false
})
.then(() => console.log('Database connected.'))
.catch(err => console.log(err));
//mongoose.connect(url, { useNewUrlParser: true });
app.use(require('./routes/workoutAPI'));
//require("./routes/workoutApi")(app);

// const con = mongoose.connection;

// con.on('open', function() {
// console.log("connected");
// });
app.listen(port, function() {
console.log("App is running on port " + port);
});