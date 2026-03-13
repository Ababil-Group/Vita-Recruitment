"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="container flex min-h-[85vh] flex-col items-center justify-center gap-10">
        <h1 className="text-center text-6xl font-bold text-white drop-shadow-2xl">
          We Are Here To Manpower You
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <Link href="/contact">
            <Button className="bg-secondary-bridge py-6 text-lg">
              Request Free Consultation{" "}
              <span>
                <MdOutlineKeyboardArrowRight className="text-2xl" />
              </span>
            </Button>
          </Link>

          <Button
            onClick={() => setIsOpen(true)}
            className="bg-secondary-bridge py-6 text-lg"
          >
            <FaRegCirclePlay /> Watch the video
          </Button>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent close on inner click
          >
            {/* Close Icon */}
            <button
              className="absolute right-3 top-3 text-3xl text-white"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            {/* Video Embed */}
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1753362014/BTG_website_mnz2i5.mp4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
