let form = document.getElementById("forms");
let arrayClothing;
axios
.get("/clothing")
.then(function (response) {
  if (response.status === 200) {
let clothingDiv = document.getElementById("imagesContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
      arrayClothing = response.data;
      for (let i = 0; i < arrayClothing.length; i++) {
        clothingDiv.innerHTML += `<div class="imagesContainer">
    <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="${arrayClothing[i].image1}">
     <button class="next"><a>&#10095;</a></button><br>
      <h3 class="info"> category : ${arrayClothing[i].category}<br> id : ${arrayClothing[i].id}<br> name : ${arrayClothing[i].name}<br> price : ${arrayClothing[i].price}$<br> 
      description : ${arrayClothing[i].description}</h3>
      <button onclick="addProductToCart('${i}')"class="but">Add To The Cart</button>
      <button onclick="deleteProduct('${arrayClothing[i]._id}')" class="but">Delete</button>
      <form method="get" action="updateProducts.html"><button class="but" type="submit" name="idNum" value="${arrayClothing[i]._id}">Update</button></form>
      </div>`;
      }
      prevImage()

      nextImage()
      let tShirt = document.getElementById("tShirt");
      tShirt.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "T-shirt") {
            sortSection[i].style.display = "none";
          }
        }
      };

      let longSleeveTShirt = document.getElementById("longSleeveTShirt");
      longSleeveTShirt.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "long sleeve T-shirt") {
            sortSection[i].style.display = "none";
          }
        }
      };
      let hoddie = document.getElementById("hoddie");
      hoddie.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "hoddie") {
            sortSection[i].style.display = "none";
          }
        }
      };
      let denimJacket = document.getElementById("denimJacket");
      denimJacket.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "denim jacket") {
            sortSection[i].style.display = "none";
          }
        }
      };
      let dress = document.getElementById("dress");
      dress.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "dress") {
            sortSection[i].style.display = "none";
          }
        }
      };
      let skirt = document.getElementById("skirt");
      skirt.onclick = () => {
        for (let i = 0; i < arrayClothing.length; i++) {
          if (arrayClothing[i].name != "skirt") {
            sortSection[i].style.display = "none";
          }
        }
      };
    }
  })
  .catch(function (error) {
    console.log( error);
  });
  let prev = document.getElementsByClassName("prev");
 let next = document.getElementsByClassName("next");
 let firstImage = document.getElementsByClassName("firstImage");
 let secondImage = document.getElementsByClassName("secondImage");
  function prevImage() {
    for (let i = 0; i < prev.length; i++) {
      let counter = 0;
      prev[i].addEventListener("click", () => {
        switch (counter) {
          case 0:
            firstImage[i].src = `${arrayClothing[i].image2}`;
            counter = 0;
  
            break;
          case 1:
            firstImage[i].src = `${arrayClothing[i].image1}`;
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
            firstImage[i].src = `${arrayClothing[i].image2}`;
            counter = 1;
  
            break;
          case 1:
            firstImage[i].src = `${arrayClothing[i].image1}`;
            counter = 0;
            break;
        }
      });
    }
  }
function addProductToCart(i) {
  axios
    .patch(`/carts/add`, {
      image1: arrayClothing[i].image1,
      image2: arrayClothing[i].image2,
      category: arrayClothing[i].category,
      id: arrayClothing[i].id,
      name: arrayClothing[i].name,
      price: arrayClothing[i].price,
      size: arrayClothing[i].size,
      description: arrayClothing[i].description,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

