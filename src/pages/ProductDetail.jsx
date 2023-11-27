import { FaRegStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { RiHeartLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import News from "../components/News";

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1640px]  m-auto">
      {/* The product */}
      <div className=" md:pt-[150px] md:px-16 lg:px-16  lg:pt-[150px] pt-[50px] flex w-full flex-wrap">
        {/* image */}
        <div className="h-[400px] min-w-[400px] flex-1 mx-4">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
        {/* desc */}
        <div className="flex-1 min-w-[400px] flex flex-col p-2 md:px-10 lg:px-10">
          <p className="text-2xl font-bold mb-6">New Collection Shirt</p>
          <div className="flex text-orange-600 mb-6">
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
          </div>
          <p className="text-[20px] mb-6">
            Vitae, fugit maxime? Corrupti, ut qui, rem possimus facilis magni
            sint minima voluptates praesentium architecto distinctio aliquid
            suscipit repellat.
          </p>
          <p className="text-2xl md:text-2xl lg:text-2xl text-orange-600 mb-6">
            $ 1000
          </p>
          <select className="w-[100px] border-2 p-2 mb-4" name="" id="">
            <option value="Sizes" disabled selected>Sizes</option>
            <option value="XL">XL</option>
            <option value="XL">XL</option>
            <option value="XL">XL</option>
          </select>
          <form className="flex items-center mb-6" action="">
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={1}
            />
            <button className="text-[15px] mx-2 font-bold p-[12px] hover:bg-white duration-500 hover:text-orange-600 hover:border-2 border-orange-600 bg-orange-600 text-white">
              Add to cart
            </button>
            <RiHeartLine className="cursor-pointer" size={30}/>
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
        <div
          onClick={() => navigate("/product-detail")}
          className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
        >
          <img
            className="h-[65%] w-full  object-cover"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
            <p className="font-bold my-1 text-center">
              ENGLAND 1990 BLACK-OUT SHIRT BLACK
            </p>
            <p className="text-orange-600 text-[20px] mb-2">$ 800</p>
            {/* Actions */}
            <div className="flex hovered-actions w-full items-center justify-center">
              <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                <FaCartArrowDown size={17} />
              </button>
              <button className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2">
                View
              </button>
              <RiHeartLine className="mx-2 cursor-pointer " size={30} />
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/product-detail")}
          className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
        >
          <img
            className="h-[65%] w-full  object-cover"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
            <p className="font-bold my-1 text-center">
              ENGLAND 1990 BLACK-OUT SHIRT BLACK
            </p>
            <p className="text-orange-600 text-[20px] mb-2">$ 800</p>
            {/* Actions */}
            <div className="flex hovered-actions w-full items-center justify-center">
              <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                <FaCartArrowDown size={17} />
              </button>
              <button className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2">
                View
              </button>
              <RiHeartLine className="mx-2 cursor-pointer " size={30} />
            </div>
          </div>
        </div>{" "}
        <div
          onClick={() => navigate("/product-detail")}
          className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
        >
          <img
            className="h-[65%] w-full  object-cover"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
            <p className="font-bold my-1 text-center">
              ENGLAND 1990 BLACK-OUT SHIRT BLACK
            </p>
            <p className="text-orange-600 text-[20px] mb-2">$ 800</p>
            {/* Actions */}
            <div className="flex hovered-actions w-full items-center justify-center">
              <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                <FaCartArrowDown size={17} />
              </button>
              <button className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2">
                View
              </button>
              <RiHeartLine className="mx-2 cursor-pointer " size={30} />
            </div>
          </div>
        </div>{" "}
        <div
          onClick={() => navigate("/product-detail")}
          className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
        >
          <img
            className="h-[65%] w-full  object-cover"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
            <p className="font-bold my-1 text-center">
              ENGLAND 1990 BLACK-OUT SHIRT BLACK
            </p>
            <p className="text-orange-600 text-[20px] mb-2">$ 800</p>
            {/* Actions */}
            <div className="flex hovered-actions w-full items-center justify-center">
              <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                <FaCartArrowDown size={17} />
              </button>
              <button className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2">
                View
              </button>
              <RiHeartLine className="mx-2 cursor-pointer " size={30} />
            </div>
          </div>
        </div>{" "}
        <div
          onClick={() => navigate("/product-detail")}
          className="flex-1 hoverer-actions cursor-pointer hover:border-2 min-w-[200px] h-[450px] max-w-[300px] m-1 flex items-center  flex-col"
        >
          <img
            className="h-[65%] w-full  object-cover"
            src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex flex-col h-[30%] w-full  items-center justify-center bg-white">
            <p className="font-bold my-1 text-center">
              ENGLAND 1990 BLACK-OUT SHIRT BLACK
            </p>
            <p className="text-orange-600 text-[20px] mb-2">$ 800</p>
            {/* Actions */}
            <div className="flex hovered-actions w-full items-center justify-center">
              <button className=" cursor-pointer rounded-full bg-orange-600 hover:bg-white hover:border-orange-600 hover:border-2 duration-500 hover:text-orange-600  p-3 text-white mx-2">
                <FaCartArrowDown size={17} />
              </button>
              <button className="cursor-pointer rounded-full text-[19px] text-custom-blue border-2 duration-500 hover:bg-custom-blue hover:text-white border-custom-blue p-2 py-1 mx-2">
                View
              </button>
              <RiHeartLine className="mx-2 cursor-pointer " size={30} />
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <News />
    </div>
  );
};

export default ProductDetail;
