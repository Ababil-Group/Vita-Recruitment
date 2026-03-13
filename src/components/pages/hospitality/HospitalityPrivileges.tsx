import { FaUsers } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const HospitalityPrivileges = () => {
  return (
    <section className="bg-[#E3F1D0] py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Bridge The Gap privileges for hospitality companies
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaRegCreditCard className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Cost-effective: Pay only for actual working days, with installment
              options.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsersViewfinder className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Pivotal professions: Trained and qualified core professionals.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Abundance of labor: Sufficient quantities to cover recruitment
              needs.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Seasonal workforce: Available year-round without lengthy
              procedures.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Ready Workforce: Trained and ready to fill multiple roles.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Many available professions: From hotel restaurant management to
              bag carriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalityPrivileges;
