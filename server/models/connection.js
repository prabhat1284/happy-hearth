var mongoose=require("mongoose")
var url="mongodb://localhost:27017/myproject"
mongoose.connect(url);
var db=mongoose.connection
console.log("SUCCESSULLY CONNECTED TO MONGODB!!!");
module.exports=db;