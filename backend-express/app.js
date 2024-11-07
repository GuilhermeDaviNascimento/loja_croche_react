const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const clothes = [
  {
    id: 1,
    name: "Cropped Fada",
    price: 100,
    category: ["Croppeds", "Popular"],
    img_url: "https://i.imgur.com/hmSmyRE.jpeg",
  },
  {
    id: 2,
    name: "Bolsa de Squares",
    price: 80,
    category: ["Bolsas", "Acessórios"],
    img_url: "https://i.imgur.com/BGFX9id.jpeg",
  },
  {
    id: 3,
    name: "Bolsa de Squares de Coração",
    price: 110,
    category: ["Bolsas", "Acessórios", "Popular"],
    img_url: "https://i.imgur.com/heZ7cnv.jpeg",
  },
  {
    id: 4,
    name: "Touca de Gatinho",
    price: 60,
    category: ["Toucas", "Acessórios", "Popular"],
    img_url: "https://i.imgur.com/D06k7pY.jpeg",
  },
  {
    id: 5,
    name: "Biquíni Simples",
    price: 100,
    category: ["Biquínis", "Verão", "Popular"],
    img_url: "https://i.imgur.com/4d0dDVS.jpeg",
  },
  {
    id: 6,
    name: "Sobreposição",
    price: 100,
    category: ["Acessórios"],
    img_url: "https://i.imgur.com/kjLdUSw.jpeg",
  },
  {
    id: 7,
    name: "Cropped de um Square Frente Única",
    price: 70,
    category: ["Croppeds", "Popular"],
    img_url: "https://i.imgur.com/xW6Rxuh.jpeg",
  },
  {
    id: 8,
    name: "Cropped Busto Invertido",
    price: 80,
    category: ["Croppeds"],
    img_url: "https://i.imgur.com/DQ9Wqvl.jpeg",
  },
  {
    id: 9,
    name: "Conjunto Top e Saia",
    price: 150,
    category: ["Conjuntos", "Verão", "Popular"],
    img_url: "https://i.imgur.com/W6g6Rp4.jpeg",
  },
  {
    id: 10,
    name: "Cropped Frente Única",
    price: 90,
    category: ["Croppeds"],
    img_url: "https://i.imgur.com/fbFPeCx.jpeg",
  },
  {
    id: 11,
    name: "Cropped de Três Squares",
    price: 60,
    category: ["Croppeds"],
    img_url: "https://i.imgur.com/EDHXgBv.jpeg",
  },
  // { name: "Cropped de Plumas Frente Única", price: 70, category: ["Croppeds"], img_url: ""  },
];

app.get("/", (req, res) => {
  res.send(clothes);
});

app.get("/roupa/:id_roupa", (req, res) => {
  const id_roupa = req.params.id_roupa;
  clothes.forEach((clothe) => {
    if (clothe.id == id_roupa) {
      res.send(clothe);
    }
  });
});
app.get("/categoria/:category", (req, res) => {
  const category_params = req.params.category;
  res.send(clothes.filter((clothe) => clothe.category.includes(category_params)))
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
