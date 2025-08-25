import React, { useContext } from "react";
import LoginLottie from "../assets/Lottie/registerLottie.json"; // ফাইল নাম ঠিক করলাম
import Lottie from "lottie-react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={LoginLottie} loop={true}></Lottie>
        </div>

        {/* Login Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-4">Login Now!</h1>
            <form onSubmit={handleLogin} className="form-control space-y-3">
              {/* Email */}
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />

              {/* Password */}
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />

              {/* Submit Button */}
              <button className="btn btn-neutral mt-4 w-full">Login</button>
            </form>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline"
            >
              <FcGoogle size={25} /> Sign In With Google
            </button>
          </div>
          <p className="text-center pb-5">
            Already Does't Have An Account{" "}
            <Link to="/Register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
