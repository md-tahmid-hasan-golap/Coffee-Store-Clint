import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import CoffeeCard from "./CoffeeCard";

const MyAddedCoffees = () => {
  const { user } = useContext(AuthContext);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myAdded-coffee/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, [user?.email]);
  return (
    <div className="mb-7">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-6 text-[#4B2E2E]">
        My Added Coffee's
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            showActions={true}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCoffees;
