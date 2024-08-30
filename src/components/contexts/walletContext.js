import toast from "react-hot-toast";

const { createContext, useContext, useState } = require("react");

const WalletContext = createContext();

export const WalletProvider = ({children}) => {
    const [walletAddress, setWalletAddress] = useState(null);

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
              toast.dismiss();
              toast.success("Wallet Connected", {
                position: "top-center",
              });
            })
            .catch((error) => {
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
    return (
        <WalletContext.Provider
            value={{walletAddress, connect, disconnect}}
        >
            {children}
        </WalletContext.Provider>
    )
}

export const useWalletContext = () => useContext(WalletContext); 