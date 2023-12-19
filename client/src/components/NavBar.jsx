import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserCog,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userPopUp, setUserPopUp] = useState(false);
  // if (userPopUp) {
  //   console.log("hello,window")
  //   window.onclick = function () {
  //     setUserPopUp(false);
  //   };
  // }
  console.log(currentUser?.photoURL);
  return (
    <div className="shadow-xl ">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to={"/"} className="flex items-center gap-x-2">
          <h2 className="font-serif text-2xl italic ">EduSyncZone</h2>
        </Link>
        <div
          className={`absolute ${
            isOpen === true ? "top-[83px] bg-white shadow-xl" : "-top-[400px]"
          }  md:static  w-full md:w-auto left-0 transition-all duration-300 delay-300 ease-in z-40 md:block `}
        >
          <ul className="menu-cs flex md:flex-row flex-col gap-x-4 items-center">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li className="menu-item">
              <Link to="/">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-3 items-center relative ">
          {/* user display */}
          <div className="relative ">
            <div
              onClick={() => setUserPopUp(!userPopUp)}
              className="border p-4 h-[52px] w-[52px] rounded-full overflow-hidden block cursor-pointer relative"
            >
              {currentUser?.photoURL && (
                <img
                  src={currentUser?.photoURL}
                  className="absolute bg-cover object-cover top-0 left-0"
                  alt="user photo"
                />
              )}
              {!currentUser?.photoURL && (
                <FaUser className="text-xl font-bold" />
              )}
            </div>

            {/* user details list  */}
            <div
              className={`absolute shadow-2xl rounded top-[70px] right-0 before:content-[''] before:w-5 before:h-5 before:bg-gray-50 before:absolute before:-top-[10px] bg-gray-50 before:right-4 before:rotate-45 min-w-[200px]  transition-all duration-300 delay-100 ease-linear z-30 text-gray-600 ${
                userPopUp ? "block" : "hidden"
              }`}
            >
              <ul className=" relative">
                {/* user route start */}
                <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                  <Link
                    to="/profile/user"
                    className="flex items-center gap-x-2"
                  >
                    <FaUser /> User Panel
                  </Link>
                </li>
                {/* user route end */}

                {/* adim route start */}
                <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                  <Link
                    to="/dashboard/admin/home"
                    className="flex items-center gap-x-2"
                  >
                    <FaUserCog /> Admn Panel
                  </Link>
                </li>
                {/* adim route end */}

                {/* login button start */}
                {!currentUser && (
                  <>
                    <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                      <Link to="/login" className="flex items-center gap-x-2">
                        <FaSignInAlt /> Login
                      </Link>
                    </li>
                  </>
                )}
                {/* login button end */}
                {/* logout button start */}
                {currentUser && (
                  <li
                    // onClick={() => logOutHandler()}
                    className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear"
                  >
                    <button className="flex items-center gap-x-2">
                      <FaSignOutAlt /> Log Out
                    </button>
                  </li>
                )}
                {/* logout button end */}
              </ul>
            </div>
          </div>
          {/* cart icon */}
          <div className=" p-4 h-[52px] w-[52px] rounded-full overflow-hidden block cursor-pointer relative">
            <FaShoppingCart className="text-xl " />
          </div>
          {/* cart icon */}
         
          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="font-light text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
