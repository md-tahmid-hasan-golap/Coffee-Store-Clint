import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, price, quantity, supplier, taste } = coffee;

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
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-yellow-400 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View
          </button>
          <button className="flex-1 bg-green-400 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-green-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Edit
          </button>
          <button className="flex-1 bg-red-400 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
