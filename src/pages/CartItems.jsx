import { FaChevronRight } from "react-icons/fa6";
import News from "../components/News";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
const CartItems = () => {
  const [loading, setLoading] = useState(false);

  const [userCart, setUserCart] = useState({});
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
  const getUserCart = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/api/cart`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      const data = await res.json();
      if (data) {
        setUserCart(data);
        setLoading(false);
      } else {
        wariningPopUp(data.error);
        setLoading(false);
      }
    } catch (error) {
      wariningPopUp(error);
      console.log(error);
    }
  };

  const removeCartItems = async(itemId)=>{
    try {
      setLoading(true)
      const res = await fetch(`${api}/api/cart_items/${itemId}`,{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      if (res.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      const data = await res.json();
      if (data) {
         setLoading(false);
         successPopUp(data.message)
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
    if (!token) {
      ("");
      setLoading(false);
    } else {
      setLoading(false);
      getUserCart();
    }
  }, [token]);
   return (
    <div className="m-auto max-w-[1640px]">
            {loading ? <Loading /> : ""}

      <div className="w-full py-9 md:py-12 lg:py-12"></div>
      {/* Paths */}
      <div className="flex text-custom-blue cursor-pointer max-w-[1640px] m-auto p-2 md:p-6 lg:p-6 items-center ">
        <p className="text-[20px]">Home</p>
        <FaChevronRight className=" mx-3" />
        <p className="text-[20px]">Products</p>
      </div>

      {/* titile */}
      <div className="flex w-full md:px-12 lg:justify-between lg:flex-row md:flex-row md:justify-between flex-row-reverse lg:px-12 px-2 py-3 border-b-2 border-t-2">
        <div className="md:flex lg:flex hidden">
          <RiShoppingCart2Line className="text-orange-600" size={30} />
          <p className="text-2xl ml-4 font-bold">Your Cart Contains :</p>
        </div>

        {/* Check out */}

        <div className="flex items-center ">
          <p className="text-black font-bold text-2xl mx-2">Summary:</p>
          <p className="text-orange-600 font-bold text-2xl mx-4">$ {userCart.totalPrice}</p>
          <button className="rounded-full px-4 hover:bg-white duration-500 hover:text-black border-2 border-black bg-black text-white p-2">
            CHECK OUT
          </button>
        </div>
      </div>

      {/*cart items */}
      <div className="w-full md:px-12 lg:px-12 px-2">
 
        {/* an item */}
    {userCart?.cartItems?.map((item, index)=>(
          <div key={index} className="flex w-full flex-wrap justify-between items-center p-2">
          {/* img */}
          <div className="h-[200px]  flex-1 mx-2 min-w-[200px]">
            <img
              className="w-full h-full object-cover"
              src={item.product.imageUrl}alt=""
            />
          </div>

          {/* desc */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-2xl font-bold mb-2">{item.product.title}</p>
           
            <select className="w-[100px] border-2 p-2 mb-4" name="" id="">
              
              <option value={item.size}>{item.size}</option>
            
            </select>
          </div>

          {/* Quantity */}
          <div className="flex-1 mb-3 mx-2 min-w-[200px]">
            <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
              Quantity
            </p>
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={item.quantity}
            />
          </div>

          {/* total price */}
          <div className="flex flex-1">
            {/* Price */}
            <div className=" mx-2 min-w-[190px]">
              <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
                Price
              </p>
              <p className="text-[20px] md:text-2xl lg:text-2xl text-orange-600 mb-6">
                $ {item?.price}
              </p>
            </div>

            {/* Total */}
            <div className="mx-2 min-w-[190px]">
              <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
                Total
              </p>
              <p className="text-[20px] md:text-2xl lg:text-2xl text-orange-600 mb-6">
                $ { item?.price * item?.quantity}
              </p>
            </div>
          </div>
           {/* remove btn */}
          <div onClick={()=>removeCartItems(item._id)} className="flex-1 ">
            <button className="bg-red-500 text-white p-[10px] border-2 duration-300 border-red-500 hover:bg-white hover:text-red-500">Remove</button>
          </div>
        </div>
    ))}
           

      </div>
      {/* News */}
      <News />
    </div>
  );
};

export default CartItems;
