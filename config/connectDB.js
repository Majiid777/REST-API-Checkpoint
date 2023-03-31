const mongoose =require("mongoose");


const connect = async () => {
    try {
       await mongoose.connect(process.env.db);
       console.log("Database is connected");
    } catch (error) {
        console.log(error)
    }
};
module.exports = connect;