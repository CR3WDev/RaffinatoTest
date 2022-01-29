const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "teste",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { subida } = req.body;
  const { queda } = req.body;
  const { tamanho } = req.body;

  let SQL = "INSERT INTO user ( subida,queda, tamanho ) VALUES (?,?,?)";
  db.query(SQL, [subida, queda, tamanho], (err, result) => {
    console.log(err);
  });
});
app.get("/getData", (req, res) => {
  let SQL = "SELECT * FROM user WHERE id=(SELECT max(id) FROM user);";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
app.listen(3001, () => {
  console.log("rodando servidor");
});
