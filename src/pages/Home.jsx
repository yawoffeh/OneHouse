import { Link } from "react-router-dom";
import hero_img from "../assets/hero_img.svg";
import BillCard from "../components/BillsCard";
import bills from "../components/data/bills.json";

const Home = () => {
  return (
    <div className="bg-[#DCEEFF] min-h-screen sm:pt-0 pt-8">
      {/* Hero Section */}
      <section id="hero" className="flex flex-wrap justify-evenly items-center px-4">
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

      {/* Bills Section */}
      <section className="bg-white my-10 py-10 px-4 sm:px-12=">
        <h2 className="text-3xl font-semibold text-[#0960A0] mb-8">
          Pay Your Bills with Ease
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {bills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
