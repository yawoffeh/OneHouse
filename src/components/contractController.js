import { ethers } from "ethers";
import abi from "./abi.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contractAddress = process.env.REACT_APP_contractAddress;
const contractABI = abi

const contract = new ethers.Contract(contractAddress, contractABI, signer);

export const payBill = async (billType, amount) => {
    try {
      const tx = await contract.payBill(billType, { value: ethers.utils.parseEther(amount) });
      await tx.wait();
      return tx;
    } catch (error) {
      console.error("Error paying bill:", error);
      throw error;
    }
  };
  
  export const getAllTransactions = async () => {
    try {
      const transactions = await contract.getAllTransactions();
      return transactions;
    } catch (error) {
      console.error("Error fetching all transactions:", error);
      throw error;
    }
  };
  
  export const getTransactionCount = async () => {
    try {
      const count = await contract.getTransactionCount();
      return count.toNumber();
    } catch (error) {
      console.error("Error fetching transaction count:", error);
      throw error;
    }
  };
  
  export const getTransaction = async (id) => {
    try {
      const transaction = await contract.getTransaction(id);
      return transaction;
    } catch (error) {
      console.error("Error fetching transaction by ID:", error);
      throw error;
    }
  };
  
  export const getUserTransactions = async (userAddress) => {
    try {
      const transactions = await contract.getUserTransactions(userAddress);
      return transactions;
    } catch (error) {
      console.error("Error fetching user transactions:", error);
      throw error;
    }
  };
  
  export const getMyTransactions = async () => {
    try {
      const myTransactions = await contract.getMyTransactions();
      return myTransactions;
    } catch (error) {
      console.error("Error fetching own transactions:", error);
      throw error;
    }
  };