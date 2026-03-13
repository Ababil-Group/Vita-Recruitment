import { GiTeacher } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { RiLoopLeftFill } from "react-icons/ri";

const ConstructionsPrivileges = () => {
  return (
    <section className="bg-[#E3F1D0] py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">Privileges</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <GiTeacher className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">Trained</h5>

            <p className="text-sm">
              No wasted time or resources on non-trained workers
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <GrUserWorker className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">Workforce Flow</h5>

            <p className="text-sm">Uninterrupted workforce flow</p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUsers className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">You Name It</h5>

            <p className="text-sm">
              The number of hires needed, regardless of the size of your project
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">Short Contracts</h5>

            <p className="text-sm">
              No long procedures for short-term recruiting
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <BsCreditCard2FrontFill className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">Easy Payment</h5>

            <p className="text-sm">
              SMASCO only charges you for the active worker days, and offers you
              an easy payment plan
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <RiLoopLeftFill className="text-8xl text-primary-bridge" />

            <h5 className="text-lg font-bold">Replacing</h5>

            <p className="text-sm">
              No delays because of workers who did not meet the requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionsPrivileges;
