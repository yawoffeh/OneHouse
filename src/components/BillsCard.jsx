import React from "react";
import { Link } from "react-router-dom";

const BillCard = ({ bill }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <img
        src={bill.image}
        alt={`${bill.name} icon`}
        className="h-20 w-20 mb-4 mx-auto"
      />
      <h2 className="text-xl font-bold text-gray-800">{bill.name}</h2>
      <p className="text-gray-600 mb-4">{bill.description}</p>
      <Link to={`/pay/${bill.id}`}>
        <button className="bg-[#0D99FF] py-2 px-4 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none">
          Pay
        </button>
      </Link>
    </div>
  );
};

export default BillCard;
