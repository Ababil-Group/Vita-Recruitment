import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const LogisticsPrivileges = () => {
  return (
    <section className="bg-[#E3F1D0] py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Privileges Bridge The Gap adds to your logistics services staffing
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaRegCreditCard className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Pay with ease while having your organization fully staffed
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Replacing workers when they don’t fit into the position
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Professional and committed warehousing and logistics workforce
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPhoneAlt className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Assisting logistics providers with recruiting plans to level up
              hires
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              No job ads are needed, and all positions are professionally
              fulfilled
            </p>
          </div>

          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineDocumentDuplicate className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Cadres that can optimize and streamline your last-mile delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsPrivileges;
