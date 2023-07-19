
function update(value,tag){
    console.log("Touched quantity")
      console.log(value)
      value=parseInt(value)
      var cartData = localStorage.getItem("productsInCart");
      var cartObject = JSON.parse(cartData);
      cartObject[tag].inCart = value;
      
      const productKeys = Object.keys(cartObject);
      const numberOfProductsInCart = productKeys.length;
      var total=0;
      for (const productName in cartObject){
        const product = cartObject[productName];
        const price = product.price;
        const inCart = product.inCart;
        total+=price*inCart
      }
      console.log(total)
     
      localStorage.setItem("totalCost",total)
      var updatedCartData = JSON.stringify(cartObject);
      localStorage.setItem("productsInCart", updatedCartData);
      displayCart()
  }
  function order(){
    let totalCost=localStorage.getItem("totalCost");
    totalCost=parseInt(totalCost)
    if(totalCost==0){
      showAddedToCartMessage("No Item is present in the cart ❕","black")
    }else{
      localStorage.clear()
      showAddedToCartMessage("Congrats your order is placed")
    }
  }