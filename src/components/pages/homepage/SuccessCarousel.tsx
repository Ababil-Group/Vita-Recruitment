/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface SliderProps {
  slides: any;
}

const SuccessCarousel = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="group relative mx-auto mt-20 w-full max-w-4xl overflow-hidden rounded-xl border shadow">
      {/* Slides */}
      <div
        className="flex p-20 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="w-full">
          <p>SMASCO Success Story:</p>
          <ul>
            <li>
              Started supplying drivers in November 2021 and currently groups up
              to hundred of drivers.
            </li>
            <li>Becoming a strategic partner of ours.</li>
          </ul>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-4xl text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-4xl text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <IoIosArrowForward />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessCarousel;
