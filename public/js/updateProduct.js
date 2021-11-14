
form.addEventListener("submit", updateProduct);

let urlId = window.location.href;
let url = new URL(urlId);
let idNum = url.searchParams.get("idNum");
function updateProduct(e) {
  e.preventDefault();

  let category = document.getElementById("category").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let size = document.getElementById("size").value;
  let description = document.getElementById("description").value;
  let image1 = document.getElementById("img1").value;
  let image2 = document.getElementById("img2").value;
  axios
    .patch(`/products/${idNum}`, {
      category: category,
      name: name,
      price: price,
      size: size,
      description: description,
      image1: image1,
      image2: image2,
    })
    .then(function (response) {
      console.log(idNum);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}