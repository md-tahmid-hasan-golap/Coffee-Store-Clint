import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const AllCoffees = () => {
  const coffee = useLoaderData();
  const [coffees, setCoffees] = useState(coffee);
  return (
    <div className="mb-7">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-6 text-[#4B2E2E]">
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
