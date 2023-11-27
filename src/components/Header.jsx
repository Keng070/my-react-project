import { useState } from "react";
import {
  RiAccountCircleLine,
  RiCheckboxCircleLine,
  RiCloseLine,
  RiCustomerServiceFill,
  RiGroupLine,
  RiHeartLine,
  RiInformationLine,
  RiMenu2Fill,
  RiPriceTag3Line,
  RiQuestionLine,
  RiSearch2Line,
  RiServiceLine,
  RiShirtLine,
  RiShoppingCart2Line,
  RiThumbUpLine,
  RiTruckLine,
  RiWalletLine,
} from "react-icons/ri";
import { GrUser, GrUserFemale } from "react-icons/gr";
import myImages from "../assets/images/weblogo.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const [nav, setNav] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [openCart, setOpenCart] = useState(false);
const navigate =useNavigate()
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <div className="  bg-white w-full mx-auto  justify-between lg:justify-around fixed top-0 z-30 flex  p-2 lg:p-2 shadow-md">
      {/* Left side */}
      <div className="flex items-center ">
        <div
          onClick={() => setNav(!false)}
          className="cursor-pointer lg:hidden"
        >
          <RiMenu2Fill size={30} />
        </div>
        <div className="h-[50px] min-w-[110px] ">
          <Link to={"/"}>
            <img
              className="w-full h-full object-contain"
              src={myImages}
              alt="weblogo"
            />
          </Link>
        </div>
      </div>
      {/* Search input */}
      <div
        onClick={() => setMobileSearch(true)}
        className="bg-gray-200 relative  cursor-pointer rounded-full flex items-center px-4 ml-[110px] lg:ml-0  lg:w-[500px]"
      >
        <RiSearch2Line size={25} />
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Search"
          className="bg-transparent p-2 w-full hidden lg:flex focus:outline-none "
        />

        {/* Search results */}
        <div
          className={
            isInputFocused
              ? "md:w-[400px]  lg:w-full  w-[400px] absolute top-[220%] md:top-[110%] lg:top-[110%] custom-box-shadow left-[-450%]  md:left-[-500%] lg:left-0 p-4 z-40 rounded-b-[17px] bg-white"
              : "md:w-[400px] lg:w-full hidden w-[400px] absolute top-[220%] md:top-[110%] lg:top-[110%] custom-box-shadow left-[-450%]  md:left-[-500%] lg:left-0 p-4 z-40 rounded-b-[17px] bg-white"
          }
        >
          <div className="flex w-full items-center duration-300 mb-2 cursor-pointer hover:bg-custom-blue hover:text-white justify-cener">
            <div className="h-[70px] w-[25%] mr-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold">ENGLAND 1990 BLACK-OUT SHIRT BLACK</p>
              <p>Voluptatum, laudantium! Aliquam obcaecati</p>
            </div>
          </div>
          <hr />
          <div className="flex w-full items-center duration-300 mb-2 cursor-pointer hover:bg-custom-blue hover:text-white justify-cener">
            <div className="h-[70px] w-[25%] mr-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold">ENGLAND 1990 BLACK-OUT SHIRT BLACK</p>
              <p>Voluptatum, laudantium! Aliquam obcaecati</p>
            </div>
          </div>
          <hr />{" "}
          <div className="flex w-full items-center duration-300 mb-2 cursor-pointer hover:bg-custom-blue hover:text-white justify-cener">
            <div className="h-[70px] w-[25%] mr-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold">ENGLAND 1990 BLACK-OUT SHIRT BLACK</p>
              <p>Voluptatum, laudantium! Aliquam obcaecati</p>
            </div>
          </div>
          <hr />{" "}
          <div className="flex w-full items-center duration-300 mb-2 cursor-pointer hover:bg-custom-blue hover:text-white justify-cener">
            <div className="h-[70px] w-[25%] mr-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold">ENGLAND 1990 BLACK-OUT SHIRT BLACK</p>
              <p>Voluptatum, laudantium! Aliquam obcaecati</p>
            </div>
          </div>
          <hr />{" "}
          <div className="flex w-full items-center duration-300 mb-2 cursor-pointer hover:bg-custom-blue hover:text-white justify-cener">
            <div className="h-[70px] w-[25%] mr-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold">ENGLAND 1990 BLACK-OUT SHIRT BLACK</p>
              <p>Voluptatum, laudantium! Aliquam obcaecati</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* Screen search */}
      <div
        className={
          mobileSearch
            ? "w-full bg-white lg:hidden duration-150 md:hidden flex justify-center absolute bottom-[-55px] items-center p-2"
            : "duration-150 absolute bottom-[200px]"
        }
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Search"
          className="p-2 px-4 bg-gray-200 rounded-full w-[300px] mx-2"
        />{" "}
        <RiCloseLine
          onClick={() => setMobileSearch(false)}
          size={30}
          className="hover:bg-orange-600 cursor-pointer border-[2px] hover:border-none border-black hover:text-white  rounded-full duration-300"
        />
      </div>
      {/* Right side */}
      {/* Account */}
      <div className="flex">
        <div onClick={()=>navigate('/login')} className="hidden md:flex mx-5 text-custom-blue hover:text-orange-600 flex-col items-center cursor-pointer">
          <RiAccountCircleLine size={30} />
          <span className="font-bold">Login</span>
        </div>
        {/* Favorite */}
        <div className="flex-col hidden md:flex text-custom-blue hover:text-orange-600 mx-5 items-center cursor-pointer">
          <RiHeartLine size={30} />
          <span className="font-bold">Favorite</span>
        </div>
        {/* Cart button */}
        <div className="flex relative  mx-5 items-center justify-center ">
          <button
            onClick={() => setOpenCart(true)}
            className="bg-orange-600  duration-300 text-white  p-3 items-center
    rounded-full hover:bg-white border  hover:border-orange-600 hover:text-orange-600"
          >
            <RiShoppingCart2Line size={25} />
          </button>

          {/* Cart Items */}
          {openCart ? (
            <div className="absolute md:w-[400px] lg:w-[400px] w-[370px] m-2 cursor-pointer p-2 rounded-[15px] custom-box-shadow z-40 bg-white right-0 top-4">
              <div className="flex w-full justify-between p-2">
                <RiShoppingCart2Line
                  className="text-orange-600 mr-4"
                  size={30}
                />
                <p className="text-2xl text-custom-blue">Cart Items</p>
                <RiCloseLine
                  onClick={() => setOpenCart(false)}
                  className="border-2 rounded-full text-2xl p-1 border-custom-blue"
                  size={40}
                />
              </div>
              <hr />
              {/* all items */}
              <div className="w-full ">
                {/* an items */}
                <div className="w-full mb-2 flex items-center ">
                  {/* Image */}
                  <div className="h-[100px] w-[150px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>

                  {/* desc */}
                  <div className="mx-2">
                    <p className="font-bold">TSTM Unisex Premium Limited</p>
                    <p className="text-orange-600">$ 800</p>
                  </div>
                </div>
                <hr />
                {/* an items */}
                <div className="w-full mb-2 flex items-center ">
                  {/* Image */}
                  <div className="h-[100px] w-[150px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>

                  {/* desc */}
                  <div className="mx-2">
                    <p className="font-bold">TSTM Unisex Premium Limited</p>
                    <p className="text-orange-600">$ 800</p>
                  </div>
                </div>
                <hr />
                {/* an items */}
                <div className="w-full mb-2 flex items-center ">
                  {/* Image */}
                  <div className="h-[100px] w-[150px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>

                  {/* desc */}
                  <div className="mx-2">
                    <p className="font-bold">TSTM Unisex Premium Limited</p>
                    <p className="text-orange-600">$ 800</p>
                  </div>
                </div>
                <hr />
              </div>

              {/* Buttons */}
              <button onClick={()=>navigate('/cart-items')} className="w-full text-[17px] hover:bg-custom-blue duration-500 hover:text-white p-2 mb-2 border-2 text-custom-blue border-custom-blue rounded-[15px]">
                VIEW ALL
              </button>
              <button className="wifull text-[17px] duration-500 p-2 hover:bg-white hover:text-orange-600 hover:border-orange-600 border-2 bg-orange-600 w-full rounded-[15px] text-white">
                CHECK OUT
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Mobile menu  */}
      {/* Overlay */}
      {nav ? (
        <div
          onClick={() => setNav(false)}
          className="bg-black/80 fixed w-full  h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <RiCloseLine
          onClick={() => setNav(false)}
          size={30}
          className="absolute top-4 right-4 cursor-pointer "
        />

        {/* Profile */}
        <div className="p-9 mb-4">
          <div className="h-[70px] w-[70px]">
            <img
              className="object-cover w-full h-full mb-3"
              src="https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg"
              alt=""
            />

            <button className="bg-custom-blue text-white p-[5px] px-4 duration-300 rounded-full hover:bg-orange-600 ">
              Login
            </button>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col p-4 cursor-pointer  text-gray-800 ">
            <li className="text-1xl   hover:text-orange-600 text-custom-blue flex p-3">
              <RiHeartLine size={25} className="mr-4" /> Favorites
            </li>{" "}
            <li className="text-1xl  hover:text-orange-600 text-custom-blue  flex p-3">
              <GrUser size={25} className="mr-4" /> Men
            </li>
            <li className="text-1xl   hover:text-orange-600 text-custom-blue flex p-3">
              <GrUserFemale size={25} className="mr-4" /> Women
            </li>{" "}
            <li className="text-1xl   hover:text-orange-600 text-custom-blue flex p-3">
              <RiCheckboxCircleLine size={25} className="mr-4" /> Brands
            </li>{" "}
            <li className="text-1xl   hover:text-orange-600 text-custom-blue flex p-3">
              <RiShirtLine size={25} className="mr-4" /> Collections
            </li>{" "}
            <li className="text-1xl   hover:text-orange-600 text-custom-blue flex p-3">
              <RiInformationLine size={25} className="mr-4" /> About Us
            </li>{" "}
            <li className="text-1xl  hover:text-orange-600 text-custom-blue  flex p-3">
              <RiCustomerServiceFill size={25} className="mr-4" /> Contact
            </li>
          </ul>
        </nav>
      </div>
      {/* Dropdowns */}
      <div className="hidden font-bold  md:flex lg:flex shadow-md  justify-center w-full p-1 items-center bg-opacity-70 backdrop-blur-sm bg-white absolute border border-t-2 bottom-[-54%]">
        <select
          className="mx-5 text-[19px]  bg-opacity-0 bg-white   cursor-pointer"
          name=""
          id=""
        >
          <option value="hhi">Men</option>
        </select>
        <select
          className="mx-5  bg-opacity-0 bg-white  text-[19px]  cursor-pointer"
          name=""
          id=""
        >
          <option value="hhi">Women</option>
          <option value="hhi">Women</option>
          <option value="hhi">Women</option>
        </select>{" "}
        <select
          className="mx-5 bg-opacity-0 bg-white  text-[19px]  cursor-pointer"
          name=""
          id=""
        >
          <option value="hhi">Brands</option>
        </select>{" "}
        <select
          className="mx-5 bg-opacity-0 bg-white  text-[19px]  cursor-pointer"
          name=""
          id=""
        >
          <option value="hhi">Collections</option>
        </select>
      </div>
    </div>
  );
};

export default Header;