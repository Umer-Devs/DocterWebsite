import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BookOne, BookTwo } from '../assets';

const FeatureTwo = ({
  badge = "Featured Book",
  title = "Simple way of Piece Life",
  author = "By Armor Ramsey",
  description = '“Piece Life” is a gentle reminder that happiness comes from appreciating the small moments. This book explores how tiny pieces of our daily lives—gratitude, kindness, patience, and self-reflection—can come together to create a more peaceful and fulfilling existence. With simple ideas and practical wisdom, it encourages readers to slow down, breathe, and build a life made of meaningful pieces.',
  image = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=700&fit=crop",
  buttonText = "VIEW MORE",
  buttonLink = "/book/birds-gonna-be-happy",
  backgroundColor = "from-pink-100 via-orange-50 to-pink-50"
}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const badgeVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={`relative py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-one overflow-hidden`}
    >
      {/* Featured Badge */}
      <motion.div
        variants={badgeVariants}
        className="absolute top-0 left-6"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-primary-orange text-white px-8 md:px-12 py-4 md:py-5 rounded-bl-3xl rounded-br-3xl shadow-xl"
        >
          <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
            {badge}
          </span>
        </motion.div>
      </motion.div>

      <div className="custom-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


             {/* Right Side - Book Details */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 flex flex-col items-end"
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple leading-tight mb-3">
                {title}
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-primary-orange text-right tracking-wider font-semibold text-lg md:text-xl tracking-wide Capitilize"
              >
                By {author}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-right text-base md:text-lg leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* View More Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href={buttonLink}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-orange text-primary-orange font-bold text-base md:text-lg rounded-lg hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                {buttonText}
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </motion.a>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#4a2c7c] to-transparent rounded-full blur-3xl -z-10"
            />
          </motion.div>
          {/* Left Side - Book Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-start lg:justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
             
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src={BookTwo}
                  alt={title}
                  className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                />
                
              
             
            </motion.div>
          </motion.div>

         
        </div>
      </div>

      {/* Background decorative circles */}
     
    </motion.section>
  );
};

export default FeatureTwo;