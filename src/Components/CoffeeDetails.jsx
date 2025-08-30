import axios from "axios";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const CoffeeDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [coffee, setCoffee] = useState(data);
  const { _id, name, price, details, taste, quantity, supplier, photo } =
    coffee;

  // handle Orders
  const handleOrders = () => {
    const orderInfo = {
      coffeeId: _id,
      customarEmail: user?.email,
    };
    axios
      .post(`http://localhost:3000/orders/${_id}`, orderInfo)
      .then((res) => {
        setCoffee((prev) => {
          return { ...prev, quantity: prev.quantity - 1 };
        });
        if (res.data.insertedId) {
          Swal.fire({
            title: "Order Suessfully!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-10 md:px-16 lg:px-24">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-6 text-[#4B2E2E]">
        Coffee Details
      </h2>

      {/* Coffee Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-base-100 shadow-xl rounded-xl p-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* Info */}
        <div className="space-y-3 text-gray-700">
          <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
          <p>
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Details:</span> {details}
          </p>

          {/* Order Button */}
          <button
            onClick={handleOrders}
            className="btn btn-primary mt-4 w-full md:w-auto"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
