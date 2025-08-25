import axios from "axios";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, showActions = false }) => {
  const { _id, name, quantity, supplier, taste, price, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/coffeeDelete/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
      {/* Coffee Image */}
      {photo && (
        <img src={photo} alt={name} className="w-full h-48 object-cover" />
      )}

      {/* Coffee Info */}
      <div className="p-5 space-y-2">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-sm md:text-base text-gray-600">
          Quantity: {quantity}
        </p>
        <p className="text-sm md:text-base text-gray-600">
          Supplier: {supplier}
        </p>
        <p className="text-sm md:text-base text-gray-600">Taste: {taste}</p>
        <p className="text-sm md:text-base font-semibold">Price: ${price}</p>
      </div>

      {/* Buttons */}
      <div className="p-5 pt-0 mt-auto flex flex-col sm:flex-row gap-2">
        <Link
          to={`/coffee-details/${_id}`}
          className="btn btn-info w-full sm:w-auto"
        >
          Details
        </Link>
        {showActions && (
          <>
            <Link
              to={`/updadedCoffee/${_id}`}
              className="btn btn-warning w-full sm:w-auto"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error w-full sm:w-auto"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CoffeeCard;
