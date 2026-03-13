import OilAndGasBanner from "@/components/pages/oil-gas/OilAndGasBanner";
import OilGasPrivileges from "@/components/pages/oil-gas/OilGasPrivileges";
import OilGasSolution from "@/components/pages/oil-gas/OilGasSolution";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Oil and Gas",
};

const OilAndGasPage = () => {
  return (
    <main>
      <OilAndGasBanner />
      <section className="py-20 text-center">
        <div className="container space-y-5">
          <h2 className="text-3xl font-bold">
            Is the oil and gas industry aging?
          </h2>
          <div className="mx-auto max-w-[750px] space-y-5">
            <p className="text-lg">
              While some employees lose interest, Bridge The Gap helps you find
              professionals prepared to work in oil and gas companies, ensuring
              operations run smoothly and safely.
            </p>
            <p className="text-lg">
              Bridge The Gap prepares your business for demand peaks. We provide
              employment stability to keep your operations running and
              productivity growing.
            </p>
          </div>
        </div>
      </section>

      <OilGasSolution />

      <OilGasPrivileges />

      <section className="bg-[#FAFBF8] py-20 text-center">
        <div className="container space-y-4">
          <h2 className="text-3xl font-bold">Why Bridge The Gap?</h2>
          <p className="text-center text-xl">
            Experienced professionals in healthcare staffing who provide expert
            advice. Loaded with recruiting solutions and professional healthcare
            workers to back up your business.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/contact">
              <Button className="bg-tertiary-bridge text-lg">
                Request your team now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFEF5] py-20">
        <div className="container space-y-5">
          <h2 className="text-center text-3xl font-bold">
            Looking for immediate hires?
          </h2>
          <div className="flex items-center justify-center">
            <Link href="/contact">
              <Button className="bg-primary-bridge">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OilAndGasPage;
