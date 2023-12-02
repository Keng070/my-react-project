import { FaCartArrowDown, FaChevronRight } from "react-icons/fa6";
import News from "../components/News";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiCloseLine, RiHeartLine, RiSearch2Line } from "react-icons/ri";
import Sticky from "react-sticky-el";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [productData, setProductData] = useState([]);
  
  const navigate = useNavigate();

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
  const getAllProducts = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${api}/api/products`, {
        method: "GET",
      });
      if (res.ok) {
        setLoading(false);
      } else {
        console.log(res);
        setLoading(false);
      }
      const data = await res.json();
      setProductData(data.content);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const addToCart = async (productId, size) => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/api/cart/add`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: productId,
          size: size,
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
    getAllProducts();
  }, []);


  return (
    <div>
      {/* headline */}

      <div className="overflow-hidden max-w-[1640px] h-[200px] lg:h-[300px] md:h-[300px] relative m-auto">
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
        <div className="absolute right-0  bottom-0 p-6 bg-gradient-to-r from-custom-blue/0 to-custom-blue/90">
          <p className="text-4xl mb-6 text-white text-shadow">
            New Collections
          </p>
          <p className="text-white text-shadow drop-shadow-lg">
            Effortless. Iconic. Adored
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>

      {/* Paths */}
      <div className="flex text-custom-blue cursor-pointer max-w-[1640px] m-auto p-2 md:p-6 lg:p-6 items-center ">
        <p className="text-[20px]">Home</p>
        <FaChevronRight className=" mx-3" />
        <p className="text-[20px]">Products</p>
      </div>
      {/* Mobile filter Modal */}
      <div
        className={
          !filterModal
            ? "fixed top-[-110%] md:hidden duration-300 lg:hidden h-[100vh] bg-black/40 w-full m-auto z-50"
            : "fixed top-[0%] md:hidden lg:hidden  duration-300 h-[100vh] bg-black/40 w-full m-auto z-50"
        }
      >
        <div className="border-[2px] m-auto  w-[95%] bg-white  relative min-w-[250px] rounded-b-[20px] p-6">
          {/* gender */}

          {/* Close button */}
          <button className="absolute p-2 hover:bg-orange-600 duration-300 hover:text-white top-4 right-4 border-orange-600 rounded-full border-2 ">
            <RiCloseLine onClick={() => setFilterModal(false)} size={30} />
          </button>
          <div className="py-6">
            <p className="text-2xl py-2 px-1 text-custom-blue font-bold">
              Your selections
            </p>
            <div className="h-[2px] bg-orange-600"></div>
          </div>
          <div className="flex  flex-col ">
            <p className="text-2xl  font-bold">Gender</p>
            <label
              htmlFor="Men"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Men" />
              <p>Men</p>
            </label>
            <label
              htmlFor="Women"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Women" />
              Women
            </label>
          </div>

          {/* Brands */}
          <ul>
            <p className="text-2xl font-bold">Brands</p>
            <label
              htmlFor="Nike"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Nike" />
              Nike
            </label>
            <label
              htmlFor="Adidas"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Adidas" />
              Adidas
            </label>
            <label
              htmlFor="Fila"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Fila" />
              Fila
            </label>
            <label
              htmlFor="Gucci"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Gucci" />
              Gucci
            </label>

            <label
              htmlFor="Louise"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="Louise" />
              Louise
            </label>
            <label
              htmlFor="Lacoste"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="lacoste" />
              Lacoste
            </label>
          </ul>

          {/* Sizes */}
          <ul>
            <p className="text-2xl font-bold">Sizes</p>
            <label
              htmlFor="XS"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="XS" />
              XS
            </label>
            <label
              htmlFor="S"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="S" />S
            </label>
            <label
              htmlFor="M"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="M" />M
            </label>
            <label
              htmlFor="L"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="L" />L
            </label>
            <label
              htmlFor="XL"
              className="flex cursor-pointer hover:text-orange-600"
            >
              <input type="checkbox" className="mr-2" id="XL" />
              XL
            </label>
          </ul>
          <button className="w-full p-2 mt-4 cursor-pointer hover:opacity-60 text-white text-[17px] bg-custom-blue">
            Submit
          </button>
        </div>
      </div>
      {/* product contents */}
      <div className="flex  flex-col max-w-[1640px] px-2 lg:px-12 md:px-12 m-auto">
        <div className="text-[20px] py-2 md:py-6 lg:py-6 relative flex-row-reverse md:justify-start lg:justify-start justify-between flex md:flex-row  lg:flex-row w-full items-center ">
          {/* Sort by */}
          <div
            type="button"
            onClick={() => setDropDown(true)}
            className="flex  items-center duration-300 hover:bg-orange-600 hover:text-white justify-center cursor-pointer border-orange-600 border-[2px] rounded-full p-2 md:mr-10 lg:mr-10"
          >
            <p className="mr-2 md:flex lg:flex hidden text-[15px]">Sort by </p>{" "}
            <FaSortAmountDown size={20} />
          </div>
          {/* Mobile filter */}
          <button
            onClick={() => setFilterModal(true)}
            className="border-2 md:hidden lg:hidden rounded-full p-2  hover:bg-custom-blue hover:text-white duration-300  px-2 text-[15px] border-custom-blue"
          >
            Filter
          </button>
          <ul
            onMouseLeave={() => setDropDown(false)}
            className={
              dropDown
                ? "absolute bottom-[-85px] flex-colleft-8  z-20 rounded-md custom-box-shadow bg-white p-1 "
                : "hidden "
            }
          >
            <li className="cursor-pointer p-1 hover:bg-custom-blue hover:text-white">
              Value hihi
            </li>
            <li className="cursor-pointer p-1 hover:bg-custom-blue hover:text-white">
              Value nono{" "}
            </li>
            <li className="cursor-pointer p-1 hover:bg-custom-blue hover:text-white">
              Value
            </li>
          </ul>{" "}
          {/* search results */}
          <form
            action=""
            className="bg-gray-200 border-2 p-2 rounded-full flex items-center justify-center"
          >
            <button>
              <RiSearch2Line size={30} />
            </button>
            <input
                type="text"
              className="border-none flex-1 px-4 outline-none bg-black/0"
              placeholder="Search"
            />
          </form>
          <p className="ml-10 hidden md:flex lg:flex"> Results:</p>
        </div>
v
        {/* Product */}
        <div className="flex justify-between w-full">
          {/* menu */}

          <div className="w-[400px] hidden md:flex lg:flex ">
            <Sticky className="z-10  w-full ">
              <div className="border-[2px] bg-white  relative min-w-[250px]  p-4">
                {/* gender */}
                <div className="py-6">
                  <p className="text-2xl py-2 px-1 text-custom-blue font-bold">
                    Your selections
                  </p>
                  <div className="h-[2px] bg-orange-600"></div>
                </div>
                <div className="flex  flex-col ">
                  <p className="text-2xl  font-bold">Gender</p>
                  <label
                    htmlFor="Men"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Men" />
                    <p>Men</p>
                  </label>
                  <label
                    htmlFor="Women"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Women" />
                    Women
                  </label>
                </div>

                {/* Brands */}
                <ul>
                  <p className="text-2xl font-bold">Brands</p>
                  <label
                    htmlFor="Nike"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Nike" />
                    Nike
                  </label>
                  <label
                    htmlFor="Adidas"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Adidas" />
                    Adidas
                  </label>
                  <label
                    htmlFor="Fila"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Fila" />
                    Fila
                  </label>
                  <label
                    htmlFor="Gucci"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Gucci" />
                    Gucci
                  </label>

                  <label
                    htmlFor="Louise"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="Louise" />
                    Louise
                  </label>
                  <label
                    htmlFor="Lacoste"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="lacoste" />
                    Lacoste
                  </label>
                </ul>

                {/* Sizes */}
                <ul>
                  <p className="text-2xl font-bold">Sizes</p>
                  <label
                    htmlFor="XS"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="XS" />
                    XS
                  </label>
                  <label
                    htmlFor="S"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="S" />S
                  </label>
                  <label
                    htmlFor="M"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="M" />M
                  </label>
                  <label
                    htmlFor="L"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="L" />L
                  </label>
                  <label
                    htmlFor="XL"
                    className="flex cursor-pointer hover:text-orange-600"
                  >
                    <input type="checkbox" className="mr-2" id="XL" />
                    XL
                  </label>
                </ul>
              </div>
            </Sticky>
          </div>
          {/*All Products */}
          <div className=" w-full flex flex-wrap">
            {/* single product */}

            {productData?.map((item, index) => (
              <div
                key={index}
                className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
              >
                <img
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="h-[65%] w-full  object-cover"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
                  <p className="font-bold my-1 text-center">{item.title}</p>
                  <p className="text-orange-600 text-[20px] mb-2">
                    $ {item.price}
                  </p>

                  <div className="flex hovered-actions w-full items-center justify-center">
                    <button
                      onClick={() => addToCart(item._id, item.sizes[0].name)}
                      className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2"
                    >
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
        </div>
      </div>
      <News />
    </div>
  );
};

export default Products;
