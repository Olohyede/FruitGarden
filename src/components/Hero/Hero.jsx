import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import HeroPng from '../../assets/fruits/fruit-plate.png';
import LeafPng from '../../assets/fruits/leaf.png';
import {motion} from "framer-motion"
import { FadeRight } from '../../utility/animation';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Text Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            {/* Heading */}
            <motion.h1
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-snug">
              <span className="font-averia">Healthy</span>
              <br />
              <span className="font-averia">Fresh </span>
              <span className="text-[#fb923c] font-averia">Fruits!</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible" 
            className="text-2xl tracking-wide">Order Now For Fresh Healthy Life</motion.p>

            {/* Description */}
            <motion.p
            variants={FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className="text-gray-400">
              Healthy and yummy food for fresh morning breakfast. Eat daily for good health and
              mind. Order now and get 20% off on your first order.
            </motion.p>

            {/* Button */}
            <motion.div
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2">
                <IoBagHandleOutline />
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
          initial={{ opacity: 0, x: 200, rotate: 75}}
          animate={{ opacity: 1, x: 0, rotate: 0}}
          transition={{ duration: 1, delay: 0.2}}
            src={HeroPng}
            alt="Fruit plate"
            className="hero-image w-[350px] md:w-[550px] drop-shadow"
          />
        </div>

        {/* Leaf Image */}
        <div
          className="absolute top-10 md:top-4 left-[30%] md:left-[40%] blur-[3px] opacity-80 z-0"
          style={{
            transform: 'translateX(-50%) rotate(40deg)',
          }}
        >
          <motion.img
          initial={{ opacity: 0, y: -200, rotate: 75}}
          animate={{ opacity: 1, y: 0, rotate: 0}}
          transition={{ duration: 1, delay: 1.5}}
          src={LeafPng} alt="" className="w-[150px] md:w-[250px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
