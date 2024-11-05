const express = require('express');

const app = express();

const PORT = 5000;

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}));
app.use(express(express.json))

app.listen(PORT, ()=>{
  console.log(`Server running in http://localhost:${PORT}`)
})

app.use("/", require("./router"))

