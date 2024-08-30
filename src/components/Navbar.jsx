import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/onehouselogo.svg";
import { useWalletContext } from "./contexts/walletContext";
import { truncateAddress } from "./utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {walletAddress, connect, disconnect} = useWalletContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-[#38A1FF] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <img src={logo} alt="OnHouse Logo" className="h-10 w-auto" /> <span className="text-white ml-2 text-2xl font-bold">OneHouse</span>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-white items-center">
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/bills">Bills</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
        <div className="hidden sm:block flex gap-3">
          <button onClick={connect} disabled={walletAddress} className="sm:mx-3 mx-0 bg-[#0D99FF] py-2 px-4 text-white rounded-[10px] shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none">
            {
              walletAddress ?
              <span>{truncateAddress(walletAddress)}</span>
              :
              <span>Connect Wallet</span>
            }
          </button>

          {
            walletAddress && <button onClick={disconnect} disabled={!walletAddress} className="bg-white border-blue-400 py-2 px-4 text-[#0D99FF] rounded-[10px] shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none">
            Disconnect
          </button>
          }
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-blue-400 z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <img src={logo} alt="OnHouse Logo" className="h-10 w-auto" />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-8 h-full text-white text-xl">
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/bills" onClick={toggleMenu}>Bills</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link to="/transactions" onClick={toggleMenu}>Transactions</Link>
          </li>
          <li>
            <button
              className="bg-[#0D99FF] py-2 px-4 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
              onClick={toggleMenu}
            >
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
