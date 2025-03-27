 // handleRemove
 export  const  handleRemove = (cart,setCart,cartId)=>{
  let remove = cart.filter( cartItx => cartItx._id !== cartId )
  setCart(remove)
}

// handleInc
export let handleInc =(cart,setCart,productId)=>{
  const incQty = cart.map((cartItx)=>cartItx._id === productId ? {...cartItx,quantity:cartItx.quantity + 1 } : cartItx )

  setCart(incQty)

}

// handleDec


export let handleDec = function(cart,setCart,itemId){
  const decQty = cart.map((cartItx)=>{
      if(cartItx._id === itemId){
          const qty = cartItx.quantity > 1 ? cartItx.quantity - 1 : 1;
          return{...cartItx,quantity:qty}
      }
      return cartItx;
  })
  setCart(decQty)
}

// total price
// export const totalPrice = cart.reduce((total,product)=> total + parseFloat(product?.price) * product?.quantity, 0)
export const calculateTotalPrice = (cart) => {
  return cart.reduce((total, product) => total + parseFloat(product?.price) * product?.quantity, 0);
};
// console.log(totalPrice);
