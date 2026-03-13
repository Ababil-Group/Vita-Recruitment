import OtherSectorsBanner from "@/components/pages/other-sectors/OtherSectorsBanner";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridge The Gap | Other Sectors",
};

const OtherSectorsPage = () => {
  return (
    <main className="bg-[#FAFBF8]">
      <OtherSectorsBanner />

      <section className="py-20">
        <div className="container grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
          </div>
          {/* card  */}
          <div className="space-y-10 rounded-xl bg-white p-10">
            <Image
              className="h-auto w-full"
              src="/other-sectors/food.svg"
              width={200}
              height={160}
              alt="Food"
            />

            <h6 className="text-center font-bold">Food Industries Sector</h6>
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

export default OtherSectorsPage;
