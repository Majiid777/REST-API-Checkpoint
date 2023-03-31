const express = require("express");
const connect = require("./config/connectDB");
const User = require("./models/User");
const app = express();
require("dotenv").config({ path: "./config/.env" });


//Establish Database connection
connect();

//Conver data to json format
app.use(express.json());

//CRUD
//
//Add users
app.post("/Add", async(req, res) => {
    const{ fullName, phone, email } = req.body;
    try {
        const newPerson = new User({
            fullName,
            email,
            phone,
        });
        await newPerson.save();
        res.send(newPerson);
    }catch(error){
        console.log(error);
    }
});


//getting users
app.get("/get", async(req, res) => {
    try {
        const allPersons = await User.find();
        res.send(allPersons);
    }catch(error){
        console.log(error);
    }
});


//getting a specific user
app.get("/get/:id", async(req, res) => {
    try {
        const specificPerson = await User.findById(req.params.id);
        res.send(specificPerson);
    }catch(error){
        console.log(error);
    }
});

//updating user
app.put("/update/:id", async(req, res) => {
    try {
        const editedPerson = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send(editedPerson);
    }catch(error){
        console.log(error);
    }
});

//delete user
app.delete("/delete/:id", async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("User Deleted");
    }catch(error){
        console.log(error);
    }
});

PORT = process.env.PORT || 5000;

app.listen(PORT,err=>
    err? console.error(err):console.log(`server running on port ${PORT}`))