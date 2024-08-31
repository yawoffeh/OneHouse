import React, { useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request';
import { truncateAddress } from "../components/utils";
import transactions from "../components/data/transactions.json"

// Subgraph query for transactions
const query = gql`
{
  paymentMades(first: 10) {
    id
    payer
    amount
    billType
    timestamp
  }
}`;
const API_KEY = process.env.REACT_APP_API_KEY_SUBGRAPH
const url = `https://gateway-testnet-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/DL6dDczp6U8aN6bEQCtTxeQVwKDTpBBwBqnQSxPnYegR`;

const Transactions = () => {
  // const { getMyTransactions } = useWalletContext();

  // Fetch transactions from the Subgraph
  const { data, status, isLoading, error } = useQuery({
    queryKey: ['transactions'],
    async queryFn() {
      return await request(url, query);
    },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
      
    }
  }, [error]);

  return (
    <div className="bg-[#F0F8FF] min-h-screen py-12 px-4 sm:px-12">
      <h1 className="text-4xl font-bold text-[#0D7DCF] mb-8">
        Transaction History
      </h1>

      {status === 'loading' ? (
        <p>Loading transactions...</p>
      ) : status === 'error' ? (
        <p>Error fetching transactions.</p>
      ) : (
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
                <tr key={transaction?.id} className="border-b">
                  <td className="py-3 px-6">{transaction?.id}</td>
                  <td className="py-3 px-6">Eth {transaction?.amount}</td>
                  <td className="py-3 px-6 truncate">
                    {truncateAddress(transaction?.payer)}
                  </td>
                  <td className="py-3 px-6">{transaction?.billType}</td>
                  <td className="py-3 px-6">
                    {new Date(transaction?.timestamp * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transactions;
