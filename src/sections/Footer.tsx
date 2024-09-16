"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-200">
      <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        <div className="relative z-30 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div>
            <div className="flex flex-raw gap-12 md:space-x-8 mb-6 md:mb-0">
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Navigation
                </h2>
                <nav className="flex flex-col space-y-2">
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                  <a href="#services" className="hover:text-white">
                    Events
                  </a>
                  <a href="#contact" className="hover:text-white">
                    Blogs
                  </a>
                  <a href="#privacy" className="hover:text-white">
                    Members
                  </a>
                </nav>
              </div>
              <div className="flex flex-col space-y-4 mt-6 md:mt-0">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Follow Us
                </h2>
                <div className="flex flex-col space-x-4 gap-3">
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-twitter text-2xl">Linkedin</i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/microsoft-learn-student-ambassadors/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-linkedin text-2xl">Google</i>
                  </a>
                  <a
                    href="https://github.com/ravi-aman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-github text-2xl">Github</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Subscribe to Blog */}
          <div className="relative  hidden  md:flex flex-col items-center md:items-end w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Subscribe to Our Blog
            </h2>
            <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 w-full md:w-auto"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="relative z-30 mt-6 text-center text-neutral-300 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
