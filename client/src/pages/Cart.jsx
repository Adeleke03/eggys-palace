import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import UseTitle from "../Hooks/UseTitle";
import SimilarProducts from "../components/SimilarProducts";
import CartSummary from "../features/cart/CartSummary";
import CartItems from "../features/cart/CartItems";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  UseTitle("Your Cart | Eggys place");

  return (
    <>
      {cart.length === 0 ? (
        <div className="bg-[#2F2F2F] text-center min-h-80 flex justify-center items-center font-[600] text-[20px] ">

          <h1 className="text-white">Your cart is feeling lonely! 😟 Add some items to keep it company ☹️.</h1>
        </div>
      ) : (
        <main className="bg-[#2F2F2F] text-white wrapper grid lg:grid-cols-3 gap-[20px] ">
          <CartItems/>
          <CartSummary/>
        </main>
      )}
      <SimilarProducts/>
    </>
  );
};

export default Cart;
