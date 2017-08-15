
function cartLoad() {
   var xmlhttp1 = new XMLHttpRequest();
   xmlhttp1.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
           var myObj2 = JSON.parse(this.responseText);
           var display = "";
           if(!sessionStorage.length){
               display="You have Zero items in your cart.";
           }
           else
               {
           var ShoppingCart = sessionStorage.getItem('addedToCart').split(",");
           for (var k = 0; k < ShoppingCart.length; k++) {
               var productId = parseInt(ShoppingCart[k]);

               var productIndex = myObj2.productID.indexOf(productId);

               display += "<tr>" + "<td>" + myObj2.name[productIndex] + "</td>" + "<td>" + myObj2.price[productIndex] + "</td>" + "</tr>";
           }
               }
           display += "<div class=" + "clearCart" + "><button class='button' onclick='clearCart()'>" + "Clear Cart" + "</button>" + "<button  class='checkOut' onclick='checkOut()'>CheckOut</button></div>"
           document.getElementById("cartTable").innerHTML = display;
       }
   };
   xmlhttp1.open("GET", "https://raw.githubusercontent.com/SaloniTomar/Shopping-Cart/master/product.json", true);
   xmlhttp1.send();

}

function clearCart() {
   sessionStorage.clear();
   document.getElementById("cartTable").innerHTML = "<div class=" + "zero" + ">You have Zero items in your cart.</div>"
}

function checkOut() {
   var i;
   var result = document.getElementById("cartTable");
   var totalprice = 0;
   var ShoppingCart = sessionStorage.getItem('addedToCart').split(",");
   for (i = 0; i < ShoppingCart.length; i++) {
       var price = parseInt(result.rows[i].cells[1].innerHTML);
       totalprice += price;
   }
   alert(totalprice);
}