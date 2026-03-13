import HospitalityBanner from "@/components/pages/hospitality/HospitalityBanner";
import HospitalityPrivileges from "@/components/pages/hospitality/HospitalityPrivileges";
import HospitalitySolution from "@/components/pages/hospitality/HospitalitySolution";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Hospitality",
};

const HospitalityPage = () => {
  return (
    <main>
      <HospitalityBanner />
      <section className="py-20 text-center">
        <div className="container space-y-5">
          <h2 className="text-3xl font-bold">
            A cheerful and presentable reception and generous hospitality that
            surpasses
          </h2>
          <div className="mx-auto max-w-[750px] space-y-5">
            <p className="text-lg">
              In the hospitality sector, the human factor is the main pillar.
              Bridge The Gap provides hospitality workers trained in welcoming,
              cheerfulness, quick actions, and organization. We give you easy
              access to workers who leave a lasting impression on every client.
            </p>
            <p className="text-lg font-bold">For customers who return.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">
            In a similar manner to chess, Bridge The Gap categorizes hospitality
            staff
          </h2>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
            {/* card */}
            <div>
              <div className="relative min-h-[200px] w-full">
                <Image
                  className="rounded-xl object-cover object-center"
                  src="/support.png"
                  fill
                  alt="Support Staff"
                />
              </div>
              <h6 className="mt-5 font-bold">Support Staff</h6>
              <ul className="list-disc pl-5">
                <li>Driver</li>
                <li>Maintenance Worker</li>
                <li>IT Specialist</li>
                <li>
                  And other roles that ensure the proper and safe operation of
                  your facilities and equipment.
                </li>
              </ul>
            </div>
            {/* card */}
            <div>
              <div className="relative min-h-[200px] w-full">
                <Image
                  className="rounded-xl object-cover object-center"
                  src="/management.png"
                  fill
                  alt="Support Staff"
                />
              </div>
              <h6 className="mt-5 font-bold">Management Staff</h6>
              <ul className="list-disc pl-5">
                <li>Manager</li>
                <li>Supervisor</li>
                <li>Accountant</li>
                <li>Human Resources Specialist</li>
                <li>
                  And other managerial roles that ensure the smooth and
                  profitable functioning of your business.
                </li>
              </ul>
            </div>
            {/* card */}
            <div>
              <div className="relative min-h-[200px] w-full">
                <Image
                  className="rounded-xl object-cover object-center"
                  src="/back-house.png"
                  fill
                  alt="Support Staff"
                />
              </div>
              <h6 className="mt-5 font-bold">Back House Staff</h6>
              <ul className="list-disc pl-5">
                <li>Chef</li>
                <li>Cook</li>
                <li>Kitchen Assistant</li>
                <li>Dishwasher</li>
                <li>Cleaner</li>
                <li>Laundry Worker</li>
              </ul>
            </div>
            {/* card */}
            <div>
              <div className="relative min-h-[200px] w-full">
                <Image
                  className="rounded-xl object-cover object-center"
                  src="/front-house.png"
                  fill
                  alt="Support Staff"
                />
              </div>
              <h6 className="mt-5 font-bold">Front House Staff</h6>
              <ul className="list-disc pl-5">
                <li>Receptionist</li>
                <li>Concierge</li>
                <li>Waiter</li>
                <li>Cashier</li>
                <li>Host</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HospitalitySolution />

      <HospitalityPrivileges />

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

export default HospitalityPage;
