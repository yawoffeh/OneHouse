import React from "react";
import { AiOutlinePayCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useWalletContext } from "./contexts/walletContext";
import toast from "react-hot-toast";

const BillCard = ({ bill }) => {
  const navigate = useNavigate()
  const {walletConnected, connect} = useWalletContext();

    const handlePay = (id) => {
        if (!walletConnected) {
          toast.error("Please Connect Wallet First", {
            position: "top-center"
          });

          connect();
        }
        else {
          navigate(`/view-bill?id=${id}`)
        }
    }

  return (
    <div className='w-[230px] mt-3 mx-3 cursor-pointer bg-white'>
            <div className='h-[200px]'>
            <img src={`${bill.image}`} alt="" className='h-full w-full object-fit' />
            </div>
            <div className='w-full flex w-full justify-between text-white py-3 px-2 w-full bg-[#3B3B3B]'>
            <span>{bill.name}</span>
            <div>
                <Button placeholder={'Pay'} onClick={() => {
                  handlePay(bill.id)
                }} icon={<AiOutlinePayCircle />}/>
            </div>
            </div>
        </div>
  );
};

export default BillCard;
