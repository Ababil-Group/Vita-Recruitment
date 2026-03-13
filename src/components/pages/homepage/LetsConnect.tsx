import { Button } from "@/components/ui/button";
import Link from "next/link";

const LetsConnect = () => {
  return (
    <section className="py-20">
      <div className="container space-y-3">
        <h2 className="text-center text-4xl font-semibold">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-lg">
          The core of business success has always been people.
        </p>

        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button className="bg-tertiary-bridge text-white">
              Let&apos;s Connect
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
