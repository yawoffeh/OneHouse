import { Link } from "react-router-dom";
import hero_img from  "../assets/hero_img.svg"
import BillCard from "../components/BillsCard";
import bills from "../components/data/bills.json";

const Home = () => {
  return (
    <div className="bg-[#DCEEFF] min-h-screen sm:pt-0 pt-8">
      <section id="hero" className="flex flex-wrap justify-evenly">
        <div className="flex flex-col gap-7 justify-center">
          <div className="py-2 px-4 bg-white rounded-[20px] flex justify-center">
            <span className="text-[#0960A0]">Lorem text goes here</span>
          </div>

          <span className="capitalize text-[#0D7DCF] font-bold text-4xl">Your Financial<br/> web assistant</span>
          <span className="text-[#8B8B8B]">Convenient way to pay for your bils and many more</span>
          <button className="bg-[#0D99FF] py-1 text-white py-3 rounded-[10px] w-[200px]">Connect Wallet</button>
        </div>
        <div className="sm:h-[500px]">
          <img className="object-cover h-full w-full" src={hero_img} alt="hero section image"/>
        </div>
      </section>

      {/* Section for bills */}
      <section className="my-5">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </section>
    </div>
  );
};

export default Home;
