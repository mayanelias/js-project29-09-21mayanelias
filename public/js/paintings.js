let form = document.getElementById("forms");
let arrayPaintings;
axios
.get("/paintings")
.then(function (response) {
if(response.status === 200){
arrayPaintings=response.data;
let imagesContainer=document.getElementById("imagesContainer");
    for (let i = 0; i < arrayPaintings.length; i++) {
        imagesContainer.innerHTML += `<div class="imagesContainer">
    <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="${arrayPaintings[i].image1}">
     <button class="next"><a>&#10095;</a></button><br>
      <h3 class="info"> category : ${arrayPaintings[i].category}<br> id : ${arrayPaintings[i].id}<br> name : ${arrayPaintings[i].name}<br> price : ${arrayPaintings[i].price}$<br> description : ${arrayPaintings[i].description}</h3>
      <button onclick="addProductToCart('${i}')"class="but">Add To The Cart</button>
    <button onclick="deleteProduct('${arrayPaintings[i]._id}')" class="but">Delete</button>
    <form method="get" action="updateProducts.html"><button class="but" type="submit" name="idNum" value="${arrayPaintings[i]._id}">Update</button></form>
      </div>`
    }
prevImage()
nextImage()
}
})
.catch(function (error) {
    console.log('got error');
    console.log(error);
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
                   firstImage[i].src = `${arrayPaintings[i].image2}`
                   counter = 0

                   break;
               case 1:
                   firstImage[i].src = `${arrayPaintings[i].image1}`
                   counter = 1
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
                   firstImage[i].src = `${arrayPaintings[i].image2}`
                   counter = 1

                   break;
               case 1:
                   firstImage[i].src = `${arrayPaintings[i].image1}`
                   counter = 0
                   break;
           }
       });
   }
}
function addProductToCart(i) {
    axios
    .patch(`/carts/add`, {
        image1: arrayPaintings[i].image1,
        image2: arrayPaintings[i].image2,
        category: arrayPaintings[i].category,
        id: arrayPaintings[i].id,
        name:arrayPaintings[i].name,
        price:arrayPaintings[i].price,
        size:arrayPaintings[i].size,
        description:arrayPaintings[i].description
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}
  