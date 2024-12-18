const express = require("express");
const path=require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

app.get("/about", (req, res) => {
    res.render("pages/about.ejs");
})

app.get("/contact", (req, res) => {
    res.render("pages/contact.ejs");
})


app.get("/register", (req, res) => {
    res.render("pages/register.ejs");
})

let users=[];
app.post("/register",(req,res)=>{
    let roll=req.body.rollno;
    let user=req.body.username;
    let section=req.body.section;
    users.push({roll,user,section});    
    res.render("pages/register.ejs");
})

app.get("/showUsers",(req,res)=>{
    res.render("pages/show.ejs",{users});
})

app.get("/index", (req, res) => {
    res.render("pages/home.ejs");
})

app.get("/*", (req, res) => {
    res.render("pages/home.ejs");
})


app.listen(8080, () => {
    console.log("App is listening at 8080");
})