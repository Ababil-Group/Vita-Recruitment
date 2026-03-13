// import { Button } from "@/components/ui/button";
// import Link from "next/link";

const Subsidiaries = () => {
  return (
    <section className="bg-secondary-bridge pb-[300px] pt-20">
      <div className="container space-y-5">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Subsidiaries
          </div>
        </div>

        <p className="mx-auto max-w-[950px] text-center text-white">
          Find the right staffing support for your needs. Bridge the Gap handles
          documents, housing, insurance, pay, and training when required. Choose
          the best fit for your business.
          {/* Detect the staffing service type you need and find your favorite team.
          Bridge the Gap covers required documents, stays, insurance, salaries,
          and qualifying training when needed. Pick the formula that suits your
          business&apos;s way to success. */}
        </p>

        <div className="grid grid-cols-1 gap-x-20 gap-y-[300px] md:grid-cols-2 lg:grid-cols-4">
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6> InnoTech Ventures</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  A Qatari firm investing in tech startups and innovations to
                  drive regional growth.
                </p>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6>LogiQ Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Qatar-based provider of smart logistics and supply chain
                  solutions.
                </p>

                {/* <Link href="https://www.terhab.qa/" target="_blank">
                  <Button>Go To Website</Button>
                </Link> */}
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] items-center justify-center rounded-xl bg-white p-8">
                <h6> HomeEase Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  UK-based home staffing service offering integrated residential
                  solutions
                </p>

                {/* <Link href="https://www.qlsc.com/" target="_blank">
                  <Button>Go To Website</Button>
                </Link> */}
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center rounded-xl bg-white p-8">
                <h6> CustomerFirst Outsourcing</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Canadian company delivering tailored customer support for
                  seamless service.
                </p>

                {/* <Link href="https://rahahome.com/" target="_blank">
                  <Button>Go To Website</Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
