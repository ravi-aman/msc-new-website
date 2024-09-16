"use client"; // Enable client-side rendering

import { useEffect, useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"; // SVG for Menu Icon
import Link from "next/link";
import { gsap } from "gsap";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"; // Import Sheet components

export const Header = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      gsap.fromTo(
        button,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.2,
          ease: "power1.inOut",
          paused: true,
          onHover: true,
          overwrite: "auto",
        }
      );

      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.2 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    }
  }, []);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Be a better developer and enjoy the environment
        </p>
        <div className="flex items-center gap-1">
          <p>Join us now</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      <div className="px-10 m-5">
        <div className="w-full m-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </div>
            <div className="flex items-center">
              {/* Sheet Component Trigger for Mobile View */}
              <Sheet>
                <SheetTrigger asChild>
                  <span>
                    <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" /> {/* Mobile Menu Icon */}
                  </span>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    {/* Center the logo in the Sheet title */}
                    <SheetTitle className="flex justify-center">
                      <Image src={Logo} alt="Saas Logo" height={40} width={40} />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col items-center gap-4 mt-6">
                    {/* Navigation Links inside the Sheet */}
                    <Link href="#home" className="text-lg text-black hover:underline">
                      Home
                    </Link>
                    <Link href="#about" className="text-lg text-black hover:underline">
                      About
                    </Link>
                    <Link href="#events" className="text-lg text-black hover:underline">
                      Events
                    </Link>
                    <Link href="#members" className="text-lg text-black hover:underline">
                      Members
                    </Link>
                    <Link href="#blogs" className="text-lg text-black hover:underline">
                      Blogs
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Navigation for Desktop View */}
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <Link href="#home" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Home
                </Link>
                <Link href="#about" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  About
                </Link>
                <Link href="#events" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Events
                </Link>
                <Link href="#members" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Members
                </Link>
                <Link href="#blogs" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Blogs
                </Link>
                <button
                  ref={buttonRef}
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight inline-flex items-center justify-center w-[120px] hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                >
                  Join us now
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
