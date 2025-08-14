import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import CoffeeCard from "./CoffeeCard";

const MyAddedCoffees = () => {
  const { user } = useContext(AuthContext);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myAddedCoffee/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, [user?.email]);
  return (
    <div className="px-4 py-10 md:px-16 lg:px-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
        My Added Coffees
      </h2>

      {/* Coffee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} showActions={true} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedCoffees;
