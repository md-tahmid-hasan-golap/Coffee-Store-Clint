import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Login from "../assets/Lottie/Login.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, SignInWithGoggle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    SignInWithGoggle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "SignIn Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg px-4 sm:px-6 lg:px-20">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-16">
        {/* Lottie animation */}
        <div className="w-full lg:w-1/2 max-w-md">
          <Lottie animationData={Login} loop={true} className="w-full h-auto" />
        </div>

        {/* Login card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body space-y-4">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
              </div>

              <div className="text-right">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral w-full mt-4">
                Login
              </button>
            </form>

            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
            >
              <FcGoogle size={25} />
              Sign In With Google
            </button>

            <p className="text-center py-3 text-sm">
              Don't Have An Account?{" "}
              <Link to="/registation" className="text-blue-500 font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
