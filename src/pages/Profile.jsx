import { FaRegEdit, FaRegTimesCircle } from "react-icons/fa";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('user')

  const successPopUp = (reason) => {
    toast.success(`${reason}`, { //success popup
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
    toast.warn(`${reason}`, { //waring popup
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

  const getUserProfile = async ()=>{
    try {
      setLoading(true)
      const res = await fetch(`${api}/api/users/profile`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(res.ok){
        setLoading(false)
      } else{
         setLoading(false)
      }
      const data =await res.json()
      if(data){
        setUserData(data)
      }else{
        wariningPopUp(data.error)
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
useEffect(()=>{
  if(!token){
    ""
  }else{
    getUserProfile()
  }
},[token])


     return (
    <div style={{ backgroundImage: `url(${userData.avatar})`}} className="bg-center bg-cover bg-no-repeat">
      <div className="w-full py-9 md:py-16 lg:py-16"></div>

      <div className="max-w-[1640px] flex m-auto justify-center flex-wrap ">
        {loading ? <Loading/>:""}
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
        {/* User Detail */}
        <form className="flex-1 mb-2 mr-5 bg-white/40 backdrop-blur-md max-w-[400px] min-w-[400px] p-4 px-12 flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
            <img
              className="w-full h-full object-cover"
              src={userData.avatar}
              alt=""
            />
          </div>
          <input
            type="text"
            className="border-none mb-4 text-[20px] text-center font-bold p-[7px] px-4 bg-white/40"
            placeholder="user name"
            defaultValue={userData.username}
          />
          <input
            type="text"
            className="border-none mb-4 text-[20px] text-center font-bold p-[7px] px-4 bg-white/40"
            placeholder="user email"
            defaultValue={userData.email}
          />
          <input
            type="password"
            placeholder="user password"
            defaultValue={"hihihi"}
            className="border-none mb-6 text-[20px] text-center font-bold p-[7px] px-4 bg-white/40"
            disabled
          />
          <button className="text-[19px] hover:bg-white/40 duration-500 hover:text-custom-blue p-2 text-white border-custom-blue border-2 rounded-full bg-custom-blue w-[70%]">
            Save
          </button>
        </form>

        {/* Order list */}
        <div className="flex-1 flex  flex-col  overflow-auto  min-w-[400px] bg-white">
          <div className="border-b-2">
            <p className="text-[20px] p-2 px-4 font-bold">Your Order List :</p>
          </div>

          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 font-bold text-md border-r">#</th>
                <th className="py-2 px-4 font-bold text-md border-r">Status</th>
                <th className="py-2 px-4 font-bold text-md border-r">
                  Ordered Date
                </th>
                <th className="py-2 px-4 font-bold text-md border-r">Items</th>
                <th className="py-2 px-4 font-bold text-md border-r">Total</th>

                <th className="py-2 px-4 font-bold text-md border-r">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 cursor-pointer">
                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <p>1</p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <p className="text-orange-600">Pending</p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <p>01/12/2023</p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <p>3</p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <p className="text-custom-blue ">$ 800</p>
                  </div>
                </td>

                <td className="py-4 px-4 border-b">
                  <div className="flex items-center justify-center">
                    <FaRegEdit
                      className="mx-2  cursor-pointer text-custom-blue"
                      size={25}
                    />
                    <FaRegTimesCircle
                      className="mx-2 cursor-pointer text-red-500"
                      size={25}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
