import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HomeSliderOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: 1,
      title: 'Bestsellers',
      description: 'Discover the books that are shaping conversations and sparking imaginations worldwide. Our carefully curated selection of bestsellers represents the pinnacle of literary excellence.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
      buttonText: 'BROWSE'
    },
    {
      id: 2,
      title: 'New Arrivals',
      description: 'Stay ahead of the curve with the latest titles from renowned authors and emerging voices. Be among the first to indulge in newly released works that promise to redefine your reading experience.',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop',
      buttonText: 'BROWSE'
    },
    {
      id: 3,
      title: 'Limited Editions',
      description: 'For collectors and connoisseurs, our Limited Editions offer an exclusive opportunity to own rare, beautifully crafted books. These works are treasures to be cherished for generations.',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
      buttonText: 'BROWSE'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className=" mt-[4%] py-10 bg-white"
    >
      <div className="custom-padding">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-16">
          {/* Left Side - Title & Arrows */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <h2 className="text-4xl md:text-5xl  font-bold text-primary-purple mb-6 lg:mb-8">
              Explore our Top Categories
            </h2>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.08, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="p-4 rounded-full bg-[#ef5350] hover:bg-[#e53935] text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div variants={itemVariants} className="flex-1 max-w-5xl">
            <p className="text-justify text-primary-purple tracking-wider">
              Explore our thoughtfully curated categories, where every selection is handpicked to inspire and enrich your reading experience. From globally celebrated bestsellers to emerging literary voices, our categories offer a refined collection that caters to your discerning taste. Whether you're delving into fiction, gaining fresh insights from nonfiction, or discovering rare limited editions, each category is an invitation to indulge in the finest books. Elevate your reading journey with our premium selections.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className=" rounded-2xl overflow-hidden  transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72 lg:h-80">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col items-center">
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-primary-purple mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-sm md:text-base  mb-8 min-h-[100px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {category.description}
                </motion.p>

                <motion.a
                  href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-purple text-primary-purple font-semibold text-sm tracking-wider rounded-md hover:bg-primary-purple hover:text-white transition-all duration-300 group/button"
                >
                  {category.buttonText}
                  <ArrowRight 
                    size={18} 
                    className="group-hover/button:translate-x-1 transition-transform duration-300" 
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Categories Link */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-end"
        >
          <motion.a
            href="/categories"
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary-orange font-semibold text-lg hover:gap-3 transition-all duration-300 group"
          >
            View All Categories
            <ArrowRight 
              size={22} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSliderOne;