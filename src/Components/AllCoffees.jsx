import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const AllCoffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data?.data || []);
  // console.log(data.data);
  return (
    <div className="my-7">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 my-6">
        All Coffees
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default AllCoffees;
