import React from "react";

const OrderSummary = () => {
  return (
    <div className="flex-grow flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-4xl sm:grid sm:grid-cols-3 gap-6 flex flex-wrap justify-center h-full">
        {/* Order Summary */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg h-[60vh]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center">
            <img src="" className="rounded-full w-20 h-20 object-cover" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Bill name</h3>
              <p className="text-gray-600">ID or number</p>
              <p className="text-gray-600">Provider name</p>
            </div>
            <div className="ml-auto text-xl font-semibold text-gray-800">
              Eth 10
            </div>
          </div>
        </div>

        {/* Checkout */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>
          <div className="space-y-4">
            <button className="w-full py-2 bg-blue-600 text-white rounded-md">
              Pay from wallet
            </button>
            <button className="w-full py-2 bg-gray-200 text-gray-800 rounded-md">
              Pay from main account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
