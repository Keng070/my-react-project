import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import myImages from "../assets/images/weblogoWhite.png";
import { RiSendPlane2Fill, RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-wrap m-auto bg-custom-blue max-w-[1640px] py-6 md:py-10 lg:py-10 md:px-12 lg:px-12 ">
      {/* content 1 */}
      <div className=" flex flex-1 flex-col min-w-[200px] m-2">
        <div className="text-white w-full">
          <img className="mb-3 object-contain" src={myImages} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, voluptas voluptatem! Ad ducimus illo vel perferendis
            repellat? Quaerat
          </p>
        </div>
        {/* socials */}
        <div className="flex mt-6 w-full">
          <FaFacebook
            className="m-2 hover:text-orange-600 cursor-pointer text-white"
            size={30}
          />
          <FaInstagram
            className="m-2 hover:text-orange-600 cursor-pointer text-white"
            size={30}
          />
          <FaXTwitter
            className="m-2 hover:text-orange-600 cursor-pointer text-white"
            size={30}
          />
          <RiTiktokLine
            className="m-2 hover:text-orange-600 cursor-pointer text-white"
            size={30}
          />
        </div>
      </div>

      {/* content 2 */}
      <div className=" flex flex-1  flex-col min-w-[200px] m-2">
        <h1 className="text-2xl text-white font-bold mb-7">Quik Links</h1>
        <ul className="text-white text-[17px] cursor-pointer">
          <li className="mb-3 hover:text-orange-600"> Favorites</li>
          <li className="mb-3 hover:text-orange-600">Men</li>
          <li className="mb-3 hover:text-orange-600">Women</li>
          <li className="mb-3 hover:text-orange-600">Brands</li>
          <li className="mb-3 hover:text-orange-600">Collections</li>
          <li className="mb-3 hover:text-orange-600">About Us</li>
          <li className="mb-3 hover:text-orange-600">Contact</li>
        </ul>
      </div>

      {/* Content 3  */}
      <div className=" flex flex-1 flex-col min-w-[200px] m-2">
        <h1 className="text-2xl text-white font-bold mb-7">Contact</h1>
        <ul className="text-white text-[17px] cursor-pointer">
          <li className="mb-3 hover:text-orange-600">+856 2055446677</li>
          <li className="mb-3 hover:text-orange-600">
            Ecommercestore@gmail.com
          </li>
          <li className="mb-3 hover:text-orange-600">Dankham , Sikottabong</li>
          <li className="mb-3 hover:text-orange-600">Vientiane , Laos</li>
          <li className="mb-3 hover:text-orange-600">Collections</li>
          <li className="mb-3 hover:text-orange-600">Sikottabong avenue</li>
        </ul>
      </div>

      {/* Content 4 */}
      <div className=" flex flex-col min-w-[200px] m-2">
        <p className="text-2xl  mb-4 text-white">Subscrip To Our Email</p>
        <p className="text-4xl mb-10 font-bold text-white">
          For Latest News & Updates
        </p>
        <div className="w-full flex justify-between bg-white p-2 px-2 rounded-full">
          <input
            type="text"
            className="flex-1 outline-none rounded-full px-2 "
            placeholder="Send Here ..."
          />
          <button className=" rounded-full h-full text-white hover:bg-custom-blue bg-orange-600 p-4">
            <RiSendPlane2Fill size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
