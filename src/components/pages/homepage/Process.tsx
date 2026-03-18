import { ClipboardCheck, Users, FileCheck, PlaneLanding } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Workforce Needs Assessment",
    description:
      "We begin by understanding your workforce needs, project goals, and hiring timeline. Once the assessment is complete, we define the right recruitment approach and proceed with agreement confirmation.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Candidate Sourcing and Selection",
    description:
      "After signing the agreement, we begin sourcing and selecting qualified candidates. This includes application screening, interviews, document verification, and skill evaluation to ensure the right fit for your business.",
    icon: Users,
  },
  {
    id: 3,
    title: "Permit and Documentation Processing",
    description:
      "Once suitable workers are selected, we manage the permit and documentation process. We work with the appropriate authorities to complete all legal and administrative requirements accurately and on time.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Arrival and Onboarding Support",
    description:
      "In the final stage, we coordinate the worker’s arrival and onboarding process. This includes travel arrangements, accommodation support, registration assistance, and other essential steps for a smooth transition.",
    icon: PlaneLanding,
  },
];

const Process = () => {
  return (
    <section className="bg-secondary-bridge pb-[300px] pt-20">
      <div className="container space-y-5">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Our International Recruitment Process
          </div>
        </div>

        <p className="mx-auto max-w-[950px] text-center text-white">
          A clear and structured approach to international recruitment, from
          initial assessment to worker arrival.
        </p>

        <div className="grid grid-cols-1 gap-x-20 gap-y-[300px] md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="card" key={step.id}>
                <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
                  <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-4 rounded-xl bg-white p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-bridge/10">
                      <Icon className="h-8 w-8 text-secondary-bridge" />
                    </div>
                    <h6>{step.title}</h6>
                  </div>

                  <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-xl bg-black p-8 text-white">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
