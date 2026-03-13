import ConstructionsBanner from "@/components/pages/constructions/ConstructionsBanner";
import ConstructionSolutions from "@/components/pages/constructions/ConstructionSolutions";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Construction",
};

const ConstructionsPage = () => {
  return (
    <main>
      <ConstructionsBanner />

      <section className="py-20 text-center">
        <div className="container space-y-5">
          <h2 className="text-3xl font-bold">
            Construction became a constant and scheduled process
          </h2>
          <div className="mx-auto max-w-[750px] space-y-5">
            <p className="text-lg">
              No delays in handing over units. No compromises on the quality or
              quantity of workers. No exhausting negotiations about rates.
            </p>
            <p className="text-lg">
              Construction companies often need workers for short-term hiring,
              and meeting deadlines can seem impossible. Bridge The Gap provides
              trained, experienced, and time-scheduled construction workers you
              can depend on to complete your mission on schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFBF8] py-20 text-center">
        <div className="container space-y-4">
          <p className="text-center text-xl">
            Whether you are a small construction business or a large corporation
            that engages in sustainable construction, you can hire SMASCO to
            assist you with your construction worker recruitment needs
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

      <ConstructionSolutions />

      {/* <ConstructionsPrivileges /> */}

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

export default ConstructionsPage;
