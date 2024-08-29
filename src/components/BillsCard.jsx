import React from "react";
import { AiOutlinePayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const BillCard = ({ bill }) => {

    const handlePay = () => {
        return;
    }

  return (
    <div className='w-[230px] mt-3 mx-3 cursor-pointer bg-white'>
            <div className='h-[200px]'>
            <img src={`${bill.image}`} alt="" className='h-full w-full object-fit' />
            </div>
            <div className='w-full flex w-full justify-between text-white py-3 px-2 w-full bg-[#3B3B3B]'>
            <span>{bill.name}</span>
            <div>
                <Button placeholder={'Pay'} onClick={handlePay} icon={<AiOutlinePayCircle />}/>
            </div>
            </div>
        </div>
  );
};

export default BillCard;
