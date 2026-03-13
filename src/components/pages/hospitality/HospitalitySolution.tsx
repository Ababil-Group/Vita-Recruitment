import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const HospitalitySolution = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Our solutions for the hospitality industry
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsersCog className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              A workforce that respects Qatari culture and traditions for a
              comfortable customer experience.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Permanent and seasonal labor, always available with the same skill
              level.
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Sufficient quantities to meet the labor-starved hospitality
              industry’s needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySolution;
