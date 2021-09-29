let headings = ["<h2>Possibility of express delivery on the same day to customers until <b>12:00 p.m.</b></h2>", 
"<h2>Join the club for <b>free</b> and enjoy accumulating points with every purchase!</h2>",
"<h2><b>FREE DELIVERY</b>- Free shipping over a purchase of <b> 199$</b></h2>"];
for(let i=0; i<headings.length;i++){
    window.setInterval(()=>{
        document.getElementById("commercials").innerHTML = headings[i];
        if (i == (headings.length - 1)) {
          i = 0;
        } else {
          i++;
        }
      }, 7000)
}
var arrayCart =[
{category:"home&living",id:75,name:"napkin",price:10,size:"large",description:"frida kahlo napkin for the house keep you clean",image1:"./images/l149.jpg",image2:"./images/l150.jpg",amount:["1","2","3","4","5","6","7","8","9","10"]},
{category:"jewelry&accessories",id:50,name:"badge holder",price:15,size:"small",description:"frida kahlo lanyard keychain badge holder for you",image1:"./images/ja99.jpg",image2:"./images/ja100.jpg",amount:["1","2","3","4","5","6","7","8","9","10"]},
{category:"clothing",id:11,name:"sweater",price:100,size:"38",description:"Frida Kahlo women's off shoulder sweater",image1:"./images/c21.jpg",image2:"./images/c22.jpg",amount:["1","2","3","4","5","6","7","8","9","10"]},
{category:"paintings",id:100,name:"frida kahlo painting",price:74600,size:"large",description:"Tree of hope remain strong,1946-by Frida Kahlo",image1:"./images/p199.png",image2:"./images/p200.png",amount:["1","2","3","4","5","6","7","8","9","10"]},]
console.log(arrayCart);
var sum=0;
var arraySum=[];
var cartTable=document.getElementById("cartTable");
for(let i=0;i<arrayCart.length;i++){
    cartTable.innerHTML+=`<tr class="cartShoppingTable">
    <td><button onclick="prevImage()"  class="prev"><a>&#10094;</a></button>
    <img class="firstImage" src="../${arrayCart[i].image1}">
     <button class="next"><a>&#10095;</a></button><br></td>
    <td><h1 class="info">category: ${arrayCart[i].category}</h1></td>
    <td><h1 class="info"> id: ${arrayCart[i].id}</h1></td>
    <td><h1 class="info"> name: ${arrayCart[i].name}</h1></td>
    <td><h1 class="info"> price: ${arrayCart[i].price}$</h1></td>
    <td><h1 class="info"> size : ${arrayCart[i].size}</h1></td>
    <td><h1 class="info"> description: ${arrayCart[i].description}</td>
<td><input class="amount" min="1" max="10" value=1 type="number" onInput="amountValue()"></td>
<td><p class="itemsTotal"></p></td>
 <td><button class="but" onclick="removeItems(${i})">x</td></tr>` 
 
}
var amount=document.getElementsByClassName("amount");
var itemsTotal=document.getElementsByClassName("itemsTotal");
var totalPrice=document.getElementById("totalPrice");
function amountValue(){
var a=0;
for(let i=0;i<arrayCart.length;i++){ 
if(amount[i].value>=1){
var b=amount[i].value;
var c=arrayCart[i].price;
total=(b*c);
itemsTotal[i].innerHTML= total;
a+=total;
totalPrice.innerHTML=`total price :${a}$`;
}   
    }
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
                    firstImage[i].src = `../${arrayCart[i].image2}`
                    counter = 0

                    break;
                case 1:
                    firstImage[i].src = `../${arrayCart[i].image1}`
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
                    firstImage[i].src = `../${arrayCart[i].image2}`
                    counter = 1

                    break;
                case 1:
                    firstImage[i].src = `../${arrayCart[i].image1}`
                    counter = 0
                    break;
            }
        });
    }
}
nextImage()
var button=document.getElementsByClassName("but");
 cartShoppingTable=document.getElementsByClassName("cartShoppingTable");
amountValue()
for(let i=0;i<arrayCart.length;i++){
function removeItems(a){
arrayCart.splice(a,1);
amountValue()
cartShoppingTable[i].innerHTML=" "; 
}
}



