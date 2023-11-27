import { FaChevronRight } from "react-icons/fa6";
import News from "../components/News";
import { RiShoppingCart2Line } from "react-icons/ri";

const CartItems = () => {
  return (
    <div className="m-auto max-w-[1640px]">
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
          <p className="text-orange-600 font-bold text-2xl mx-4">$ 1000</p>
          <button className="rounded-full px-4 hover:bg-white duration-500 hover:text-black border-2 border-black bg-black text-white p-2">
            CHECK OUT
          </button>
        </div>
      </div>

      {/*cart items */}
      <div className="w-full md:px-12 lg:px-12 px-2">
        {/* an item */}
        <div className="flex w-full flex-wrap justify-between items-center p-2">
          {/* img */}
          <div className="h-[200px]  flex-1 mx-2 min-w-[200px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>

          {/* desc */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-2xl font-bold mb-2">New Collection Shirt</p>
            <p className="text-[20px] mb-2">
              sint minima voluptates praesentium architecto distinctio aliquid
              suscipit repellat.
            </p>
            <select className="w-[100px] border-2 p-2 mb-4" name="" id="">
              <option value="Sizes" disabled selected>
                Sizes
              </option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
              Quantity
            </p>
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={1}
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
                $ 1000
              </p>
            </div>

            {/* Total */}
            <div className="mx-2 min-w-[190px]">
              <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
                Total
              </p>
              <p className="text-[20px] md:text-2xl lg:text-2xl text-orange-600 mb-6">
                $ 1000
              </p>
            </div>
          </div>
        </div>
        <hr />
           {/* an item */}
           <div className="flex w-full flex-wrap justify-between items-center p-2">
          {/* img */}
          <div className="h-[200px]  flex-1 mx-2 min-w-[200px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>

          {/* desc */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-2xl font-bold mb-2">New Collection Shirt</p>
            <p className="text-[20px] mb-2">
              sint minima voluptates praesentium architecto distinctio aliquid
              suscipit repellat.
            </p>
            <select className="w-[100px] border-2 p-2 mb-4" name="" id="">
              <option value="Sizes" disabled selected>
                Sizes
              </option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
              Quantity
            </p>
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={1}
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
                $ 1000
              </p>
            </div>

            {/* Total */}
            <div className="mx-2 min-w-[190px]">
              <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
                Total
              </p>
              <p className="text-[20px] md:text-2xl lg:text-2xl text-orange-600 mb-6">
                $ 1000
              </p>
            </div>
          </div>
        </div>
        <hr />   {/* an item */}
        <div className="flex w-full flex-wrap justify-between items-center p-2">
          {/* img */}
          <div className="h-[200px]  flex-1 mx-2 min-w-[200px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>

          {/* desc */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-2xl font-bold mb-2">New Collection Shirt</p>
            <p className="text-[20px] mb-2">
              sint minima voluptates praesentium architecto distinctio aliquid
              suscipit repellat.
            </p>
            <select className="w-[100px] border-2 p-2 mb-4" name="" id="">
              <option value="Sizes" disabled selected>
                Sizes
              </option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="flex-1 mx-2 min-w-[200px]">
            <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
              Quantity
            </p>
            <input
              className="border-2 p-2 px-4 w-[100px] border-custom-blue text-2xl"
              type="number"
              defaultValue={1}
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
                $ 1000
              </p>
            </div>

            {/* Total */}
            <div className="mx-2 min-w-[190px]">
              <p className="text-[20px] md:text-2xl lg:text-2xl font-bold text-custom-blue mb-4">
                Total
              </p>
              <p className="text-[20px] md:text-2xl lg:text-2xl text-orange-600 mb-6">
                $ 1000
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/* News */}
      <News />
    </div>
  );
};

export default CartItems;
