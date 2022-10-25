const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");


mongoose.connect(
    "mongodb://localhost/sample", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

const app = express();
app.use(express.json());

app.post("/createusers", (req, res) => {
    User.create(req.body, (err, users) => {
        console.log(err);
        res.json(users);
    });
});

app.get("/findusers", (req, res) => {
    User.find({}, (err, users) => {
        console.log(err);
        res.json(users);
    });
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    //   User.find({ _id: id }, (err, users) => {
    //    console.log(err);
    // res.json(users);
    //   });

    //   User.findOne({ _id: id }, (err, users) => {
    //    console.log(err);
    // res.json(users);
    //   });

    User.findById(id, (err, users) => {
        console.log(err);
        res.json(users);
    });
});

app.put("/users/:id", (req, res) => {
    let id = req.params.id;

    //   User.update({ _id: id }, req.body, { new: true }, (err, users) => {
    //    console.log(err);
    // res.json(users);
    //   });
    //   User.updateOne({ _id: id }, req.body, { new: true }, (err, users) => {
    // console.log(err);
    // res.json(users);
    //   });

    User.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
        console.log(err);
        res.json(users);
    });
});

app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, users) => {
        console.log(err);
        res.json(users);
    });
});
app.listen(3800, () => {
    console.log('Server is running on port 3800');
});