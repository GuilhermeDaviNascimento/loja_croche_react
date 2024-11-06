const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const clothes = [
  {name: 'item1', price:100, category:'coquette'},
  {name: 'item2', price:20, category:'praia'},
];

app.get('/', (req, res) => {
  res.send(clothes)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
