// 1. import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://diyaann28:Diya@cluster0.7sqvorj.mongodb.net/OpenDb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error)
})