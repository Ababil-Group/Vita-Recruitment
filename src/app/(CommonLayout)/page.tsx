import Achievements from "@/components/pages/homepage/Achievements";
import Hero from "@/components/pages/homepage/Hero";
import Improve from "@/components/pages/homepage/Improve";
import InputOutput from "@/components/pages/homepage/InputOutput";
import LetsConnect from "@/components/pages/homepage/LetsConnect";
import People from "@/components/pages/homepage/People";
import Subsidiaries from "@/components/pages/homepage/Subsidiaries";
import SuccessStories from "@/components/pages/homepage/SuccessStories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridge The Gap",
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Improve />
      <InputOutput />
      <Achievements />
      <People />
      <SuccessStories />
      <Subsidiaries />
      <LetsConnect />
    </main>
  );
};

export default HomePage;
