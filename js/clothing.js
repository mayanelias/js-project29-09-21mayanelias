let imagesContainer = document.getElementById("imagesContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
let arrayClothing = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].category == "clothing") {
        arrayClothing.push({
            category: products[i].category,
            id: products[i].id,
            name: products[i].name,
            price: products[i].price,
            size:products[i].size,
            description: products[i].description,
            image1: products[i].image1,
            image2: products[i].image2         
        })
    }
}

for (let i = 0; i < arrayClothing.length; i++) {
    imagesContainer.innerHTML += `<div class="imagesContainer">
<button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
<img class="firstImage" src="../${arrayClothing[i].image1}">
 <button class="next"><a>&#10095;</a></button><br>
  <h3 class="info"> category : ${arrayClothing[i].category}<br> id : ${arrayClothing[i].id}<br> name : ${arrayClothing[i].name}<br> price : ${arrayClothing[i].price}$<br>
  size:<select name="size" id="size">
<option value="${arrayClothing[i].size[0]}">${arrayClothing[i].size[0]}</option>
<option value="${arrayClothing[i].size[1]}">${arrayClothing[i].size[1]}</option>
<option value="${arrayClothing[i].size[2]}">${arrayClothing[i].size[2]}</option>
<option value="${arrayClothing[i].size[3]}">${arrayClothing[i].size[3]}</option>
<option value="${arrayClothing[i].size[4]}">${arrayClothing[i].size[4]}</option>
<option value="${arrayClothing[i].size[5]}">${arrayClothing[i].size[5]}</option>
<option value="${arrayClothing[i].size[6]}">${arrayClothing[i].size[6]}</option> 
</select><br>  
  description : ${arrayClothing[i].description}<h3>
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
                    firstImage[i].src = `../${arrayClothing[i].image2}`
                    counter = 0

                    break;
                case 1:
                    firstImage[i].src = `../${arrayClothing[i].image1}`
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
                    firstImage[i].src = `../${arrayClothing[i].image2}`
                    counter = 1

                    break;
                case 1:
                    firstImage[i].src = `../${arrayClothing[i].image1}`
                    counter = 0
                    break;
            }
        });
    }
}
nextImage()
var addToCart = document.getElementsByClassName("but");
for (let i = 0; i < arrayClothing.length; i++) {
    addToCart[i].onclick = () => {
        arrayCart.push(arrayClothing[i]);
        alert("added to the cart");
    }
}
let tShirt = document.getElementById("tShirt");
tShirt.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "T-shirt") {
            sortSection[i].style.display = "none"
        }
    }
}
let longSleeveTShirt = document.getElementById("longSleeveTShirt");
longSleeveTShirt.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "long sleeve T-shirt") {
            sortSection[i].style.display = "none"
        }
    }
}
let hoddie = document.getElementById("hoddie");
hoddie.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "hoddie") {
            sortSection[i].style.display = "none"
        }
    }
}
let denimJacket = document.getElementById("denimJacket");
denimJacket.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "denim jacket") {
            sortSection[i].style.display = "none"
        }
    }
}
let dress = document.getElementById("dress");
dress.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "dress") {
            sortSection[i].style.display = "none"
        }
    }
}
let skirt = document.getElementById("skirt");
skirt.onclick = () => {
    for (let i = 0; i < arrayClothing.length; i++) {
        if (arrayClothing[i].name != "skirt") {
            sortSection[i].style.display = "none"
        }
    }
}






