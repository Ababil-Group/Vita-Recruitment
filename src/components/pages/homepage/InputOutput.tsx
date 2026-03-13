import { Button } from "@/components/ui/button";
import Link from "next/link";

const InputOutput = () => {
  return (
    <section className="bg-input-output-bg bg-cover bg-center bg-no-repeat py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-4xl font-semibold text-white">
            Inputs Shape the Outputs
          </h3>
          <p className="text-white">
            With more than ten years of experience, Bridge the Gap has
            effectively supported various sectors in Qatar by transforming their
            contributions into enhanced results and improved performance. Share
            your business needs with us, and we will offer the expert guidance
            necessary to help you secure the professional resources required for
            your company&apos;s growth.
          </p>
          <Link className="inline-block" href="/about">
            <Button className="bg-tertiary-bridge">More About Us</Button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default InputOutput;
