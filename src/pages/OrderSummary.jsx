import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import bills from "../components/data/bills.json"
import { useWalletContext } from "../components/contexts/walletContext";
import toast from "react-hot-toast";
const OrderSummary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('type');
    const provider = searchParams.get('provider');
    const amount = searchParams.get('amount');
    const [billDetails, setBillDetails] = useState({})
    const {payBill} = useWalletContext();
    const navigate = useNavigate();

    const handlePay = async () => {
      try {
        if (amount) {
          let total = amount;
          await payBill(id, total);
          toast.success("Bill Paid Succefully", {
            position: 'top-center'
          })
          navigate('/transactions');
        }
        else {
          toast.error("Invalid Amount", {
            position: 'top-center'
          })

          navigate(-1)
        }
      }

      catch (error) {
        toast.error("An Error Occured!! Try again later", {
          position: 'top-center'
        })

        navigate(-1)
      }
    }

    useEffect(() => {
      for (let bill of bills) {
        if (bill?.id == id) {
          setBillDetails(bill);
        }
      }
    })

    
  return (
    <div className="flex-grow flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-4xl sm:grid sm:grid-cols-3 gap-6 flex flex-wrap justify-center h-full">
        {/* Order Summary */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg h-[60vh]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex">
            <img src={billDetails?.image} className="rounded-full w-20 h-20 object-cover" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{billDetails?.name}</h3>
              <p className="text-gray-600">{billDetails?.id}</p>
              <p className="text-gray-600">{provider}</p>
            </div>
            <div className="ml-auto text-xl font-semibold text-gray-800">
              Eth {amount}
            </div>
          </div>
        </div>

        {/* Checkout */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>
          <div className="space-y-4">
            <button onClick={handlePay} className="w-full py-2 bg-blue-600 text-white rounded-md">
              Pay from wallet
            </button>
            {/* <button className="w-full py-2 bg-gray-200 text-gray-800 rounded-md">
              Pay from main account
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
