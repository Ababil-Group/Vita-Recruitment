import { Button } from "@/components/ui/button";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Company Overview</h2>

          <p>
            Our story started as a manpower company that walked a successful
            10-year path in the Qatari market, helping successful partners and
            individuals. Day after day, our business expanded until we became
            the first choice of the biggest companies in Qatar when they sought
            professionals, manpower, and qualified workers.
          </p>

          <p>
            Bridge the Gap is a family where values truly matter. We have
            passionate people who make this company great. What we are proud of
            in our staff is the quality of the people we have in this company.
            As long as we are keen on that, we look forward to being a great
            company for many years to come.
          </p>

          <p>
            When you look across the Bridge the Gap group of companies, you will
            find that we cover a wide range of regions in Qatar. We are involved
            in every industry and market. If you need a permanent manpower
            solution, we assist in identifying your requirements. If your
            project needs to be outsourced to operate in a different region, we
            are fully equipped to handle it. Should you require us to take on an
            entire mission like market research, we are ready to provide that
            service. Whenever our clients have a need, we deliver with
            consistency and quality. You can expect the same culture, value
            system, and high-quality service that meets your elevated
            expectations.
          </p>
          <Button className="bg-tertiary-bridge py-6 text-xl">
            Download Company Profile
          </Button>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-3xl"
            src="/about-btg.jpeg"
            alt="Company Overview"
            height={600}
            width={480}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
