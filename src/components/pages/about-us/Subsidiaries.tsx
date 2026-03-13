import { Button } from "@/components/ui/button";
import Link from "next/link";

const Subsidiaries = () => {
  return (
    <section className="bg-[#E1E1E1] py-20 pb-[300px]">
      <div className="container space-y-8">
        <h2 className="text-center text-4xl font-semibold">Subsidiaries</h2>

        <p className="mx-auto max-w-[950px] text-center text-lg">
          Identify the staffing service type you need and find your ideal team.
          Bridge The Gap covers all necessary documentation, accommodations,
          insurance, salaries, and qualifying training when required. Choose the
          formula that aligns with your business&apos;s path to success.
        </p>

        <div className="grid grid-cols-1 gap-x-20 gap-y-[300px] md:grid-cols-2 lg:grid-cols-4">
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6>Corporate Venture Capital Company</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  ADGS is a Qatar-based company that invests in innovative
                  technology solutions and promising startup firms.
                </p>

                <Link href="https://www.adgs.com/" target="_blank">
                  <Button>Go To Website</Button>
                </Link>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6>Parcel Logistic Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Qatar Logistic Services Company (QLSC) is a logistics company
                  that provides innovative solutions to the supply chain for all
                  parcel sectors.
                </p>

                <Link href="https://qls.qa/" target="_blank">
                  <Button>Go To Website</Button>
                </Link>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6>A Better Customer Experience</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Terhab is a Qatari CX outsourcing company providing end-to-end
                  CX solutions by designing and operating CX moments before,
                  during, and after-sales.
                </p>

                <Link href="https://qls.qa/" target="_blank">
                  <Button>Go To Website</Button>
                </Link>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6>Innovative and Integrated Home Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Raha is a home workers provider and integrated solutions for
                  the home services sector.
                </p>

                <Link href="https://qls.qa/" target="_blank">
                  <Button>Go To Website</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
