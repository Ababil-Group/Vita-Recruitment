import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";

const HealthcareSolution = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Our healthcare staffing solutions for corporations and small
          businesses
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPhoneAlt className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              On-call support to back you up with the right team.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUserDoctor className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Professional medical training and complete legal coverage.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Verification of legal status, registrations, and certificates,
              along with mental and physical checks.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <LuBuilding2 className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Efficient and licensed healthcare professionals to meet your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSolution;
