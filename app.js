var express = require("express");
var app = express();

var request = require("request");
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds =[
        { name: "Pahadi Wala", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c178a0eab7b9_340.jpg"},
        { name: "Choti Pahadi", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
        { name: "Bina Pahadi", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f3c178a0eab7b9_340.jpg"}
        ];

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
   res.render("campgrounds", {campgrounds : campgrounds}); 
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = { name: name, image: image};
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("newCamp");
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});