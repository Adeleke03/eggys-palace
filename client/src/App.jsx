import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { Home, Navbar } from "./routes/routes";
import Footer from "./layouts/Footer";
import LoadingRing from "./utils/Loader";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Toaster, toast } from "sonner";
import ScrollToTop from "./utils/ScrollToTop";
import LocationModal from "./components/modals/LocationModal";
import ResetPwd from "./auth/ResetPwd";
import ForgotPwd from "./auth/ForgotPwd"


// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  // useEffect(()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart))

  // },[cart])
  // const handleAddToCart = (item)=>{
  //     const isPresent = cart.some((product)=> product._id === item._id)
  //     if(isPresent){
  //       const updatedCart = cart.map((product)=>{
  //         product._id === item._id ? {...product, quantity:product.quantity + 1}:product
  //       })
  //       setCart(updatedCart);
  //     }else{
  //       const newItem = {...item, quantity:1}
  //       setCart([...cart,newItem]);
  //       console.log([...cart,newItem]);

  //     }

  //   }
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  // useEffect(()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart))

  // },[cart])
  // console.log(cart);

  // let handleAddToCart = (product) => {
  //   const productSelected = cart.find(
  //     (singleCart) => singleCart._id === product._id
  //   );
  //   if (productSelected) {
  //     setCart(
  //       cart.map((oneItem) =>
  //         oneItem._id === product._id
  //           ? {
  //               ...productSelected,
  //               quantity: productSelected.quantity + 1,
  //             }
  //           : oneItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              {" "}
              <LoadingRing />{" "}
            </div>
          }
        >
          <ScrollToTop />
          <LocationModal onLocationSelect={setLocation} />
          <Routes>
            <Route
              element={
                <>
                  <Navbar /> <Footer />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/reset-password" element={<ResetPwd/>}/>
            <Route path="/forgot-password" element={<ForgotPwd/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
      {/* <BrowserRouter>
        <Suspense fallback={<div className="flex justify-center items-center h-screen"> <LoadingRing/> </div>}>
        <Navbar cart={cart} setCart={setCart}/>
        <Navbar cart={cart} setCart={setCart}/>
          <Routes>
            <Route path="/" element={<Home  handleAddToCart = {handleAddToCart} />} />
            <Route path="product/:id" element={<Product/>}/>
            <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
      <Toaster /> */}
    </>
  );
}

export default App;
