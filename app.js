var express    = require("express");
var path       = require("path");
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var firebase   = require("firebase");
var connection = mongoose.connect("mongodb://localhost/salesmanData");

var app = express();

var staticFolder = path.join(__dirname,"./www/");
app.use(express.static(staticFolder));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var salesmanLogin = mongoose.Schema({
   
})



app.post("/login",function(req,res){
    
})





app.listen(3000,function(){
    console.log("app started !")
})