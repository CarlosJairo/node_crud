const connection = require("../databases/db")

exports.save = (req, res) => {
  const name = req.body.name;
  const rol = req.body.rol;
  
  connection.query("INSERT INTO users SET ?", {nombre: name, rol: rol}, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Error al guardar el usuario")
    }
    res.redirect("/")
  })
}

exports.update = (req, res) =>  {
  const id = req.body.id;
  const name = req.body.name;
  const rol = req.body.rol;
  console.log(req.id)
  connection.query("UPDATE users SET ? WHERE id = ?", [{nombre: name, rol: rol}, id], (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Error al actualizar el usuario")
    }
    res.redirect("/")
  })
}