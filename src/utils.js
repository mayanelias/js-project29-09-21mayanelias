const products = require("../public/js/main");
const MongoDB = require("mongodb");
const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const publicPath = path.join(__dirname,"..","public");
const dbName = "E-commerce";
const collectionProducts = "products";
const collectionContacts = "contacs";
const collectionCarts = "carts";
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId;
const url =process.env.MONGO_URL||"mongodb://localhost:27017/";
// function insertProducts(req, res) {
//     MongoClient.connect(url, function (err, db) {
//       if (err) throw err;
//       const dbo = db.db(dbName);
//       dbo
//         .collection(collectionProducts)
//         .insertMany(products, function (err,allProducts) {
//           if (err) throw err;
//           res.send(allProducts)
//           db.close();
//         });
//     });
//   }
function getProducts(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({})
      .toArray(function (err, allProducts) {
        if (err) throw err;
        res.send(allProducts);
        db.close();
      });
  });
}
function getClothingCategory(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ category: /clothing$/ })
      .toArray(function (err, allClothing) {
        if (err) throw err;
        res.send(allClothing);
        db.close();
      });
  });
  // console.log(url);
}
function getHomeLivingCategory(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ category: /home&living$/ })
      .toArray(function (err, allHomeLiving) {
        if (err) throw err;
        res.send(allHomeLiving);
        db.close();
      });
  });
}
function getJewelryAccessoriesCategory(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ category: /jewelry&accessories$/ })
      .toArray(function (err, allJewelryAccessories) {
        if (err) throw err;
        res.send(allJewelryAccessories);
        db.close();
      });
  });
}
function getPaintingsCategory(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ category: /paintings$/ })
      .toArray(function (err, allPaintings) {
        if (err) throw err;
        res.send(allPaintings);
        db.close();
      });
  });
}
function addToProducts(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    let newProduct = req.body;
    if (!Number(newProduct.id)) {
      return res.sendStatus(400);
    }
    if (newProduct.name == undefined || newProduct.name.length == 0) {
      return res.sendStatus(400);
    }
    if (
      newProduct.description == undefined ||
      newProduct.description.length == 0
    ) {
      return res.sendStatus(400);
    }
    if (newProduct.category == undefined || newProduct.category.length == 0) {
      return res.sendStatus(400);
    }
    dbo
      .collection(collectionProducts)
      .insertOne(newProduct, function (err, resDbInsert) {
        console.log(resDbInsert);
        if (err) throw err;
        res.sendStatus(201);
        db.close();
      });
  });
}

function updateProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const productToUpdate = req.body;
    const id = req.params.id;

    dbo
      .collection(collectionProducts)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: productToUpdate },
        function (err, resUpdated) {
          if (err) throw err;
          if (
            productToUpdate.name == undefined ||
            productToUpdate.name.length == 0
          ) {
            return res.sendStatus(400);
          }
          if (resUpdated.value) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }

          db.close();
        }
      );
  });
}
function deleteProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
    var dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .findOneAndDelete({ _id: ObjectId(id) }, function (err, deleteProduct) {
        if (err) throw err;
        console.log(deleteProduct.value);
        if (deleteProduct.value) {
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
        db.close();
      });
  });
}
function sendForm(req, res){
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      let newPerson = req.body;
      if (newPerson.lastName == undefined || newPerson.lastName.length == 0) {
          return res.sendStatus(400);
      }
      if (newPerson.firstName == undefined || newPerson.firstName.length == 0) {
          return res.sendStatus(400);
      }
      dbo
          .collection(collectionContacts)
          .insertOne(newPerson, function (err, person) {
              console.log(person);
              if (err) throw err;
              res.sendStatus(201);
              db.close();
          });
  });
}
function getPersons(req, res) {
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      dbo.collection(collectionContacts).find({}).toArray(function (err, allPersons) {
          if (err) throw err;
          res.send(allPersons)
          console.log(allPersons);
      });
  });
}
// function createCart(req, res) {
//   MongoClient.connect(url, function (err, db) {
//   const obj=req.body;
//     if (err) throw err;
//     const dbo = db.db(dbName);
//     dbo
//       .collection(collectionCarts)
//       .insertOne(obj,
//       function (err,cart) {
//         if (err) throw err;
//         res.send(cart);
//         db.close();
//       });
//   });
// }
function getCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionCarts)
      .find({})
      .toArray(function (err,products) {
        if (err) throw err;
        console.log(products);
        res.send(products);
        db.close();
      });
  });
}
function getCartById(req, res) {
  MongoClient.connect(url, function (err, db) {
    const id=req.params.id
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionCarts)
      .findOne({_id:ObjectId(id)},
      function (err,cart) {
        if (err) throw err;
        console.log(cart);
        res.send(cart);
        db.close();
      });
  });
}
function addToCart(req, res) {
  const id = "61893c91e5cf7ed1f282a46c"
  const product = req.body
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionCarts)
.findOneAndUpdate(
  {_id:ObjectId(id)},
  {$push:{ products:product}},
    function (err,data){
      if (err){
        res.status(404).send(err)
      }
      else{res.send(data)}
    db.close();
  }
)
});
}
function deleteFromCart(req, res) {
  const id = "61893c91e5cf7ed1f282a46c"
  const product = req.body
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(collectionCarts)
.findOneAndUpdate(
  {_id:ObjectId(id)},
  {$pull:{ products:product}},
    function (err,data){
      if (err){
        res.status(404).send(err)
      }
      else{res.send(data)}
    db.close();
}
)
});
}
module.exports = {
  // insertProducts,
  getClothingCategory,
  getHomeLivingCategory,
  getJewelryAccessoriesCategory,
  getPaintingsCategory,
  addToProducts,
  getProducts,
  getCartById,
  updateProduct,
  deleteProduct,
  sendForm,
  getPersons,
  // createCart,
  getCart,
  addToCart,
  deleteFromCart 
};
