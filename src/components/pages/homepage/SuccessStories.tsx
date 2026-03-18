"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const successStories = [
  {
    id: 1,
    image: "/workforce.png",
    alt: "WorkForce",
    title: "WorkForce",
    industry: "Agriculture and General Labor",
    location: "Bosnia, and Serbia",
    roles: "Harvesting, packing, sorting, warehouse support, and general labor",
    description1:
      "WorkForce has supported employers in Bosnia, and Serbia by supplying dependable workers for essential non-desk roles across agriculture and operational support. Their workforce solutions have helped businesses maintain steady productivity during peak demand periods when reliable labor was most needed.",
    description2:
      "Clients appreciated the consistency, work ethic, and adaptability of the workers provided. Many employers reported smoother day-to-day operations, better workforce stability, and a more efficient recruitment experience from start to finish.",
  },
  {
    id: 2,
    image: "/metrobuild.png",
    alt: "MetroBuild",
    title: "MetroBuild",
    industry: "Construction and Site Support",
    location: "Croatia",
    roles:
      "General labor, loading support, material handling, cleaning, and site preparation",
    description1:
      "MetroBuild has worked with construction-focused employers across Croatia, Bosnia, and Serbia, helping them fill important non-desk roles required for active project sites. Their recruitment support has been valuable for companies facing labor shortages in physically demanding environments.",
    description2:
      "Employers were particularly satisfied with the punctuality, discipline, and readiness of the workers to adapt to on-site responsibilities. As a result, project teams experienced better operational flow and improved support for everyday construction activities.",
  },
  {
    id: 3,
    image: "/primeagri.png",
    alt: "PrimeAgri",
    title: "PrimeAgri",
    industry: "Agriculture and Food Handling",
    location: "Bosnia, and Serbia",
    roles:
      "Farm support, sorting, packaging, food handling, and seasonal labor",
    description1:
      "PrimeAgri has assisted employers in Bosnia, and Serbia by providing reliable workers for labor-intensive agricultural and food-support roles. The company has built a strong reputation for helping businesses secure dependable manpower for seasonal and ongoing operational needs.",
    description2:
      "Clients responded positively to the workers’ commitment, teamwork, and ability to perform in fast-paced environments. Their support contributed to more stable workflows, improved output, and greater confidence in long-term workforce planning.",
  },
  {
    id: 4,
    image: "/harvestpro.png",
    alt: "HarvestPro",
    title: "HarvestPro",
    industry: "Facility Support and General Operations",
    location: "Bosnia, and Serbia",
    roles:
      "Cleaning, maintenance support, storage assistance, and general labor",
    description1:
      "HarvestPro has supported employers in Bosnia, and Serbia by supplying dependable workers for day-to-day operational roles that are essential to business continuity. Their workforce solutions have helped clients strengthen internal support functions and improve service consistency.",
    description2:
      "The company received strong feedback from employers who valued the professionalism, reliability, and positive attitude of the workers provided. Many clients described the hiring process as smooth, practical, and highly supportive of their business needs.",
  },
];

const SuccessStories = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Success Stories
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-base text-gray-600">
          Explore how employers across Europe have benefited from our workforce
          solutions for essential non-desk roles in agriculture, construction,
          and operational support.
        </p>

        <div className="group relative mx-auto mt-14 max-w-6xl rounded-2xl border bg-white p-6 shadow-sm md:p-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.id}>
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="flex justify-center lg:w-[240px] lg:shrink-0">
                      <Image
                        src={story.image}
                        alt={story.alt}
                        width={220}
                        height={220}
                        className="rounded-xl object-contain"
                      />
                    </div>

                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {story.title}
                      </h3>

                      <div className="grid gap-2 text-sm text-gray-600 sm:grid-cols-1">
                        <p>
                          <span className="font-semibold text-gray-900">
                            Industry:
                          </span>{" "}
                          {story.industry}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">
                            Location:
                          </span>{" "}
                          {story.location}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">
                            Roles Supplied:
                          </span>{" "}
                          {story.roles}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2 text-sm leading-7 text-gray-700 md:text-[15px]">
                        <p>{story.description1}</p>
                        <p>{story.description2}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:scale-105 md:left-4"
          >
            <MdArrowBackIos className="text-2xl text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:scale-105 md:right-4"
          >
            <MdArrowForwardIos className="text-2xl text-gray-700" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {successStories.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
