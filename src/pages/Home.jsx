import Hero from "../components/Hero";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaChevronRight, FaPersonChalkboard } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import News from "../components/News";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Loading/> */}

      <Hero />
      {/* Head line card */}
      <div className="max-w-[1640px] lg:py-16 md:py-16 py-5 m-auto md:px-12 lg:px-12  flex flex-wrap items-center justify-center">
        {/* cards */}
        <div className=" cursor-pointer rounded-xl h-[400px] m-5 flex-1 min-w-[400px] overflow-hidden relative">
          <div className="absolute p-2 bottom-[0px] w-full z-10 flex items-center justify-center flex-col bg-white/70">
            <div className="bg-custom-blue text-[12px] p-1 px-3 rounded-full text-white">
              Men
            </div>
            <p className="font-bold">TSTM Unisex Premium Limited</p>
          </div>
          <img
            className="w-full  h-full object-cover hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className=" cursor-pointer rounded-xl h-[400px] m-5 flex-1 min-w-[400px] overflow-hidden relative">
          <div className="absolute p-2 bottom-[0px] w-full z-10 flex items-center justify-center flex-col bg-white/70">
            <div className="bg-custom-blue text-[12px] p-1 px-3 rounded-full text-white">
              Men
            </div>
            <p className="font-bold">TSTM Unisex Premium Limited</p>
          </div>
          <img
            className="w-full  h-full object-cover hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1610384466709-9b83df910cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>{" "}
        <div className=" cursor-pointer rounded-xl h-[400px] m-5 flex-1 min-w-[400px] overflow-hidden relative">
          <div className="absolute p-2 bottom-[0px] w-full z-10 flex items-center justify-center flex-col bg-white/70">
            <div className="bg-custom-blue text-[12px] p-1 px-3 rounded-full text-white">
              Men
            </div>
            <p className="font-bold">TSTM Unisex Premium Limited</p>
          </div>
          <img
            className="w-full h-full object-cover hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
      </div>

      {/* products */}
      <div className=" flex  m-auto max-w-[1640px] p-2 pb-7 md:px-14 lg:px-14 items-center justify-between">
        <div className="flex">
          <FaShopify size={30} className="mr-4 text-orange-600" />
          <p className="text-2xl text-custom-blue font-bold">Shopping</p>
        </div>

        {/* More */}
        <div
          onClick={() => navigate("/products")}
          className="text-[20px] p-2 border-custom-blue  duration-300 px-4 hover:bg-custom-blue hover:text-white border-[1px] rounded-full flex cursor-pointer items-center justify-center text-custom-blue font-bold"
        >
          <p className="mr-2">More</p> <FaChevronRight />
        </div>
      </div>
      <div className="flex m-auto lg:px-12  flex-wrap min-h-[200px] max-w-[1640px] ">
        <div className="flex-1 min-w-[400px] flex flex-wrap bg-white m-1">
          <div className="w-full h-[300px] home-page-card cursor-pointer relative md:h-full  lg:w-full bg-black">
            <img
              className="w-full duration-300 h-full object-cover"
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              className="absolute bottom-0 w-full   p-4 text-white bg-gradient-to-r  from-yellow-500/40 to-red-500 drop-shadow-md left-0"
            >
              <p className="font-bold text-2xl md:text-4xl lg:max-w-[400px] md:max-w-[400px] lg:text-4xl">
                TSTM Unisex Premium Limited
              </p>
              <p className="lg:max-w-[400px] md:max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsa, voluptate architecto laudantium ex sint nihil
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[400px] flex flex-wrap bg-white m-1">
          <div className="flex-1 home-page-card w-[100%] cursor-pointer relative min-h-[300px] min-w-[200px] bg-black m-1">
            {" "}
            <img
              className="w-full duration-300 h-full object-cover"
              src="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="absolute bottom-0 w-full  p-4 text-white bg-gradient-to-t  from-black/60 to-black/0 drop-shadow-md left-0">
              <p
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="font-bold  md:text-2xl lg:max-w-[400px] md:max-w-[400px] lg:text-2xl"
              >
                TSTM Unisex Premium Limited
              </p>
            </div>
          </div>
          <div className="home-page-card w-[100%] cursor-pointer flex-1 relative min-h-[300px] min-w-[200px] bg-black m-1">
            {" "}
            <img
              className="w-full duration-300 h-full object-cover"
              src="https://images.unsplash.com/photo-1563389234808-52344934935c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
            <div className="absolute bottom-0 w-full  p-4 text-white bg-gradient-to-t  from-black/60 to-black/0 drop-shadow-md left-0">
              <p
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="font-bold  md:text-2xl lg:max-w-[400px] md:max-w-[400px] lg:text-2xl"
              >
                TSTM Unisex Premium Limited
              </p>
            </div>
          </div>
          <div className="flex-1 home-page-card w-[100%] cursor-pointer relative  min-h-[300px] min-w-[200px] bg-black m-1">
            {" "}
            <img
              className="w-full duration-300 h-full object-cover"
              src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
            <div className="absolute bottom-0 w-full  p-4 text-white bg-gradient-to-t  from-black/60 to-black/0 drop-shadow-md left-0">
              <p
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="font-bold  md:text-2xl lg:max-w-[400px] md:max-w-[400px] lg:text-2xl"
              >
                TSTM Unisex Premium Limited
              </p>
            </div>
          </div>
          <div className="  home-page-card w-[100%] cursor-pointer relative min-h-[300px] min-w-[150px] bg-black m-1">
            {" "}
            <img
              className="w-full duration-300 h-[300px] object-cover"
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              className="absolute bottom-0 w-full   p-4 text-white bg-gradient-to-t  from-black/60 to-black/0 drop-shadow-md left-0"
            >
              <p className="font-bold text-2xl md:text-4xl lg:max-w-[400px] md:max-w-[400px] lg:text-4xl">
                TSTM Unisex Premium Limited
              </p>
              <p className="lg:max-w-[400px] md:max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsa, voluptate architecto laudantium ex sint nihil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="flex flex-wrap m-auto max-w-[1640px] py-6 md:py-16 lg:py-16 md:px-12 lg:px-12 ">
        <div className="flex-1 items-center justify-center flex min-w-[400px] m-2 shadow-md rounded-[15px] p-3">
          {" "}
          <div>
            <p className=" text-2xl text-custom-blue">FREE SHIPPING</p>
            <p>
              Voluptatum, laudantium! Aliquam obcaecati provident doloribus
              eveniet tenetur laborum{" "}
            </p>
          </div>
          <div className="m-3">
            {" "}
            <LiaShippingFastSolid className="text-custom-blue" size={70} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center min-w-[400px] m-2 shadow-md rounded-[15px] p-3">
          {" "}
          <div>
            <p className=" text-2xl text-custom-blue">30 DAYS RETURN</p>
            <p>
              Voluptatum, laudantium! Aliquam obcaecati provident doloribus
              eveniet tenetur laborum{" "}
            </p>
          </div>
          <div className="m-3">
            <FaPersonChalkboard className="text-custom-blue" size={70} />
          </div>
        </div>
        <div className="flex-1 min-w-[400px]  flex items-center justify-center m-2 shadow-md rounded-[15px] p-3">
          {" "}
          <div>
            <p className=" text-2xl text-custom-blue">100% SECURE</p>
            <p>
              Voluptatum, laudantium! Aliquam obcaecati provident doloribus
              eveniet tenetur laborum{" "}
            </p>
          </div>
          <div className="m-3">
            <RiSecurePaymentLine className="text-custom-blue" size={70} />
          </div>
        </div>
      </div>

      {/* News */}
      <News />
    </div>
  );
};
