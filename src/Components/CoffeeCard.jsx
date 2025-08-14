import axios from "axios";
import React from "react";
import { GrView } from "react-icons/gr";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, showActions = false }) => {
  const { _id, name, photo, price, quantity, supplier, taste } = coffee;
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
          .delete(`http://localhost:3000/coffees-delete/${_id}`)
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
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Coffee Image */}
      <img src={photo} alt={name} className="w-full h-48 object-cover" />

      {/* Coffee Details */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Supplier:</span> {supplier}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Taste:</span> {taste}
        </p>

        {/* Optional Actions */}
        <div className="flex gap-2 mt-4 justify-center">
          <Link
            to={`/coffeesDetails/${_id}`}
            className="bg-yellow-400 text-white p-2 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <GrView size={25} />
          </Link>
          {showActions && (
            <>
              <Link
                to={`/updateCoffee/${_id}`}
                className="bg-green-400 text-white p-2 rounded-full shadow-md hover:bg-green-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <MdOutlineModeEdit size={25} />
              </Link>
              <button className="bg-red-400 text-white p-2 rounded-full shadow-md hover:bg-red-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                <MdDelete onClick={() => handleDelete(_id)} size={25} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
