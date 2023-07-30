import express from "express";
import path from "path";

const app = express();
//path.resolve give you current path
const pathLocation = path.join(path.resolve(), "/index.html");
const PORT = process.env.PORT || 5000;

// setting ejs engine
app.set("view engine","ejs")

// creating static for frontend
const staticPath=express.static(path.join(path.resolve(),"public"))
app.use(staticPath)

// creating route
app.get("/", (req, res) => {
  res.render("index",{msg:"Hello from ejs engine"})
});
// create route for about page contact page
//about route
app.get("/about", (req, res) => {
  res.sendFile(path.join(path.resolve(), "about.html"));
});
//contact route
app.get("/contact", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/contact.html"));
});

// creating port
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
