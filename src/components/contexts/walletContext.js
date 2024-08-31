import toast from "react-hot-toast";
import ABI from "../abi.json"
import { ethers } from "ethers";
const { createContext, useContext, useState } = require("react");

const WalletContext = createContext();

export const WalletProvider = ({children}) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [walletConnected, setWalletConnected] = useState(false);

    const getContract = async () => {
      connect();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = walletConnected? walletAddress : await provider.getSigner();
      const contractAddress = process.env.REACT_APP_contractAddress;
      const contractABI = ABI

      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      return contract;
    }

    const disconnect = () => {
        setWalletAddress(null);
    }

    const connect = () => {
        toast.loading("Connecting Wallet ......", {
          position: "top-center",
        });
        try {
          window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
            .then((address) => {
              setWalletAddress(address[0]);
              localStorage.setItem("account", address[0]);
              setWalletConnected(true);
              toast.dismiss();
              toast.success("Wallet Connected", {
                position: "top-center",
              });
            })
            .catch((error) => {
              setWalletConnected(false);
              console.log(error);
              toast.dismiss();
            });
        } catch (error) {
          toast.error("something went wrong", {
            position: "top-center",
          });
          toast.dismiss();
          console.log(error);
        }
      };

      const payBill = async (billType, amount) => {
        try {
          let contract = await getContract();
          
          const tx = await contract.payBill(billType, { value: ethers.parseEther(amount) });
          await tx.wait();
          return tx;
        } catch (error) {
          console.error("Error paying bill:", error);
          throw error;
        }
      };

      const getAllTransactions = async () => {
        try {
          let contract = await getContract();
          const transactions = await contract.getAllTransactions();
          return transactions;
        } catch (error) {
          console.error("Error fetching all transactions:", error);
          throw error;
        }
      };

      const getMyTransactions = async () => {
        try {
          let contract = await getContract();
          const myTransactions = await contract.getMyTransactions();
          return myTransactions;
        } catch (error) {
          console.error("Error fetching own transactions:", error);
          throw error;
        }
      };
    return (
        <WalletContext.Provider
            value={{walletAddress, connect, disconnect, walletConnected, payBill, getAllTransactions, getMyTransactions}}
        >
            {children}
        </WalletContext.Provider>
    )
}

export const useWalletContext = () => useContext(WalletContext); 