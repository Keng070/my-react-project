const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rate Menu Items
      </h1>
      {/* Filter row */}{" "}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              All
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              Burgers
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              Pizza
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              Salads
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex w-full max-w-[390px]">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              $
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              $$
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              $$$
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl p-1 px-2 m-1">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* All foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
        <div className="border shadow-lg duration-300 overflow-hidden rounded-t-lg ">
          <img
            className="w-full h-[200px] hover:scale-110 duration-300 object-cover "
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex justify-between items-center p-2">
            <p className="font-bold">Doctor Pizza</p>
            <p>
              <span className=" text-white bg-orange-600 rounded-full border px-2 ">
                100$
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
