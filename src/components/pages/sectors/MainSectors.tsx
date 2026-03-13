import { sectors } from "@/constants";
import SectorCard from "./SectorCard";

const MainSectors = () => {
  return (
    <section className="bg-[#FAFBF8] py-20">
      <div className="container">
        <h4 className="mb-10 text-center text-3xl font-semibold">
          Main Sectors We Cover
        </h4>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <SectorCard key={i} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSectors;
