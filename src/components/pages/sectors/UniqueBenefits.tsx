import { BsPassport } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
// import { MdOutlinePolicy } from "react-icons/md";
// import { FaCheckToSlot } from "react-icons/fa6";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { TfiHeadphoneAlt } from "react-icons/tfi";

const UniqueBenefits = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Unique benefits
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* card  */}
          <div className="space-y-4 rounded-xl border p-5">
            <div className="mx-auto flex size-[100px] items-center justify-center rounded-full bg-[#F9FCF5]">
              <BsPassport className="text-5xl" />
            </div>
            <p className="text-center text-lg font-medium">
              Visas are immediately available upon your request. You will take
              full advantage of the rapidity of recruiting and deploying the
              required employees.
            </p>
          </div>
          {/* card  */}
          <div className="space-y-4 rounded-xl border p-5">
            <div className="mx-auto flex size-[100px] items-center justify-center rounded-full bg-[#F9FCF5]">
              <FaUsers className="text-5xl" />
            </div>
            <p className="text-center text-lg font-medium">
              All your employment expenses and your employees’ salaries are
              financed by Bridge The Gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueBenefits;
