import React, { useContext } from "react";
import RegisterLotti from "../assets/Lottie/registerLottie.json";
import Lottie from "lottie-react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const { creatUser } = useContext(AuthContext);
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
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, address, phone, email, password });
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Registation Successfully!",
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
          <Lottie animationData={RegisterLotti} loop={true}></Lottie>
        </div>

        {/* Register Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-4">
              Register Now!
            </h1>
            <form onSubmit={handleRegister} className="form-control space-y-2">
              {/* Name */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />

              {/* Address */}
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
                placeholder="Enter your address"
                required
              />

              {/* Phone Number */}
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="input input-bordered w-full"
                placeholder="Enter your phone number"
                required
              />

              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />

              {/* Submit Button */}
              <button className="btn btn-neutral mt-4 w-full">Register</button>
            </form>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline"
            >
              <FcGoogle size={25} /> Sign In With Google
            </button>
          </div>

          <p className="text-center pb-5">
            Adready Have An Account{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
