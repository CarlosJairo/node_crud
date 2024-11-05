const express = require('express');

const app = express();

const PORT = 5000;

app.set("view engine", "ejs")

app.listen(PORT, ()=>{
  console.log(`Server running in http://localhost:${PORT}`)
})

app.use("/", require("./router"))

