const express = require("express");
const port = process.env.PORT || 4208;
const app = express();
const routes = require("./routes/index");


app.use("/",routes)
app.listen(port, ()=>{
    console.log(`port open ${port}`)
})