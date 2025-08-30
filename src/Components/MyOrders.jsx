import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import axios from "axios";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/my-orders/${user?.email}`)
      .then((res) => {
        setOrders(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Order ID: <span className="text-sm text-gray-600">{order._id}</span>
          </h3>

          <p className="text-gray-700 mb-4">
            <span className="font-medium">Customer Email:</span>{" "}
            {order.customarEmail}
          </p>

          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
            Cancel Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
