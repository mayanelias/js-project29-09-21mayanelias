let form = document.getElementById("forms");
let arrayJewelryAccessories;
axios
.get("/jewelry&accessories")
.then(function (response) {
    if(response.status === 200){
 arrayJewelryAccessories=response.data;
//  console.log(arrayJewelryAccessories);
let jewelryAccessoriesContainer=document.getElementById("jewelryAccessoriesContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
        for (let i = 0; i < arrayJewelryAccessories.length; i++) {
            jewelryAccessoriesContainer.innerHTML += `<div class="imagesContainer">
            <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
            <img class="firstImage" src="${arrayJewelryAccessories[i].image1}">
            <button class="next"><a>&#10095;</a></button><br>
            <h3 class="info"> category : ${arrayJewelryAccessories[i].category}<br> id : ${arrayJewelryAccessories[i].id}<br> name : ${arrayJewelryAccessories[i].name}<br> price : ${arrayJewelryAccessories[i].price}$<br> description : ${arrayJewelryAccessories[i].description}</h3>
            <button  onclick="addProductToCart('${i}')" class="but">Add To The Cart</button>
            <button onclick="deleteProduct('${arrayJewelryAccessories[i]._id}')" class="but">Delete</button>
            <form method="get" action="updateProducts.html"><button class="but" type="submit" name="idNum" value="${arrayJewelryAccessories[i]._id}">Update</button></form>
            </div>`
        }
    prevImage()
    nextImage()
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
                    firstImage[i].src = `${arrayJewelryAccessories[i].image2}`
                    counter = 0

                    break;
                case 1:
                    firstImage[i].src = `${arrayJewelryAccessories[i].image1}`
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
                    firstImage[i].src = `${arrayJewelryAccessories[i].image2}`
                    counter = 1

                    break;
                case 1:
                    firstImage[i].src = `${arrayJewelryAccessories[i].image1}`
                    counter = 0
                    break;
            }
        });
    }
}
let cartId=0;
function addProductToCart(i) {
    axios
    .patch(`/carts/add`, {
        cartId: cartId,
        image1: arrayJewelryAccessories[i].image1,
        image2: arrayJewelryAccessories[i].image2,
        category: arrayJewelryAccessories[i].category,
        id: arrayJewelryAccessories[i].id,
        name:arrayJewelryAccessories[i].name,
        price:arrayJewelryAccessories[i].price,
        size:arrayJewelryAccessories[i].size,
        description:arrayJewelryAccessories[i].description
    })
    .then(function (response) {
        console.log(response.data);
    })
      .catch(function (error) {
          console.log(error);
        });
    }   