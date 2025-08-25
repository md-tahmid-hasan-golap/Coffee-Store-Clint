import React, { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffee = useLoaderData();
  const [coffees, setCoffee] = useState(coffee);
  console.log(coffees);
  return (
    <div>
      <Banner></Banner>
      <div className="mb-7">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-6">
          <span className="text-[#C49A6C]">Our</span> Popular{" "}
          <span className="text-[#4B2E2E]">Coffees</span>
        </h2>

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
