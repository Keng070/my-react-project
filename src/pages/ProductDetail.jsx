import { FaRegStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { RiHeartLine } from "react-icons/ri";

import { useNavigate, useParams } from "react-router-dom";
import News from "../components/News";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productSize, setProductSize] = useState("");
  const [productSizeCheck, setProductSizeCheck] = useState(false);
  const navigate = useNavigate();
  const productId = useParams();
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("user");
  const successPopUp = (reason) => {
    toast.success(`${reason}`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const wariningPopUp = (reason) => {
    toast.warn(`${reason}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const getTheProduct = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${api}/api/products/id/${productId.id}`, {
        method: "GET",
      });
      if (res.ok) {
        //ok
        setLoading(false);
      } else {
        console.log(res);
        setLoading(false);
      }
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getRelatedProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${api}/api/products?brand=${productData.brand}`,
        {
          method: "GET",
        }
      );
      if (res.ok) {
        //ok
        setLoading(false);
      } else {
        console.log(res);
        setLoading(false);
      }
      const data = await res.json();
      setRelatedProducts(data.content);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const addToCart = async (productId) => {
    try {
      setProductSizeCheck(true);
      setLoading(true);
      const res = await fetch(`${api}/api/cart/add`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: productId,
          size: productSize,
        }),
      });
      if (res.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      const data = await res.json();
      if (data) {
        setLoading(false);
        successPopUp(data.message);
      } else {
        wariningPopUp(data.error);
        setLoading(false);
      }
    } catch (error) {
      wariningPopUp(error);
      console.log(error);
    }
  };
  useEffect(() => {
    getRelatedProducts();
    getTheProduct();
    if (relatedProducts) {
      setLoading(false);
    }
    if (productSizeCheck) {
      console.log(productSize);
    }
  }, [relatedProducts, productSizeCheck]);

  return (
    <div className="max-w-[1640px]  m-auto">
      {loading ? <Loading /> : ""}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* The product */}
      <div className=" md:pt-[150px] md:px-16 lg:px-16  lg:pt-[150px] pt-[50px] flex w-full flex-wrap">
        {/* image */}
        <div className="h-[400px] min-w-[400px] flex-1 mx-4">
          <img
            className="h-full w-full object-cover"
            src={productData.imageUrl}
            alt=""
          />
        </div>
        {/* desc */}
        <div className="flex-1 min-w-[400px] flex flex-col p-2 md:px-10 lg:px-10">
          <p className="text-2xl font-bold mb-6">{productData.title}</p>
          <div className="flex text-orange-600 mb-6">
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </div>
          <p className="text-[20px] mb-6">{productData.description}</p>
          <p className="text-2xl md:text-2xl lg:text-2xl text-orange-600 mb-6">
            $ {productData.price}
          </p>
          <select
            onChange={(e) => setProductSize(e.target.value)}
            className="w-[100px] border-2 p-2 mb-4"
            name=""
            id=""
          >
            <option value="Sizes" disabled selected>
              Sizes
            </option>
            {productData?.sizes?.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <form className="flex items-center mb-6" action="">
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={1}
            />
            <button
              onClick={() => addToCart(productData._id)}
              className="text-[15px] mx-2 font-bold p-[12px] hover:bg-white duration-500 hover:text-orange-600 hover:border-2 border-orange-600 bg-orange-600 text-white"
            >
              Add to cart
            </button>
            <RiHeartLine className="cursor-pointer" size={30} />
          </form>
          <div className="flex m">
            <p className="bg-custom-blue  mx-2 cursor-pointer text-white text-[17px] px-4 p-1 rounded-full">
              Lacoste
            </p>
            <p className="bg-custom-blue mx-2 cursor-pointer text-white text-[17px] px-4 p-1 rounded-full">
              Men
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center lg:py-12 md:py-12 py-4">
        <div className="h-[1px] w-[60%] bg-custom-blue"></div>
      </div>
      {/* Title */}
      <div className="w-full text-center">
        <p className="text-custom-blue md:text-4xl text-[20px] lg:text-4xl pb-10 font-bold">
          Related Products
        </p>
      </div>

      {/* Related products */}
      <div className="flex flex-wrap w-full p-1 md:px-12 lg:px-12">
        {relatedProducts.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/product/${item._id}`)}
            className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
          >
            <img
              className="h-[65%] w-full  object-cover"
              src={item.imageUrl}
              alt=""
            />
            <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
              <p className="font-bold my-1 text-center">{item.title}</p>
              <p className="text-orange-600 text-[20px] mb-2">$ {item.price}</p>
              {/* Actions */}
              <div className="flex hovered-actions w-full items-center justify-center">
                <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                  <FaCartArrowDown size={17} />
                </button>
                <button
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2"
                >
                  View
                </button>
                <RiHeartLine className="mx-2 cursor-pointer " size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* News */}
      <News />
    </div>
  );
};

export default ProductDetail;
