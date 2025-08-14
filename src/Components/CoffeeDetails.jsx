import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

const CoffeeDetails = () => {
  const coffeeDetailsData = useLoaderData();
  const {
    name,
    photo,
    price,
    quantity,
    supplier,
    taste,
    details,
    email,
    likedBy,
  } = coffeeDetailsData;

  return (
    <div className="px-4 py-10 md:px-16 lg:px-24">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-200"
      >
        ← Back to Home
      </Link>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
        Coffee Details
      </h2>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 p-6">
        {/* Coffee Image */}
        <div className="lg:w-1/2">
          <img
            src={photo}
            alt={name}
            className="w-full h-64 lg:h-full object-cover rounded-lg"
          />
        </div>

        {/* Coffee Info */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Details:</span> {details}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Added by:</span> {email}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Likes:</span> {likedBy.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
