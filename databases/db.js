const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud"
});

conection.connect((err) => {
  if (err) {
    return console.log("El error de conexión es: " + err);
  }

  console.log("Conectado a la BD");
})

module.exports = conection;