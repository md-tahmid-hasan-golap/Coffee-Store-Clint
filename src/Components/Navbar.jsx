import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(user);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successfully!",
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
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-600 text-white rounded-md px-3 py-1 font-semibold transition-colors mr-4"
            : "text-gray-700 px-3 py-1 rounded-md hover:bg-blue-200 hover:text-white transition-colors mr-4"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/allCoffees"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-600 text-white rounded-md px-3 py-1 font-semibold transition-colors"
            : "text-gray-700 px-3 py-1 rounded-md hover:bg-blue-200 hover:text-white transition-colors"
        }
      >
        <li>All Coffee's</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Coffee Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3 mr-4">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              className="border border-blue-400 h-10 w-10 rounded-full"
              src={user.photoURL}
              alt="User Avatar"
              title={user.displayName}
            />
            {/* Name - only show on md and above */}
            <span className="hidden md:inline font-medium">
              {user.displayName}
            </span>
            <button onClick={handleLogOut} className="btn ml-2">
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/signIn" className="btn">
              Login
            </Link>
            <Link to="/registation" className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
