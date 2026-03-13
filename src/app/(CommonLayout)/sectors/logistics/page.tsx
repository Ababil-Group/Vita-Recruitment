import LogisticsBanner from "@/components/pages/logistics/LogisticsBanner";
import LogisticsPrivileges from "@/components/pages/logistics/LogisticsPrivileges";
import LogisticsSolutions from "@/components/pages/logistics/LogisticsSolutions";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Logistics",
};

const LogisticsPage = () => {
  return (
    <main>
      <LogisticsBanner />

      <section className="py-20 text-center">
        <div className="container space-y-5">
          <h2 className="text-3xl font-bold">
            Your logistics need to speed up.
          </h2>
          <div className="mx-auto max-w-[750px] space-y-5">
            <p className="text-lg">
              If you’re searching for employees who combine flexibility,
              commitment, and fast response, Bridge The Gap has them for you.
            </p>

            <p className="text-lg font-bold">
              For efficient deliveries, faster than ever
            </p>
          </div>
        </div>
      </section>

      <LogisticsSolutions />

      <LogisticsPrivileges />

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

export default LogisticsPage;
