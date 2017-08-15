var index = sessionStorage.getItem('item');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        document.getElementById("descriptionForAll").innerHTML = "<h3 id='subheading'>" + myObj.name[index] + "</h3>" + "<div class='mainDescription'>" + "<img src=" + myObj.imagesrc[index] + " class='imageDescription' alt='T-Shirt' >" + "<p class='description'>" + "Product ID:" + myObj.productID[index] + "<br>" + "Name: " + myObj.name[index] + "<br>" + "Price:" + myObj.price[index] + "<br>" + "<button onclick=\"addToCart(" + myObj.productID[index] + ")\" >Add To Cart </button>" +"<button id=\"fav\" onclick=\"favourite(" + myObj.productID[index] + ")\" >Favourite </button>" + "</p></div>";

    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/SaloniTomar/Shopping-Cart/master/product.json", true);
xmlhttp.send();


function addToCart(productId) {

    var addedItems = sessionStorage.getItem('addedToCart');
    if (addedItems) {
        sessionStorage.setItem('addedToCart', addedItems + ',' + productId);
    } else {
        sessionStorage.setItem('addedToCart', productId);
    }
}
function favourite(id_name) {

    var isFav = sessionStorage.getItem(id_name);
    var property = document.getElementById(id_name);

    if (!isFav) {
        sessionStorage.setItem(id_name, 'true');
        fav.style.backgroundColor = "#7FFF00";
    } else {
        sessionStorage.removeItem(id_name);
        fav.style.backgroundColor = '#ebebe0';
    }

}

