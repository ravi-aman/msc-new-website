'use client'

import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from 'next/image'
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className='z-0 py-8 md:py-12'>
      <div className='container z-0'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className='flex gap-14 flex-none pr-14' animate={{
            translateX: "-50%"
          }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
              repeatType:"loop"
            }}
          >
            <Image className='logo-ticker-image' src={acmeLogo} alt='acmeLogo' />
            <Image className='logo-ticker-image' src={quantumLogo} alt='quantumLogo' />
            <Image className='logo-ticker-image' src={celestialLogo} alt='celestialLogo' />
            <Image className='logo-ticker-image' src={echoLogo} alt='echoLogo' />
            <Image className='logo-ticker-image' src={pulseLogo} alt='pulseLogo' />
            <Image className='logo-ticker-image' src={apexLogo} alt='apexLogo' />

            {/* second set of logos for animation*/}
            <Image className='logo-ticker-image' src={acmeLogo} alt='acmeLogo' />
            <Image className='logo-ticker-image' src={quantumLogo} alt='quantumLogo' />
            <Image className='logo-ticker-image' src={celestialLogo} alt='celestialLogo' />
            <Image className='logo-ticker-image' src={echoLogo} alt='echoLogo' />
            <Image className='logo-ticker-image' src={pulseLogo} alt='pulseLogo' />
            <Image className='logo-ticker-image' src={apexLogo} alt='apexLogo' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker
