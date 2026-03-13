import { GoClock } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { BsBuildings } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";

type TAchievementsProps = {
  bgColor?: string;
};

const Achievements = ({ bgColor }: TAchievementsProps) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className="container grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2 lg:grid-cols-4">
        {/* card */}
        <div className="flex flex-col items-center justify-start gap-3">
          <GoClock className="text-5xl text-primary-bridge" />

          <h4 className="text-2xl font-bold text-tertiary-bridge">
            <span className="text-primary-bridge">+</span>1.5B
          </h4>

          <p className="text-center font-medium">Working Hours</p>
        </div>
        {/* card */}
        <div className="flex flex-col items-center justify-start gap-3">
          <GrUserWorker className="text-5xl text-primary-bridge" />

          <h4 className="text-2xl font-bold text-tertiary-bridge">
            <span className="text-primary-bridge">+</span>160 K
          </h4>

          <p className="text-center font-medium">Deployed Workers</p>
        </div>
        {/* card */}
        <div className="flex flex-col items-center justify-start gap-3">
          <BsBuildings className="text-5xl text-primary-bridge" />

          <h4 className="text-2xl font-bold text-tertiary-bridge">
            100% coverage
          </h4>

          <p className="text-center font-medium">
            We serve every single region and industry in Qatar
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col items-center justify-start gap-3">
          <TbUsersGroup className="text-5xl text-primary-bridge" />

          <h4 className="text-2xl font-bold text-tertiary-bridge">
            <span className="text-primary-bridge">+</span>4K
          </h4>

          <p className="text-center font-medium">
            Business Clients All Over Qatar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
