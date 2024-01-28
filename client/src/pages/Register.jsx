import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import googleHandlear from "../utils/GoogleLog";
import Swal from "sweetalert2";
const Register = () => {
  const { emailAndPass } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    emailAndPass(email, password)
      .then((res) => {
        fetch("https://student-portal-server-beta.vercel.app/users", {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        Swal.fire({
          title: "Good job!",
          text: "You have successfully logged in.",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-14 mb-20 bg-gray-100 rounded mx-auto max-w-4xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 ">
        <img
          src="/Tablet-login-cuate.png"
          className="h-3/4 w-full object-cover md:h-full block "
          alt=""
        />
        <div className="self-center py-4">
          <h1 className="text-4xl font-bold text-center">Register</h1>
          {/* {err && <h3 className=" my-4 p-2 rounded bg-rose-600">{err} </h3>} */}
          <button
            onClick={() => googleHandlear("register")}
            className="bg-white shadow flex gap-x-4 p-4 rounded w-full justify-center my-4 "
          >
            <img src="/google.png" className="w-6" alt="" />
            <span className="text-gray-800 font-semibold">
              Continue With Google
            </span>
          </button>
          <div className="text-center text-lg font-semibold">Or</div>
          <form className="space-y-4" onSubmit={registerHandler}>
            <div>
              <label htmlFor="email" className="text-xl">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 outline-blue-600 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-xl">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 outline-blue-600 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="submit"
                value="Register"
                className="bg-blue-500 text-white px-4 py-2 rounded text-xl"
              />
            </div>
            <p className="">
              All ready have accoutn?{" "}
              <Link to={"/login"} className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
