"use client"; // Ensure this is correctly added

import React from "react";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Cylinder from "@/assets/cylinder.png";
import Pyramid from "@/assets/pyramid.png";
import { motion } from "framer-motion";

// Animation variants for Star and Spring (existing)
const starAnimation = {
    animate: {
        y: [0, -40, 20, 0], // Random bounce up-down movement
        // rotate: [0, 15, -15, 0], // Rotation for a twisting effect
        // scale: [1, 1.2, 0.8, 1], // Scaling up and down
        // opacity: [1, 0.8, 1], // Fading in and out
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const springAnimation = {
    animate: {
        y: [0, -30, 30, -15, 15, 0], // A bounce with more varied heights
        rotate: [0, 10, -10, 0], // Small rotation added for variety
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Animation variants for Cylinder and Pyramid (new)
const cylinderAnimation = {
    animate: {
        x: [0, 50, -50, 0], // Random horizontal movement
        rotate: [0, -30, 30, 0], // Rotate back and forth
        scale: [1, 0.9, 1.1, 1], // Scaling for effect
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const pyramidAnimation = {
    animate: {
        x: [0, -50, 50, 0], // Random horizontal movement
        y: [0, 20, -20, 0], // Up-down movement
        rotate: [0, 20, -20, 0], // Rotate for effect
        scale: [1, 1.1, 0.9, 1], // Scaling effect
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

function CallToAction() {
    return (
        <section className="cta-section py-24 my-20 relative dark:bg-gray-800">
            {/* Star Image for Desktop */}
            <motion.div
                variants={starAnimation}
                animate="animate"
                className="hidden md:block absolute bottom-100 left-10 transform -translate-x-1/4 -translate-y-1/2"
            >
                <Image
                    src={starImage}
                    alt="Star image"
                    width={360}
                    height={360}
                    className="star-image"
                />
            </motion.div>

            {/* Cylinder Image for Desktop */}
            <motion.div
                variants={cylinderAnimation}
                animate="animate"
                className=" z-7 hidden md:block absolute top-20 right-20 transform translate-x-1/4 -translate-y-1/2"
            >
                <Image
                    src={Cylinder}
                    alt="Cylinder image"
                    width={100}
                    height={100}
                    className="cylinder-image"
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8">
                {/* Desktop View */}

                {/* Spring Image for Desktop */}
                <motion.div
                    variants={springAnimation}
                    animate="animate"
                    className="hidden md:block absolute bottom-0 right-10 transform translate-x-1/4 -translate-y-1/2"
                >
                    <Image
                        src={springImage}
                        alt="Spring image"
                        width={360}
                        height={360}
                        className="spring-image"
                    />
                </motion.div>

                {/* Pyramid Image for Desktop */}
                <motion.div
                    variants={pyramidAnimation}
                    animate="animate"
                    className="hidden md:block absolute top-[-10px] left-[0px] transform translate-x-1/4 -translate-y-1/2"
                >
                    <Image
                        src={Pyramid}
                        alt="Pyramid image"
                        width={100}
                        height={100}
                        className="pyramid-image"
                    />
                </motion.div>

                {/* Mobile View Images */}
                <div className="block md:hidden relative">
                    {/* Star Image */}
                    <motion.div
                        variants={starAnimation}
                        animate="animate"
                        className="absolute bottom-10 left-[-10%] transform -translate-y-1/2"
                    >
                        <Image
                            src={starImage}
                            alt="Star image"
                            width={120}
                            height={120}
                            className="star-image"
                        />
                    </motion.div>

                    {/* Lower Spring Image */}
                    <motion.div
                        variants={springAnimation}
                        animate="animate"
                        className="absolute -bottom-[50%] right-[-10%] transform translate-y-1/2"
                    >
                        <Image
                            src={springImage}
                            alt="Spring image"
                            width={120}
                            height={120}
                            className="spring-image"
                        />
                    </motion.div>

                    {/* Cylinder Image for Mobile */}
                    <motion.div
                        variants={cylinderAnimation}
                        animate="animate"
                        className="absolute top-20 right-[-10%] transform -translate-y-1/2"
                    >
                        <Image
                            src={Cylinder}
                            alt="Cylinder image"
                            width={100}
                            height={100}
                            className="cylinder-image"
                        />
                    </motion.div>

                    {/* Pyramid Image for Mobile */}
                    <motion.div
                        variants={pyramidAnimation}
                        animate="animate"
                        className="absolute top-40 left-[-15%] transform translate-y-1/2"
                    >
                        <Image
                            src={Pyramid}
                            alt="Pyramid image"
                            width={100}
                            height={100}
                            className="pyramid-image"
                        />
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                        Enjoy
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:text-gray-100">
                        Are you excited now
                    </h2>
                    <p className="mt-6 text-base md:text-xl text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        eos, sunt unde illo totam dolor amet ullam?
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
                        <button className="btn btn-primary px-4 py-2 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out">
                            Join Us now
                        </button>
                        <button className="btn btn-text px-4 py-2 text-base md:text-lg font-semibold border border-gray-300 hover:border-gray-400 text-gray-800 dark:text-gray-200 rounded-lg transition duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
