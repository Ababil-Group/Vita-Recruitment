import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";



const OilGasSolution = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Take your recruitment to the next level with the staffing solutions
          SMASCO has
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaUserShield className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Pre-employment criminal record checks, physical and mental health
              checks
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <FaPersonWalkingArrowLoopLeft className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Replacement of non-fitting workers, paying no more than actual
              working days
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              easy access for hiring the rare specialties you’ve been desperate
              to find
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <HiOutlineClipboardDocumentList className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Permanent and temp contracts, to adapt to your goals and your
              business pocket
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilGasSolution;
