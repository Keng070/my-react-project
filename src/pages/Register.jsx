import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData , setFormData] = useState({})
  const navigate = useNavigate();
  const onHandleChange = (e)=>{
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }
  console.log(formData)
  return (
    <div className="ma-w-[1640px] flex items-center justify-center m-auto h-[100vh] bg-[url(https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex items-center justify-center backdrop-blur-md bg-black/40">
        <div className="flex bg-white custom-box-shadow">
          <form
            className="flex flex-col w-[400px] items-center justify-center md:px-12 lg:px-12 p-8"
            action=""
          >
            <p className="text-2xl mb-6 font-bold">Register</p>
            <input name="username" onChange={onHandleChange}
              className="text-[17px] w-full p-2 mb-6 border-b-2 border-custom-blue focus:outline-none"
              type="text"
              placeholder="Username"
            />
            <input name="email" onChange={onHandleChange}
              className="text-[17px] w-full p-2 mb-6 border-b-2 border-custom-blue focus:outline-none"
              type="email"
              placeholder="Email Address"
            />
            <input name="password" onChange={onHandleChange}
              className="text-[17px] p-2 w-full mb-8 border-b-2 border-custom-blue focus:outline-none"
              type="password"
              placeholder="Password"
            />
            <button className="border-custom-blue mb-2  border-2 duration-500 text-white hover:text-custom-blue hover:bg-white  rounded-full bg-custom-blue w-full p-2">
              Register
            </button>
            <p className="text-[17px] flex md:hidden lg:hidden mb-2">
              Already have an account?
            </p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-orange-600 w-full items-center justify-center rounded-full flex md:hidden lg:hidden  hover:bg-white/30 duration-500 hover:text-orange-600 cursor-pointer px-4 p-2 text-white border-2 border-orange-600"
            >
              <p>Login</p>
            </button>
          </form>
          <div className="w-[400px] overflow-hidden md:flex lg:flex hidden relative custom2-box-shadow rounded-l-[30px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="absolute py-10 p-6 bottom-0 w-full bg-gradient-to-t from-black/60 to-black/0 ">
              <p className="text-2xl text-white font-bold text-shadow">
                Welcome
              </p>
              <p className="mb-8 text-white text-shadow">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quae, saepe nam
              </p>
              <button         type="button"
              onClick={() => navigate("/login")} className="bg-orange-600 hover:bg-white/30 duration-500 hover:text-orange-600 cursor-pointer px-4 p-2 text-white border-2 border-orange-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
