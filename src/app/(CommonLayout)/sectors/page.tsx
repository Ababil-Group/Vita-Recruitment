import Achievements from "@/components/pages/homepage/Achievements";
import MainSectors from "@/components/pages/sectors/MainSectors";
import OurRange from "@/components/pages/sectors/OurRange";
import Overview from "@/components/pages/sectors/Overview";
import SectorsBanner from "@/components/pages/sectors/SectorsBanner";
import UniqueBenefits from "@/components/pages/sectors/UniqueBenefits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridge The Gap | Sectors",
};

const SectorsPage = () => {
  return (
    <main>
      <SectorsBanner />
      <Overview />
      <MainSectors />
      <Achievements bgColor="bg-[#F5F5F5]" />
      <UniqueBenefits />
      <OurRange />
    </main>
  );
};

export default SectorsPage;
