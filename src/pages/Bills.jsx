import React from "react";
import BillCard from "../components/BillsCard";
import bills from "../components/data/bills.json";

const Bills = () => {
  return (
    <div className="bg-[#F0F8FF] min-h-screen py-12 px-4 sm:px-12">
      <h1 className="text-4xl font-bold text-[#0D7DCF] mb-8">
        Pay Your Bills
      </h1>
      <p className="text-lg text-[#8B8B8B] text-center mb-12">
        Select a bill from the list below to pay securely and conveniently.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
