import express  from "express";


const app=express();
const port=5000;

//static file
const staticPath=express.static(path.join(path.resolve(),"public"))
app.use(staticPath)


app.set("view engine","ejs")

// dynamic render
app.get("/dynamic",(req,res)=>{
    res.render("index",{msg:"Hello i am giving dynamic data to index.ejs"})
})

// creating routes 
app.get("/",(req,res)=>{
    res.write("<h1>Hello creating route</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h2>This page contains about us</h2>")
})

app.listen(5000,()=>{
    console.log(`server is listening on port ${port}`);
})