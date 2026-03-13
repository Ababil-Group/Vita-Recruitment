"use client";

import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-[100px]"
            src="/logo.png"
            alt="Bridge The Gap Logo"
            height={65}
            width={150}
          />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {navlinks.map((navlink, i) => (
            <li key={i}>
              <Link
                className="border-b-primary-bridge font-semibold hover:border-b-2 hover:text-primary-bridge"
                href={navlink.href}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <FaBars className="cursor-pointer text-3xl" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex min-h-screen flex-col">
                <Link href="/">
                  <Image
                    className="h-auto w-[100px]"
                    src="/logo.png"
                    alt="Bridge The Gap Logo"
                    height={65}
                    width={150}
                  />
                </Link>

                <ul className="mt-20 flex flex-col items-start gap-5">
                  {navlinks.map((navlink, i) => (
                    <li key={i}>
                      <Link
                        className="border-b-primary-bridge font-semibold hover:border-b-2 hover:text-primary-bridge"
                        href={navlink.href}
                        onClick={closeSheet}
                      >
                        {navlink.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mb-14 mt-auto flex items-center justify-start gap-5 text-xl">
                  <Link
                    className="text-black"
                    href="https://www.facebook.com/bridgethegap25/"
                    target="_blank"
                  >
                    <FaFacebookF className="cursor-pointer" />
                  </Link>

                  <Link
                    className="text-black"
                    href="https://x.com/BridgeTheGap25"
                    target="_blank"
                  >
                    <FaXTwitter className="cursor-pointer" />
                  </Link>

                  <Link
                    className="text-black"
                    href="https://www.instagram.com/bridge_the_gap25/"
                    target="_blank"
                  >
                    <FaInstagram className="cursor-pointer" />
                  </Link>

                  <Link
                    className="text-black"
                    href="https://www.pinterest.com/dizibridgethegap/"
                    target="_blank"
                  >
                    <FaPinterestP className="cursor-pointer" />
                  </Link>

                  <Link
                    className="text-black"
                    href="https://www.youtube.com/@BridgetheGap-25"
                    target="_blank"
                  >
                    <FaYoutube className="cursor-pointer" />
                  </Link>

                  <Link
                    className="text-black"
                    href="https://www.tiktok.com/@bridgethegap25?lang=en"
                    target="_blank"
                  >
                    <FaTiktok className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
