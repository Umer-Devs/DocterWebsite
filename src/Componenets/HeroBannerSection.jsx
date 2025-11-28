import React from 'react'
import { bannerOne, HerOneBg, HeroTwoBg } from '../assets';
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react';

const HeroBannerSection = ({
  title1 = "Explore Our Curated",
  title2 = "Collection of Books",
  description = "Discover a world of stories, knowledge, and inspiration. Our curated collection offers a diverse range of genres, authors, and themes, ensuring there's something for every reader. From classic literature to contemporary bestsellers, our selection reflects the rich tapestry of human creativity and imagination.",
  btn1 = "Explore Our Collection",
  btn2 = "Discover New Releases",
  imgOne ,
  imgTwo 
}) => {

  // Variants (bilkul same rakhe hain)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <main className='flex justify-center items-center'>
      {/* <img src={imgOne} alt="" /> */}
      <motion.section 
        className='grid lg:grid-cols-4 w-full'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Image */}
        <motion.div 
          className='hidden lg:flex justify-start items-center pl-2'
          variants={imageVariants}
        >
          <img className='rotate-360  ' src={imgOne || HeroTwoBg} alt="Decorative" />
        </motion.div>

        {/* Center Content */}
        <motion.section 
          className='p-6 lg:p-0 lg:col-span-2 flex flex-col justify-center items-center space-y-6 lg:space-y-8'
          variants={containerVariants}
        >
          <motion.h2 
            className='text-4xl font-bold text-primary-blue text-center lg:text-left'
            variants={textVariants}
          >
            {title1}
          </motion.h2>
          
          <motion.h1 
            className='text-5xl lg:text-6xl font-bold text-primary-orange text-center lg:text-left'
            variants={textVariants}
          >
            {title2}
          </motion.h1>
          
          <motion.p 
            className='text-primary-purple text-center tracking-wider max-w-4xl text-base lg:text-lg'
            variants={textVariants}
          >
            {description}
          </motion.p>  

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6 w-full sm:w-auto"
            variants={textVariants}
          >
            <motion.button
              className="btn-bg px-6 lg:px-8 py-3 rounded-full flex items-center justify-center gap-2 text-white text-sm lg:text-base whitespace-nowrap"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {btn1}
              <MoveRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.button>

            <motion.button
              className="border-gradient px-6 lg:px-8 py-3 rounded-full flex items-center justify-center gap-2 text-primary-orange text-sm lg:text-base whitespace-nowrap"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {btn2}
              <MoveRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Right Image */}
        <motion.div 
          className='hidden lg:flex justify-end items-center pr-2 '
          variants={imageVariants}
        >
          <img className='rotate-360   ' src={imgTwo || HerOneBg} alt="Decorative" />
        </motion.div>
      </motion.section>
    </main>
  )
}

export default HeroBannerSection