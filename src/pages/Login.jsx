import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const api = import.meta.env.VITE_API_URL;
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
  const handleChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  };

  const onLogin =  async()=>{
    try {
      setLoading(true)
      const res = await fetch(`${api}/api/auth/signin`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setLoading(false);
        navigate("/products"); // Replace "/success" with the desired URL
      } else {
        setLoading(false);
      }
      const data = await res.json()
      localStorage.setItem('user', data.jwt);

      if (data.jwt) {
        successPopUp(data.message);
      } else {
        wariningPopUp(data.error);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (formData.password.length < 8) {
      wariningPopUp("The Password is less than 8 characters")
    }else{
      onLogin()
    }
  }


  return (
    <div className="ma-w-[1640px] flex items-center justify-center m-auto h-[100vh] bg-[url(https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-center bg-cover bg-no-repeat">
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
      <div className="w-full h-full flex items-center justify-center backdrop-blur-md bg-black/40">
        <div className="flex bg-white custom-box-shadow">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[400px] items-center justify-center md:px-12 lg:px-12 p-8"
          >
            <p className="text-2xl mb-6 font-bold">Login</p>

            <input
              required
              onChange={handleChange}
              name="email"
              className="text-[17px] w-full p-2 mb-6 border-b-2 border-custom-blue focus:outline-none"
              type="email"
              placeholder="Email Address"
            />
            <input
              required
              onChange={handleChange}
              name="password"
              className="text-[17px] p-2 w-full mb-8 border-b-2 border-custom-blue focus:outline-none"
              type="password"
              placeholder="Password"
            />
            <button className="border-custom-blue mb-2  border-2 duration-500 text-white hover:text-custom-blue hover:bg-white  rounded-full bg-custom-blue w-full p-2">
              Login
            </button>
            <p className="text-[17px] flex md:hidden lg:hidden mb-2">
              No account yet?
            </p>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="bg-orange-600 w-full items-center justify-center rounded-full flex md:hidden lg:hidden  hover:bg-white/30 duration-500 hover:text-orange-600 cursor-pointer px-4 p-2 text-white border-2 border-orange-600"
            >
              <p>Register</p>
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
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="bg-orange-600 hover:bg-white/30 duration-500 hover:text-orange-600 cursor-pointer px-4 p-2 text-white border-2 border-orange-600"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
