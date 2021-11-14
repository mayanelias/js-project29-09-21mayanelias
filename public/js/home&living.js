let form = document.getElementById("forms");
let arrayHomeLiving;
axios
.get("/home&living")
.then(function (response) {
    if(response.status === 200){
 arrayHomeLiving=response.data;
let homeLivingContainer=document.getElementById("homeLivingContainer");
let sortSection = document.getElementsByClassName("imagesContainer");
        for (let i = 0; i < arrayHomeLiving.length; i++) {
            homeLivingContainer.innerHTML += `<div class="imagesContainer">
            <button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
            <img class="firstImage" src="${arrayHomeLiving[i].image1}">
            <button class="next"><a>&#10095;</a></button><br>
            <h3 class="info"> category : ${arrayHomeLiving[i].category}<br> id : ${arrayHomeLiving[i].id}<br> name : ${arrayHomeLiving[i].name}<br> price : ${arrayHomeLiving[i].price}$<br> description : ${arrayHomeLiving[i].description}</h3>
            <button  onclick="addProductToCart('${i}')" class="but">Add To The Cart</button>
            <button onclick="deleteProduct('${arrayHomeLiving[i]._id}')" class="but">Delete</button>
            <form method="get" action="updateProducts.html"><button class="but" type="submit" name="idNum" value="${arrayHomeLiving[i]._id}">Update</button></form>
            </div>`
        }
        prevImage()
        nextImage()
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
                    firstImage[i].src = `${arrayHomeLiving[i].image2}`
                    counter = 0

                    break;
                case 1:
                    firstImage[i].src = `${arrayHomeLiving[i].image1}`
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
                    firstImage[i].src = `${arrayHomeLiving[i].image2}`
                    counter = 1

                    break;
                case 1:
                    firstImage[i].src = `${arrayHomeLiving[i].image1}`
                    counter = 0
                    break;
            }
        });
    }
}
function addProductToCart(i) {
    axios
    .patch(`/carts/add`, {
        image1: arrayHomeLiving[i].image1,
        image2: arrayHomeLiving[i].image2,
        category: arrayHomeLiving[i].category,
        id: arrayHomeLiving[i].id,
        name:arrayHomeLiving[i].name,
        price:arrayHomeLiving[i].price,
        size:arrayHomeLiving[i].size,
        description:arrayHomeLiving[i].description
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
      });
    }