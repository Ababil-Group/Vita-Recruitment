import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";

const OilGasPrivileges = () => {
  return (
    <section className="bg-[#E3F1D0] py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Privileges Bridge The Gap adds to your oil and gas staffing
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaRegCreditCard className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Pay with ease while staffing your oil and gas company fully
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Navigate the employment landscape shifts to greener practices
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Face the geopolitical uncertainties with flexible contracts
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <MdManageSearch className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Find professional expertise, certified in the gas industry
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Ensure sufficient gas workers for your increasing demand
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPhoneAlt className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Consult experienced recruiters for oil and gas companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilGasPrivileges;
