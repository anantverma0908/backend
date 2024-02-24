const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.json());
const dbURI = "mongodb+srv://bhatiji780780:AkadBakad@cluster0.9gvmkm7.mongodb.net/server";

mongoose.connect(dbURI).then(() => {
    console.log("Mongo db is connected");
}).catch((err) => {
    console.log("Error in mongo db connection", err.message);
});
app.use('/', routes);

app.listen(3000, () => {
    console.log("app listen at port 3000");
});