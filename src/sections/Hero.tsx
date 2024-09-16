"use client"; // Ensures this component is treated as a Client Component

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { FaLinkedin, FaInstagram, FaMedium, FaTwitter } from "react-icons/fa"; // Ensure react-icons is installed

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const cogRef = useRef<HTMLImageElement>(null);
  const cylinderRef = useRef<HTMLImageElement>(null);
  const noodleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cogElement = cogRef.current;
    const cylinderElement = cylinderRef.current;
    const noodleElement = noodleRef.current;

    if (cogElement && cylinderElement && noodleElement) {
      // Animate cog image faster
      gsap.fromTo(
        cogElement,
        { y: 0 },
        {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: cogElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      // Animate cylinder image slower
      gsap.fromTo(
        cylinderElement,
        { y: 0 },
        {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: cylinderElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Animate noodle image
      gsap.fromTo(
        noodleElement,
        { y: 0 },
        {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: noodleElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
      className="overflow-x-clip w-full relative z-1 flex justify-center"
      style={{
        background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)",
      }}
    >
      <div className="container md:m-0 flex flex-col md:flex-row justify-space gap-x-100  items-center w-full px-4 md:px-0 space-y-10 md:space-y-0 md:space-x-10 relative left-100">
        <div className="md:w-[700px] text-left relative z-0">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Microsoft Student Chapter
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quo vitae molestias error sed, autem magnam sapiente harum voluptatum dicta
          </p>
          <div className="socialIcon flex gap-4 my-10">
            <a href="https://www.linkedin.com" className="social-icon text-blue-600 hover:text-blue-800">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com" className="social-icon text-pink-500 hover:text-pink-700">
              <FaInstagram size={30} />
            </a>
            <a href="https://medium.com" className="social-icon text-black hover:text-gray-800">
              <FaMedium size={30} />
            </a>
            <a href="https://twitter.com" className="social-icon text-blue-400 hover:text-blue-600">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full md:w-[600px]">
          <Image
            src={cogImage}
            alt="cog image"
            ref={cogRef}
            className="relative md:h-full md:w-full"
          />
          <Image
            src={CylinderImage}
            alt="cylinder image"
            width={250}
            ref={cylinderRef}
            className="w-40 md:w-100 absolute left-[-100px] md:top-[-110px] z-1"
          />
          <Image
            src={NoodleImage}
            alt="noodle image"
            width={200}
            ref={noodleRef}
            className="rotate-30deg w-40 md:w-48 absolute top-[75%] left-[90%] z-1"
          />
        </div>
      </div>
    </section>
  );
};
