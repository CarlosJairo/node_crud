const express = require("express");
const router = express.Router();

const conection = require("./databases/db")

router.get("/", (req, res) => {
  conection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    
    res.render("index", {results: results})
  })
})

router.get("/create", (req, res) => {
  res.render("create")
})

const crud = require("./controllers/crud");

router.post("/save", crud.save)

router.get("/edit/:id", (req, res) => {
  const id = req.params.id;

  conection.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
    if (err) throw err;

    res.render("edit", {user: results[0]})
  })
})

router.post("/update", crud.update)

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  conection.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    
    res.redirect("/")
  })
})

module.exports = router;