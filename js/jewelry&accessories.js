let images=document.getElementById("imagesContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
let arrayJewelryAccessories=[];
for(let i=0;i<products.length;i++){
    if(products[i].category=="jewelry&accessories"){
    arrayJewelryAccessories.push({
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
    for (let i = 0; i < arrayJewelryAccessories.length; i++) {
        imagesContainer.innerHTML += `<div class="imagesContainer">
    <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="../${arrayJewelryAccessories[i].image1}">
     <button class="next"><a>&#10095;</a></button><br>
      <h3 class="info"> category : ${arrayJewelryAccessories[i].category}<br> id : ${arrayJewelryAccessories[i].id}<br> name : ${arrayJewelryAccessories[i].name}<br> price : ${arrayJewelryAccessories[i].price}$<br> description : ${arrayJewelryAccessories[i].description}<h3>
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
                        firstImage[i].src = `../${arrayJewelryAccessories[i].image2}`
                        counter = 0
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayJewelryAccessories[i].image1}`
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
                        firstImage[i].src = `../${arrayJewelryAccessories[i].image2}`
                        counter = 1
    
                        break;
                    case 1:
                        firstImage[i].src = `../${arrayJewelryAccessories[i].image1}`
                        counter = 0
                        break;
                }
            });
        }
    }
    nextImage()
    let addToCart = document.getElementsByClassName("but");
    for (let i = 0; i < arrayJewelryAccessories.length; i++) {
        addToCart[i].onclick = () => {
            arrayCart.push(arrayJewelryAccessories[i])
            alert("added to the cart");
        }
    }
    let earrings = document.getElementById("earrings");
    earrings.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "earrings") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let watch  = document.getElementById("watch");
    watch.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "watch") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let necklace = document.getElementById("necklace");
    necklace.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "necklace") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let bracelet = document.getElementById("bracelet");
    bracelet.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "bracelet") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let ring= document.getElementById("ring");
    ring.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "ring") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let handBag = document.getElementById("handBag");
    handBag.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "Handbag") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let wallet = document.getElementById("wallet");
    wallet.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "wallet") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let phoneCaseCover = document.getElementById("phoneCaseCover");
    phoneCaseCover.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "phone-case-cover") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let hairBrush = document.getElementById("hairBrush");
    hairBrush.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "hair-brush") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let pin= document.getElementById("pin");
    pin.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "pin") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let pouch = document.getElementById("pouch");
    pouch.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "pouch") {
                sortSection[i].style.display = "none"
            }
        }
    }
    let belt = document.getElementById("belt");
    belt.onclick = () => {
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            if (arrayJewelryAccessories[i].name != "belt") {
                sortSection[i].style.display = "none"
            }
        }
    }        