const express = require("express"),
  app = express(),
  PORT = 8080;
const utils=require("./utils");
const path = require("path");
const publicPath = path.join(__dirname,"..","public");
app.use(express.json());
app.use(express.static(publicPath));
let freeId = 0;

// app.get("/products", (req, res) => {
//     utils.insertProducts(req, res);
//   });
app.get("/products", (req, res) => {
  utils.getProducts(req, res);
});
app.get("/clothing", (req, res) => {
  utils.getClothingCategory(req, res);
});

app.get("/home&living", (req, res) => {
  utils.getHomeLivingCategory(req, res);
});
app.get("/jewelry&accessories", (req, res) => {
  utils.getJewelryAccessoriesCategory(req, res);
});
app.get("/paintings", (req, res) => {
  utils.getPaintingsCategory(req, res);
});
// app.post("/carts", (req, res) => {
//   utils.createCart(req, res);
// });
app.get("/carts", (req, res) => {
  utils.getCart(req, res);
});
app.get("/carts/:id", (req, res) => {
  utils.getCartById(req, res);
});
app.patch("/carts/add", (req, res) => {
  req.body.cartId = freeId++
  utils.addToCart(req, res);
});
app.patch("/carts/delete", (req, res) => {
  utils.deleteFromCart(req, res);
});
app.post("/products", (req, res) => {
  utils.addToProducts(req, res);
});
app.patch("/products/:id", (req, res) => {
  utils.updateProduct(req, res);
});
app.delete("/products/:id", (req, res) => {
  utils.deleteProduct(req, res);
});
app.get("/contacts", (req, res) => {
  utils.getPersons(req, res);
});
app.post("/contacts", (req, res) => {
  utils.sendForm(req, res);
});

app.listen(PORT, () => {
  console.log(`app is listening on: ${PORT}`);
});
