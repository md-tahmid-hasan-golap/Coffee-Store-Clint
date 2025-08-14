import React, { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data?.data || []);
  //   console.log(coffees);
  return (
    <div>
      <Banner></Banner>

      <div className="mb-7">
        <h1 className="text-3xl text-center md:text-5xl font-bold mb-6">
          Featured Coffees
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
