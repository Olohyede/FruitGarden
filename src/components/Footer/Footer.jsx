import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLeaf} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Footer = () => {
  return <footer className='bg-[#fce7f3] py-12 mt-12'>
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1, delay: 0.2 }}
    className='container max-w-7xl mx-auto px-8 flex justify-between items-center'>

        {/* Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className="text-[#de2c4d]">Fruit</p>
            <p className='text-[#fb923c]'>Garden</p>
            <FaLeaf className='text-green-500' />
        </div>

        {/* Social icons selection */}
        <div className='text-3xl flex items-center gap-4 text-gray-700'>
            <FaInstagram/>
            <FaFacebookF/>
            <FaYoutube/>
            <FaTwitter/>
        </div>


    </motion.div>
  </footer>
}

export default Footer