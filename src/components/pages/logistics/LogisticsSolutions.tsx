import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";

const LogisticsSolutions = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          The solutions Bridge The Gap has to level up your logistics business
          staffing
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Temporary hires for shifting missions at a lower cost.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Access to a global pool of younger, mobile candidates.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Ready-to-hire logistics supervisors, leaders, and operational
              decision-makers.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <PiMathOperationsFill className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Adequate experienced and qualified operations workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSolutions;
