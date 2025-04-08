import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { menuItems } from "../db";
import MyButton from "../components/MyButton";
import { useEffect } from "react";
import CartContext from "../context/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import rateIcon from "../assets/rating-icon.svg";
// import { allProducts } from "../../../server/controllers/productController";
const baseUrl = import.meta.env.VITE_API_URL;

const Product = () => {
  const { handleAddToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const req = await fetch(`${baseUrl}/api/product/${productId}`);
      const res = await req.json();
      setProduct(res.product);

      const allProducts = await fetch(`${baseUrl}/api/product/all-products`);
      const allProductsData = await allProducts.json();
      const filteredSimilarProducts = allProductsData.products.filter(
        (item) => item.category === res.product.category && item._id !== res.product._id
      );

      setSimilarProducts(filteredSimilarProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <>
      <main className="wrapper bg-[#2F2F2F]">
        <section className="md:grid grid-cols-2 py-1">
          {isLoading ? (
            // Skeleton Loader for Product Details
            <>
              <div className="skeleton w-[650px] h-[400px] bg-gray-800"></div>
              <div className="flex flex-col gap-y-4">
                <div className="skeleton h-10 w-3/4 bg-gray-800"></div>
                <div className="skeleton h-6 w-full bg-gray-800"></div>
                <div className="skeleton h-6 w-5/6 bg-gray-800"></div>
                <div className="skeleton h-12 w-full bg-gray-800"></div>
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={product?.image} alt="" className="w-[650px] object-cover" />
              </div>
              <div className="text-[#FFFFFF] md:px-8 flex flex-col justify-center gap-y-[20px]">
                <h1 className="font-[500] text-[34px]"> {product?.title} </h1>
                <p className="font-[400] text-[20px] py-4">{product?.description}</p>
                <MyButton
                  onClick={() => {
                    handleAddToCart(product);
                    toast.success("Item added");
                  }}
                  text="Add To Cart"
                  className="w-full h-[56px]"
                />
              </div>
            </>
          )}
        </section>

        <section className="mt-10 snap-x">
          <h2 className="text-white text-4xl pb-6">Others You Might Like</h2>
          <div className="flex overflow-x-auto snap-x scroll-smooth space-x-3 md:space-x-6 pb-4 no-scrollbar">
            {isLoading
              ? // Skeleton Loader for Similar Products
                [...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="card bg-[#252422] w-[300px] md:w-[340px] md:min-w-[340px] flex-none snap-start p-[16px] shadow-sm"
                  >
                    <div className="skeleton h-[200px] w-full bg-gray-800"></div>
                    <div className="pt-4">
                      <div className="skeleton h-6 w-3/4 mb-4 bg-gray-800"></div>
                      <div className="skeleton h-5 w-1/2 mb-2 bg-gray-800"></div>
                      <div className="skeleton h-[56px] bg-gray-800 mt-8"></div>
                    </div>
                  </div>
                ))
              : similarProducts.map((similarProduct) => {
                  const { _id, image, title, rating, price, duration } = similarProduct;
                  return (
                    <div
                      key={_id}
                      className="card bg-[#252422] w-[300px] md:w-[340px] md:min-w-[340px] flex-none snap-start p-[16px] shadow-sm"
                    >
                      <Link to={`/product/${_id}`}>
                        <figure>
                          <img
                            src={image}
                            alt="Shoes"
                            className="w-full h-auto object-cover"
                          />
                        </figure>
                      </Link>
                      <div className="pt-4">
                        <div className="flex justify-between items-center">
                          <h2 className="card-title font-[500] text-[20px] text-[#FBFBFB] ">
                            {title}
                          </h2>
                          <div className="flex gap-x-2 border border-[#B67B0F] py-[6px] px-[4px] rounded-[2px] ">
                            <img src={rateIcon} alt="rate-icon" />
                            <p className="text-[#FBFBFB] font-[400] text-[14px]">
                              {rating}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#B67B0F]  py-5 ">
                            <span className="font-[200] text-[23px]">&#8358;</span>
                            <span className="font-[500] text-[31px]">{price}</span>
                          </p>
                          <p className="text-[#FBFBFB]"> {duration} </p>
                        </div>
                        <div className="card-actions justify-center ">
                          <MyButton
                            text="Add to cart"
                            className="w-full h-[56px]"
                            onClick={() => {
                              handleAddToCart(similarProduct);
                              toast.success("Item added");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;