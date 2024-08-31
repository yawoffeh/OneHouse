import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import bills from "../components/data/bills.json";
import toast from 'react-hot-toast';


const ViewBill = () => {
    const [formData, setFormData] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate()
    const [billDetails, setBillDetails] = useState({})
    const [validBillId, setValidBillId] = useState(false);

    const handleInput = (event) => {
      const { name, value, type, checked } = event.target;
      setFormData({
        ...formData,
        [name]: type == "checkbox" ? checked : value,
      });
    }

    const handleProceedToPayment = () => {
      const data = {...formData};
      
      const formElement = document.querySelector("form");
      if (!formElement.checkValidity()) {
        formElement.reportValidity();
        return;
      }
      else {
        let total = Number(data?.amount) * 0.0000005;
        navigate(`/order-summary?amount=${total}&type=${billDetails?.id}&provider=${data?.provider}`)
      }
    }

    useEffect(() => {
      for (let bill of bills) {
        if (bill?.id == id) {
          setBillDetails(bill);
          setValidBillId(true);
        }
      }

      // if (!validBillId) {
      //   toast.error("Invalid Bill ID", {
      //     position: 'top-center'
      //   })
      //   navigate("/")
      // }
    })

    return ( 
     
      <div className="bg-blue-100 py-4 min-h-screen flex items-center justify-center">
      <section className="bg-white p-6 mx-20 my-20 w-3/4 rounded-xl">
        <h2 className="text-[#000000] text-3xl mx-5 mb-8 pr-12 pt-5 font-semibold translate-x-[25px]">Add Bill Details</h2>
        <div className="flex items-start space-x-3">
          <form className="flex-1">
            <div className="pl-12 m-4">
              <p className="my-2 text-[#000000] text-lg m-0 font-semibold">Account number</p>
              <input required onChange={handleInput} name='account_number' type="text" className="bg-[#D5E9F5] mb-3 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Account number" />
            </div>
    
            <div className="pl-12 m-4 flex flex-col">
              <p className="my-2 text-[#000000] text-lg mb-0 font-semibold">Enter Amount</p> <span className='text-sm'>currency $</span>
              <input required onChange={handleInput} name='amount' type="text" className="bg-[#D5E9F5] mb-3 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter amount" />
            </div>
    
            <div className="pl-12 m-4">
              <p className="my-2 text-[#000000] text-lg mb-0 font-semibold">Provider</p>
              <select 
              onChange={handleInput}
              required name="provider" id=""
              className="bg-[#D5E9F5] mb-1 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value={null} hidden>Select Service Provider</option>
                {billDetails?.providers?.map((provider) => {
                  return (
                    <option value={provider?.name}>{provider?.name}</option>
                  )
                })}
              </select>
            </div>
          </form>
    
          <div className="w-1/2 ">
            <img src={billDetails?.image} alt="netflix image" className="w-full h-[250px] pr-20 my-8"/>
          </div>
        </div>
        
        <button onClick={handleProceedToPayment} className="bg-[#0D99FF] py-3 px-6 text-white rounded-[10px] shadow-lg hover:bg-[#0B80E0] transition-all duration-300 w-[240px] m-[30px]  translate-x-[28px]">
          Proceed To Payment
        </button>
      </section>
    </div>
    );
};

export default ViewBill;
