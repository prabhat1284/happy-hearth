var express = require("express");
var bodyparser = require("body-parser");
var http = require("http");
var path = require("path");
var fileupload = require("express-fileupload");
var cors = require("cors");

var indexRouter = require("./server/controller/indexRouter");
var adminRouter = require("./server/controller/adminRouter");
var userRouter = require("./server/controller/userRouter");
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist/myproject")));
app.use(fileupload());

app.use("/webapi", indexRouter);
app.use("/webapiadmin", adminRouter);
app.use("/webapiuser", userRouter);

app.get("*", function (req, res) {
  var mypath = path.join(__dirname, "dist/myproject/index.html");
  res.sendFile(mypath);
});

http.createServer(app).listen(4000, (err, result) => {
  if (err) console.log(err);
  else console.log("SERVER RUNNING....");
});
