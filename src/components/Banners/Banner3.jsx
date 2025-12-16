import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import BannerPng from '../../assets/fruits/banner-bg.jpg';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div className="container max-w-7xl mx-auto px-8">
        <div style={bgStyle} className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
          
          {/* Blank div*/}
          <div></div>
          

          {/* Brand Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              
              <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase whitespace-nowrap"
              >
                Get Fresh<br />Fruits Today
              </motion.h1>

              <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                voluptatum corporis corrupti exercitationem quaerat accusamus,
                fugiat nam aut
              </motion.p>

            

              {/* Button Section */}
              <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn flex items-center gap-2">
                  <IoBagHandleOutline />               
                  Order Now
                </button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner3;