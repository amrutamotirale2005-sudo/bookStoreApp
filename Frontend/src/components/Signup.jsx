import React, { useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {  
  const location = useLocation ();
  const navigate = useNavigate();
  const from= location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const useInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:4001/users/signup", useInfo)
      .then((res) => {
        console.log(res.data);
        if(res.data){
          toast.success("Signup Successful! Please Login.");
          navigate (from, { replace: true });
        }
        localStorage.setItem("Users",JSON.stringify(res.data.users));
      })
      .catch((err) => {
        if(err.response){
        console.log(err);
        toast.error("Error:"+ err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">

            {/* FORM START */}
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Full Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span><br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span><br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span><br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-around items-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Signup"}
                </button>

                <div className="text-lg">
                  Have account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </div>
              </div>

            </form>
            {/* FORM END */}

          </div>
        </div>
      </div>

      {/* Login modal */}
      <Login />
    </>
  );
}

export default Signup;
