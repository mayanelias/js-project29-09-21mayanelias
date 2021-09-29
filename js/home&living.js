let images=document.getElementById("imagesContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
let arrayHomeLiving=[];
for(let i=0;i<products.length;i++){
    if(products[i].category=="home&living"){  
        arrayHomeLiving.push({category:products[i].category,
            id:products[i].id,
            name:products[i].name,
            price:products[i].price,
           description:products[i].description,
            image1:products[i].image1 , 
            image2:products[i].image2 } 
        )
    }
    }
    for (let i = 0; i < arrayHomeLiving.length; i++) {
        imagesContainer.innerHTML += `<div class="imagesContainer">
    <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="../${arrayHomeLiving[i].image1}">
     <button class="next"><a>&#10095;</a></button><br>
      <h3 class="info"> category : ${arrayHomeLiving[i].category}<br> id : ${arrayHomeLiving[i].id}<br> name : ${arrayHomeLiving[i].name}<br> price : ${arrayHomeLiving[i].price}$<br> description : ${arrayHomeLiving[i].description}<h3>
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
                        firstImage[i].src = `../${arrayHomeLiving[i].image2}`
                        counter = 0
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayHomeLiving[i].image1}`
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
                        firstImage[i].src = `../${arrayHomeLiving[i].image2}`
                        counter = 1
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayHomeLiving[i].image1}`
                        counter = 0
                        break;
                }
            });
        }
    }
    nextImage()
    let addToCart = document.getElementsByClassName("but");
    for (let i = 0; i < arrayHomeLiving.length; i++) {
        addToCart[i].onclick = () => {
            arrayCart.push(arrayHomeLiving[i])
            alert("added to the cart");
        }
    }
    let kanvas = document.getElementById("kanvas");
    kanvas.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "kanvas") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let blanket = document.getElementById("blanket");
    blanket.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "blanket") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let carpet = document.getElementById("carpet");
    carpet.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "carpet") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let pillow = document.getElementById("pillow");
    pillow.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "pillow") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let planter = document.getElementById("planter");
    planter.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "planter") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let oilBurner = document.getElementById("oilBurner");
    oilBurner.onclick = () => {
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            if (arrayHomeLiving[i].name != "oil burner") {
                sortSection[i].style.display = "none"
            }
        }
    }