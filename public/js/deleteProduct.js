function deleteProduct(id) {
    axios
        .delete(`/products/${id}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}