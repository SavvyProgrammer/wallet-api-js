require('dotenv').config();
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    userRoutes = require("./routes/user");
const uri = process.env.DATABASE_URL;


//Connect to database

const options = {
    dbName: "wallet_db",
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect(uri, options).then(
    () => {
        console.log("connected to db");
    },
    err => {
        console.log(err)
    }
);


process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

//using user route
app.use('/api/user', userRoutes);

//setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is live on port 8080");
})