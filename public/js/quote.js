var button=document.getElementById("but");
var quote=document.getElementById("quotes");
button.addEventListener("click",function(){
var randomNumber=Math.floor(Math.random()*(arrayQuotes.length));
quote.innerHTML=arrayQuotes[randomNumber];
});