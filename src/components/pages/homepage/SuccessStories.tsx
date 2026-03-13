"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel"; // Import CarouselApi type
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SuccessStories = () => {
  const [api, setApi] = useState<CarouselApi>(); // State to hold the Carousel API
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/workforce.png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">
              WorkForce Solutions Co. Success Story:
            </h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Founded in 2015 in Qatar, specializing in supplying skilled and
                seasonal labor across agriculture and construction sectors.
              </li>
              <li>
                Expanded operations to the UK and Canada, growing the workforce
                by 500% in all regions.
              </li>
              <li>
                Became a strategic partner for large-scale agricultural and
                construction projects in Qatar and North America.
              </li>
              <li>
                Achieved high worker satisfaction across all regions and
                maintained one of the lowest turnover rates in the industry.
              </li>
              Known for providing dependable workforce solutions that meet
              diverse industry needs across multiple countries.
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/metrobuild.png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">MetroBuild Developers Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Established in Qatar in 2010, specializing in urban development
                and renovation projects.
              </li>
              <li>
                Successfully completed multiple high-profile projects across
                Qatar, including residential complexes and commercial buildings.
              </li>
              <li>
                Expanded into the UK and Canada, taking on large urban
                redevelopment projects in cities such as New York, Toronto, and
                Vancouver.
              </li>
              <li>
                Awarded key contracts in LUKil City and Msheireb Downtown Doha
                in Qatar, and downtown areas in major U.S. cities.
              </li>
              <li>
                Renowned for delivering projects on time and within budget,
                focusing on sustainable development practices across all
                regions.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/primeagri .png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">PrimeAgri Farms Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Founded in 2012 in Canada, PrimeAgri Farms is a major player in
                integrated poultry and agricultural production.
              </li>
              <li>
                Expanded operations to the UK and Qatar, focusing on sustainable
                and innovative farming practices.
              </li>
              <li>
                Increased poultry production by 50% in Canada and the UK,
                implementing state-of-the-art farming technologies.
              </li>
              <li>
                Opened multiple new poultry farms in Qatar, improving regional
                food security and expanding distribution networks.
              </li>
              <li>
                Known for producing high-quality poultry products and leading
                advancements in agricultural sustainability.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/harvestpro.png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">HarvestPro Industries Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Founded in 2016 in the UK, HarvestPro Industries specializes in
                scaling food and agricultural production.
              </li>
              <li>
                Expanded operations to Canada and Qatar, increasing production
                capacity by 70% in just a few years.
              </li>
              <li>
                Introduced cutting-edge agricultural technologies across North
                America and the Middle East, improving crop yields and farming
                efficiency.
              </li>
              <li>
                Became a global leader in sustainable agriculture, distributing
                products across North America and the Middle East.
              </li>
              <li>
                Focused on innovative farming methods to meet the growing global
                demand for food and agricultural products.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  // Update the active index when the carousel changes
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Handle dot click to navigate to the corresponding slide
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Handle previous and next navigation
  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Success Stories
          </div>
        </div>

        <div className="group relative mx-auto mt-20 max-w-4xl rounded-xl border p-10">
          <Carousel className="mx-5" setApi={setApi}>
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem
                  className="flex items-center justify-center"
                  key={slide.id}
                >
                  {slide.content}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Arrow Buttons */}
          <button
            onClick={handlePrevious}
            className="pointer-events-none absolute left-0 top-1/2 mx-5 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowBackIos className="text-4xl" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-none absolute right-0 top-1/2 mx-2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowForwardIos className="text-4xl" />
          </button>

          {/* Dot Navigation */}
          <div className="mt-10 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`size-2 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-gray-300"
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
