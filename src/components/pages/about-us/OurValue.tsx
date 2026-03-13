import { IoBulbOutline } from "react-icons/io5";
import { BsBarChartSteps } from "react-icons/bs";

const OurValue = () => {
  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3 md:col-span-2 lg:col-span-1">
          <h6 className="font-semibold text-primary-bridge">Our Value</h6>
          <h2 className="text-4xl font-semibold">
            World-Class Manpower Services
          </h2>
          <p className="text-sm">
            Recognizing the significant challenge of providing professional
            services, and the complexities faced by Qatari organizations in
            sourcing legally compliant professionals, the Bridge the Gap team
            has committed to shouldering this responsibility with our utmost
            dedication.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 rounded-xl bg-white p-5">
          <IoBulbOutline className="text-5xl text-primary-bridge" />

          <h6 className="font-semibold text-primary-bridge">Vision</h6>
          <p className="text-center text-sm">
            Bridge the Gap aims to be the leading manpower service provider in
            Qatar, ensuring that businesses have access to skilled talent while
            adhering to local regulations and standards.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 rounded-xl bg-white p-5">
          <BsBarChartSteps className="text-5xl text-primary-bridge" />

          <h6 className="font-semibold text-primary-bridge">Mission</h6>
          <p className="text-center text-sm">
            At Bridge The Gap, our mission is to save you from the hassle of
            searching for qualified manpower. We provide legally covered
            professionals to secure your business and simplify your operations
            with expert consulting and support aimed at enhancing your business
            performance and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
