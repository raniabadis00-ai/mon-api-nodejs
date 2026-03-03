require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;


mongoose.connect(process.env.DATABASE_URL)
    .then(_result => {
        console.log("connected to mongodb");
    })
    .catch(err => console.log(err));


const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

app.use(express.json());

app.use("/", indexRouter);

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
