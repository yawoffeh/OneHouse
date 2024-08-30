


const ViewBill = () => {
    return ( 
     
      <div className="bg-blue-100 py-4 min-h-screen flex items-center justify-center">
      <section className="bg-white p-6 mx-20 my-20 w-3/4 rounded-xl">
        <h2 className="text-[#000000] text-3xl mx-5 mb-8 pr-12 pt-5 font-semibold translate-x-[25px]">Add Bill Details</h2>
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <div className="pl-12 m-4">
              <p className="text-[#000000] text-lg m-0 font-semibold">Account number</p>
              <input type="text" className="bg-[#D5E9F5] mb-3 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Account number" />
            </div>
    
            <div className="pl-12 m-4">
              <p className="text-[#000000] text-lg mb-0 font-semibold">Enter Amount</p>
              <input type="text" className="bg-[#D5E9F5] mb-3 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter amount" />
            </div>
    
            <div className="pl-12 m-4">
              <p className="text-[#000000] text-lg mb-0 font-semibold">Provider</p>
              <input type="text" className="bg-[#D5E9F5] mb-1 w-3/4 text-gray-700 px-4 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter provider here" />
            </div>
          </div>
    
          <div className="w-1/2 ">
            <img src={require('../images/netflix.jpg')} alt="netflix image" className="w-full h-[250px] pr-20 my-8"/>
          </div>
        </div>
        
        <button className="bg-[#0D99FF] py-3 px-6 text-white rounded-[10px] shadow-lg hover:bg-[#0B80E0] transition-all duration-300 w-[240px] m-[30px]  translate-x-[28px]">
          Proceed To Payment
        </button>
      </section>
    </div>



    );
};

export default ViewBill;