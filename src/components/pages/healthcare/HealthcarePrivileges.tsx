import { FaUsers } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const HealthcarePrivileges = () => {
  return (
    <section className="bg-[#E3F1D0] py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">Privileges</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUserDoctor className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Talent hunting with top strategies and recruiting technologies.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaRegCreditCard className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Cost-effective solutions—pay only for actual working days.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Diverse contracts for permanent or temporary workforce needs.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Emergency hires and up-to-date professional nursing teams.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Front-line, non-front-line, and exceptional healthcare staffing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcarePrivileges;
