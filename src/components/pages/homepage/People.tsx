import { Button } from "@/components/ui/button";
import Link from "next/link";

const People = () => {
  return (
    <section className="bg-people-bg bg-cover bg-center bg-no-repeat py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-4xl font-semibold text-white">
            People Are All About Communications
          </h3>
          <p className="text-white">
            When we talk about manpower, we’re talking about the need for
            instant response and effective communication. Let our professional
            account managers handle it for you. They will make recommendations,
            fulfill your manpower requests, and equip your organization with the
            consolidation it needs.
          </p>
          <Link className="inline-block" href="/contact">
            <Button className="bg-tertiary-bridge">Let&apos;s connect</Button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default People;
