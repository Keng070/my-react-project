import "../assets/Default.css";
const Hero = () => {
  return (
    <div id="hihi" className="max-w-[1640px] mx-auto mt-[50px] ">
      <div className="max-h-[550px]   relative">
        {/* Overlay */}
        <div className="  flex-col lg:w-[45%] h-[550px]  min-w-[400px]  text-white flex   justify-center p-7 ">
          <h1 className="font-bold text-4xl m-5">NEW FASHION COLLECTIONS</h1>
          <div className="h-[2px] w-[150px] mx-5 bg-orange-600" />
          <p className="text-[20px] m-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            nostrum provident fugit, nemo voluptates accusamus sit cumque veniam
          </p>
          <div className="m-5 mx-6  ">
            {" "}
            <button className="border-2 border-orange-600  p-4 px-6 rounded-full duration-300 hover:bg-orange-600 text-white">Take a look</button>
          </div>
        </div>
        {/* <img
          className="w-full md:w-full max-h-[500px] object-cover"
          src={myImagesHero1}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Hero;
