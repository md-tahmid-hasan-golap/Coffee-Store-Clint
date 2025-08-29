import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "logOut Successfully!",
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

  // all links
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCoffees"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white  btn mr-2" : "btn mr-2"
          }
        >
          All Coffee's
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  btn mr-2" : "btn mr-2"
              }
            >
              Add Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myAddedCoffees"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  btn mr-2" : "btn mr-2"
              }
            >
              My Added Coffee's
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myOrders"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  btn mr-2" : "btn mr-2"
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left - Logo + Dropdown for small device */}
      <div className="navbar-start">
        {/* Dropdown (small screen) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl md:text-3xl font-bold text-[#4B2E2E]">
          <span className="text-[#C49A6C]">Coffee</span> Store
        </a>
      </div>

      {/* Center - Links (only visible on large screen) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">{links}</ul>
      </div>

      {/* Right - Auth buttons */}
      {user ? (
        <div className="navbar-end gap-3">
          <img
            className="rounded-full w-10 md:w-12 h-10 md:h-12 border-2 border-green-700"
            src={user?.photoURL}
            title={user?.displayName}
            alt=""
          />
          <h2 className="text-2xl hidden md:flex font-medium">
            {user?.displayName}
          </h2>
          <button onClick={handleLogout} className="btn text-red-600">
            LogOut
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <Link to="/register" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
