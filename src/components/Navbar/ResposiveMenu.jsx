import React from "react";
import { motion } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden md:hidden"
    >
      <div className="mx-6 mt-6 p-6 bg-[#e73757] text-white rounded-2xl shadow-lg flex flex-col gap-6 text-center font-semibold">
        <a href="#" className="hover:text-gray-100 text-lg">HOME</a>
        <a href="#" className="hover:text-gray-100 text-lg">ABOUT</a>
        <a href="#" className="hover:text-gray-100 text-lg">SERVICES</a>
        <a href="#" className="hover:text-gray-100 text-lg">CONTACT</a>
      </div>
    </motion.div>
  );
};

export default ResponsiveMenu;


