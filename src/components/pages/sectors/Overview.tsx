import { Button } from "@/components/ui/button";
import Link from "next/link";

const Overview = () => {
  return (
    <section className="py-20">
      <div className="container space-y-4">
        <h2 className="text-center text-4xl font-bold">Overview</h2>
        <p className="mx-auto max-w-[720px] text-center text-lg">
          For more than a decade in the field of workforce solutions, Bridge The
          Gap has gained experience in every industry in Qatar. Our services
          cover all sectors, and we even add features to the basic services to
          meet the manpower needs of your company.
        </p>

        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button className="bg-secondary-bridge">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Overview;
