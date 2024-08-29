import { Link } from "react-router-dom";
import hero_img from "../assets/hero_img.svg";
import BillCard from "../components/BillsCard";
import bills from "../components/data/bills.json";
import { MdElectricalServices, MdWallet } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

const Home = () => {
  return (
    <div className="bg-[#DCEEFF] min-h-screen sm:pt-0 pt-8">
      {/* Hero Section */}
      <section id="hero" className="flex flex-wrap justify-evenly items-center px-4 py-10">
        <div className="flex flex-col gap-7 justify-center max-w-lg">
          <div className="py-2 px-4 bg-white rounded-[20px] flex justify-center shadow-lg">
            <span className="text-[#0960A0] font-semibold">Welcome to OnHouse</span>
          </div>

          <h1 className="capitalize text-[#0D7DCF] font-bold text-4xl leading-snug">
            Your Financial<br /> Web Assistant
          </h1>
          <p className="text-[#8B8B8B] text-lg">
            Experience a convenient and secure way to pay your bills and manage your finances—all in one place.
          </p>
          <button className="bg-[#0D99FF] py-3 px-6 text-white rounded-[10px] shadow-lg hover:bg-[#0B80E0] transition-all duration-300 w-[220px]">
            Connect Wallet
          </button>
        </div>
        <div className="sm:h-[500px] w-full sm:w-auto">
          <img className="object-cover h-full w-full sm:w-[500px]" src={hero_img} alt="Hero section" />
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="bg-white py-12 px-4 sm:px-12 text-center">
        <h2 className="text-3xl font-semibold text-[#0960A0] mb-8">
          What You Can Do on OnHouse
        </h2>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="bg-[#DCEEFF] p-4 rounded-full mb-4">
              <i className="text-[#0D99FF] text-4xl fas fa-file-invoice-dollar"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pay Utility Bills</h3>
            <p className="text-[#8B8B8B]">
              Easily pay your electricity, water, and gas bills with just a few clicks.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#DCEEFF] p-4 rounded-full mb-4">
              <i className="text-[#0D99FF] text-4xl fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Top-Up</h3>
            <p className="text-[#8B8B8B]">
              Recharge your mobile phone instantly, anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F0F8FF] py-12 px-4 sm:px-12 text-center">
        <h2 className="text-3xl font-semibold text-[#0960A0] mb-8">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              <MdWallet className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 1: Connect Your Wallet</h3>
            <p className="text-[#8B8B8B]">
              Connect your digital wallet securely to start using OnHouse.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              <MdElectricalServices className="text-4xl"  />
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 2: Select a Service</h3>
            <p className="text-[#8B8B8B]">
              Choose the bill or service you want to pay or use from our list.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              <IoMdCash className="text-4xl"  />
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Confirm & Pay</h3>
            <p className="text-[#8B8B8B]">
              Review your details and complete the payment securely in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Bills Section */}
      <section className="bg-white my-10 py-10 px-4 sm:px-12">
        <h2 className="text-center text-3xl font-semibold text-[#0960A0] mb-8">
          Pay Your Bills with Ease
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 flex flex-col justify-center">
          {bills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
