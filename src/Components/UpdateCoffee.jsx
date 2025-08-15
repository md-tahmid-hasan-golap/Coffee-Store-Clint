import axios from "axios";
import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, photo, price, quantity, supplier, taste, details } = data;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updedValueData = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };
    // এখানে axios দিয়ে update API call করতে পারো
    axios
      .put(`http://localhost:3000/coffee-updded/${_id}`, updedValueData)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Upded Coffee Successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-10 md:px-16 lg:px-24">
      {/* Back Button */}
      <Link
        to="/myAddedCoffes"
        className="inline-flex items-center gap-2 px-3 py-2 mt-4 bg-amber-500 rounded-md hover:bg-amber-600 hover:text-white transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back To MyAddedCoffes
      </Link>

      {/* Heading */}
      <div className="p-6 md:p-12 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Update Coffee
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Update the coffee information below. Make sure all fields are accurate
          before submitting.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              defaultValue={name}
              placeholder="Coffee Name"
            />
          </fieldset>

          {/* Quantity */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              defaultValue={quantity}
              placeholder="Quantity Name"
            />
          </fieldset>

          {/* Supplier */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              defaultValue={supplier}
              placeholder="Supplier Name"
            />
          </fieldset>

          {/* Taste */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              defaultValue={taste}
              placeholder="Taste Name"
            />
          </fieldset>

          {/* Price */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              defaultValue={price}
              placeholder="Price per Cup"
            />
          </fieldset>

          {/* Details */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              defaultValue={details}
              placeholder="Details Name"
            />
          </fieldset>
        </div>

        {/* Photo */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            defaultValue={photo}
            placeholder="Photo URL"
          />
        </fieldset>

        {/* Submit */}
        <input
          type="submit"
          className="btn btn-primary w-full text-sm md:text-base"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
