import React from "react";
import transactions from "../components/data/transactions.json";
import { truncateAddress } from "../components/utils";

const Transactions = () => {
  return (
    <div className="bg-[#F0F8FF] min-h-screen py-12 px-4 sm:px-12">
      <h1 className="text-4xl font-bold text-[#0D7DCF] mb-8">
        Transaction History
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#0D99FF] text-white">
              <th className="py-3 px-6 text-left">Transaction ID</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Bill Type</th>
              <th className="py-3 px-6 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="py-3 px-6">{transaction.id}</td>
                <td className="py-3 px-6">${transaction.amount}</td>
                <td className="py-3 px-6 truncate">
                  {truncateAddress(transaction.address)}
                </td>
                <td className="py-3 px-6">{transaction.billType}</td>
                <td className="py-3 px-6">{new Date(transaction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
