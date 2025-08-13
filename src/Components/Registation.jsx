import React, { useContext } from "react";
import register from "../assets/Lottie/Register.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Registation = () => {
  const { creatUser, SignInWithGoggle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    SignInWithGoggle()
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
    const number = form.number.value;
    const address = form.address.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, number, address, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg px-4 sm:px-6 lg:px-20">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-16">
        {/* Lottie animation */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={register} className="w-full h-auto" />
        </div>

        {/* Registration card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-6">
              Registration now!
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
              {/* My Name */}
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />
              </div>

              {/* My Mobile */}
              <div>
                <label className="label">Mobile</label>
                <input
                  type="number"
                  name="number"
                  className="input w-full"
                  placeholder="Mobile"
                />
              </div>
              {/* My Address */}
              <div>
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  placeholder="Address"
                />
              </div>
              {/* My Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </div>

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
              <button className="btn btn-neutral w-full mt-4">Register</button>
            </form>
            <button onClick={handleGoogle} className="btn btn-outline">
              <FcGoogle size={25} />
              Sign In With Google
            </button>
            <p className="text-center py-3">
              Already Have An Account ?{" "}
              <Link to="/signIn" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
