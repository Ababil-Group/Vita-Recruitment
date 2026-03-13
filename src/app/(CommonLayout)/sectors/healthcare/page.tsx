import HealthcareBanner from "@/components/pages/healthcare/HealthcareBanner";
import HealthcarePrivileges from "@/components/pages/healthcare/HealthcarePrivileges";
import HealthcareSolution from "@/components/pages/healthcare/HealthcareSolution";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Healthcare",
};

const HealthcarePage = () => {
  return (
    <main>
      <HealthcareBanner />

      <section className="py-20 text-center">
        <div className="container space-y-5">
          <h2 className="text-3xl font-bold">
            Bridge The Gap hunts top healthcare talents
          </h2>
          <div className="mx-auto max-w-[750px] space-y-5">
            <p className="text-lg">
              Double shifts can be fewer, staff burnout can be avoided, and
              typical days can be far more productive. The Qatar Manpower
              Solutions Company, Bridge The Gap, makes it possible for workforce
              shortages to be covered, and for critical care nurses to be
              smoothly hired.
            </p>
            <p className="text-lg">
              We offer a complete recruiting cycle for healthcare professionals
              under one roof.
            </p>
          </div>
        </div>
      </section>

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

      <HealthcareSolution />

      <HealthcarePrivileges />

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

export default HealthcarePage;
