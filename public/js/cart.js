let sum = 0;
let cartId = 0;
let headings = [
  "<h2>Possibility of express delivery on the same day to customers until <b>12:00 p.m.</b></h2>",
  "<h2>Join the club for <b>free</b> and enjoy accumulating points with every purchase!</h2>",
  "<h2><b>FREE DELIVERY</b>- Free shipping over a purchase of <b> 199$</b></h2>",
];
for (let i = 0; i < headings.length; i++) {
  window.setInterval(() => {
    document.getElementsByClassName("commercials").innerHTML = headings[i];
    if (i == headings.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 7000);
}
let arrayCart;
let cartTable=document.getElementById("cartTable");
let cartShoppingTable = document.getElementsByClassName("cartShoppingTable");
let button = document.getElementsByClassName("but");
let totalPrice = document.getElementById("totalPrice");
function showAllProducts() {
  axios
  .get("/carts")
  .then(function (response) {
    arrayCart = response.data[0].products;
    for (let i = 0; i < arrayCart.length; i++) {
      sum += Number(arrayCart[i].price);
     cartTable.innerHTML += `<tr class="cartShoppingTable">
      <td><button onclick="prevImage()"class="prev"><a>&#10094;</a></button>
      <img class="firstImage" src="${arrayCart[i].image1}">
      <button class="next"><a>&#10095;</a></button><br></td>
      <td><h1 class="info">category: ${arrayCart[i].category}</h1></td>
      <td><h1 class="info"> id: ${arrayCart[i].id}</h1></td> 
      <td><h1 class="info"> name: ${arrayCart[i].name}</h1></td>
      <td><h1 class="info"> price: ${arrayCart[i].price}$</h1></td>
      <td><h1 class="info"> size : ${arrayCart[i].size}</h1></td>
      <td><h1 class="info"> description: ${arrayCart[i].description}</td>
      <td><input class="amount" min="1" max="10" value=1 type="number" onInput="amountValue()"></td>
      <td><p class="itemsTotal"></p></td>
      <td><button class="but" onclick="removeItems(${i})">x</td></tr>`;
      console.log(sum);
    }
    totalPrice.innerHTML = `total price :${sum}$`;
    prevImage();
    nextImage();
    })
    .catch(function (error) {
      console.log(error);
    });
}
showAllProducts();
// amountValue();
function removeItems(i) {
  axios
    .patch("/carts/delete", { cartId: arrayCart[i].cartId })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// var amount = document.getElementsByClassName("amount");
// var itemsTotal = document.getElementsByClassName("itemsTotal");
// var totalPrice = document.getElementById("totalPrice");
// function amountValue() {
//   var a = 0;
//   for (let i = 0; i < arrayCart.length; i++) {
//     if (amount[i].value >= 1) {
//       var b = amount[i].value;
//       var c = arrayCart[i].price;
//       total = b * c;
//       itemsTotal[i].innerHTML = total;
//       a += total;
//       totalPrice.innerHTML = `total price :${a}$`;
//     }
//   }
// }
// var arrayCart = [
//   {
//     category: "home&living",
//     id: 75,
//     name: "napkin",
//     price: 10,
//     size: "large",
//     description: "frida kahlo napkin for the house keep you clean",
//     image1: "https://i.ibb.co/hFQ1df0/l149.jpg",
//     image2: "https://i.ibb.co/X4ThHLj/l150.jpg",
//     amount: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//   },
//   {
//     category: "jewelry&accessories",
//     id: 50,
//     name: "badge holder",
//     price: 15,
//     size: "small",
//     description: "frida kahlo lanyard keychain badge holder for you",
//     image1: "https://i.ibb.co/VxRyr2Z/ja99.jpg",
//     image2: "https://i.ibb.co/55SSxY3/ja100.jpg",
//     amount: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//   },
//   {
//     category: "clothing",
//     id: 11,
//     name: "sweater",
//     price: 100,
//     size: "38",
//     description: "Frida Kahlo women's off shoulder sweater",
//     image1: "https://i.ibb.co/q7CmTFq/c21.jpg",
//     image2: "https://i.ibb.co/cQ2tMKV/c22.jpg",
//     amount: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//   },
//   {
//     category: "paintings",
//     id: 100,
//     name: "frida kahlo painting",
//     price: 74600,
//     size: "large",
//     description: "Tree of hope remain strong,1946-by Frida Kahlo",
//     image1: "https://i.ibb.co/pXXBFTt/p199.jpg",
//     image2: "https://i.ibb.co/3WYL8MF/p200.jpg",
//     amount: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//   },
// ];
// console.log(arrayCart);
// for (let i = 0; i < arrayCart.length; i++) {
//   if (arrayCart[i].id==id) {
//     arrayCart.splice(i, 1);
//     amountValue();
//     cartShoppingTable.innerHTML = "";
//   }
// }
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var firstImage = document.getElementsByClassName("firstImage");
var secondImage = document.getElementsByClassName("secondImage");
function prevImage() {
  for (let i = 0; i < prev.length; i++) {
    let counter = 0;
    prev[i].addEventListener("click", () => {
      switch (counter) {
        case 0:
          firstImage[i].src = `${arrayCart[i].image2}`;
          counter = 0;
          
          break;
          case 1:
            firstImage[i].src = `${arrayCart[i].image1}`;
            counter = 1;
            break;
        }
      });
    }
  }
  function nextImage() {
    for (let i = 0; i < next.length; i++) {
      let counter = 0;
      next[i].addEventListener("click", () => {
        switch (counter) {
          case 0:
            firstImage[i].src = `${arrayCart[i].image2}`;
            counter = 1;

            break;
          case 1:
            firstImage[i].src = `${arrayCart[i].image1}`;
            counter = 0;
            break;
        }
      });
    }
  }