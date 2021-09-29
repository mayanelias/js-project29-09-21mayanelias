let images=document.getElementById("imagesContainer");
let arrayPaintings=[];
for(let i=0;i<products.length;i++){
    if(products[i].category=="paintings"){
    arrayPaintings.push({
            category:products[i].category,
            id:products[i].id,
            name:products[i].name,
            price:products[i].price,
           description:products[i].description,
            image1:products[i].image1 , 
            image2:products[i].image2  
        })
        }
    }
    for (let i = 0; i < arrayPaintings.length; i++) {
        imagesContainer.innerHTML += `<div class="imagesContainer">
    <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="../${arrayPaintings[i].image1}">
     <button class="next"><a>&#10095;</a></button><br>
      <h3 class="info"> category : ${arrayPaintings[i].category}<br> id : ${arrayPaintings[i].id}<br> name : ${arrayPaintings[i].name}<br> price : ${arrayPaintings[i].price}$<br> description : ${arrayPaintings[i].description}<h3>
      <button class="but">Add To The Cart</button>
      </div>`
    }
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
                        firstImage[i].src = `../${arrayPaintings[i].image2}`
                        counter = 0
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayPaintings[i].image1}`
                        counter = 1
                        break;
                }
            });
        }
    }
    prevImage()
    function nextImage() {
        for (let i = 0; i < next.length; i++) {
            let counter = 0;
            next[i].addEventListener("click", () => {
                switch (counter) {
                    case 0:
                        firstImage[i].src = `../${arrayPaintings[i].image2}`
                        counter = 1
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayPaintings[i].image1}`
                        counter = 0
                        break;
                }
            });
        }
    }
    nextImage()
    let addToCart = document.getElementsByClassName("but");
    for (let i = 0; i < arrayPaintings.length; i++) {
        addToCart[i].onclick = () => {
            arrayCart.push(arrayPaintings[i])
            alert("added to the cart");
        }
    }