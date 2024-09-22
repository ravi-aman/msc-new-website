import StickyScrollRevealDemo from "@/sections/About";
import Events from "@/sections/Events";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Contact from "@/sections/Contact";
import CallToction from "@/sections/CallToAction";
import Testimonials from "@/sections/Testimonials";
import LogoTicker from "@/sections/LogoTicker";
import SignIn from "@/sections/test";

export default function Home() {
  return <div id="home">
    <Hero />
    <LogoTicker />
    {/* <StickyScrollRevealDemo/> */}
    <Events />
    <CallToction />
    <Contact />
    <Testimonials />
  </div>;
}
