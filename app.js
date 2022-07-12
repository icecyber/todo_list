const express = require("express");
const bodyParser = require('body-parser');

const app = express();

let items = [];

var ejs = require("ejs");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/" , function(req, res){

    let dateOptions = {   
        day: 'numeric',
        month: 'long', 
        year: 'numeric'
    };
    let dates = new Date().toLocaleDateString('en-ZA', dateOptions);
    res.render("list", {day : dates, itemsLists : items});
});

app.post("/", function(req, res){
    let inputList = req.body.newLists;
    items.push(inputList);
    res.redirect("/");
});

app.get("/about" , function(req, res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("Server started in port 3000");
});