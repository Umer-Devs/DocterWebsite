import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { NewFour, NewOne, NewThree, NewTwo } from '../assets';

const NewReleaseBookComponent = ({
  books = []
}) => {
  // Default books data
  const defaultBooks = [
  {
    id: 1,
    title: 'Best Offer Wins',
    author: 'Myron Kachin',
    rating: 5,
    image: NewOne,
    review: '"Not since Gone Girl have I been so gripped by a narrative voice. This is a tale of blackest comedy, spiralling obsession and ultimate horror. By turns laugh-out-loud funny and appalling, Marisa Kashino asks how far you would go to secure your dream house, then goes several steps further than you would ever dare. Compulsive and unputdownable. Highly recommended.” —Alex Michaelides, author of The Silent Patient"',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'As Many Souls as Stars',
    author: 'Sasha Laurens',
    rating: 5,
    image: NewTwo,
    review: '"This novel will bend and twist your notion of what love is, while leaving you utterly bewitched...Siegel uses her skills as a writer of historical fiction to highlight the changing form of oppression against women across centuries, while infusing a compelling supernatural arc that makes this story one to remember." —Kirkus Reviews (starred review)',
    reviewer: 'Barnes (internal review)',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'Capitalism',
    author: 'Sven Beckert',
    rating: 4,
    image: NewThree,
    review: '"Sven Beckert delivers a deeply researched and powerful exploration of how modern capitalism emerged, evolved, and reshaped societies across the world. A monumental and essential work that stands as a definitive reference."',
    imagePosition: 'left'
  },
  {
    id: 4,
    title: 'Supersaurio',
    author: 'Juanon Gomez',
    rating: 5,
    image: NewFour,
    review: '"The bleakly hilarious Meryem El Mehdatis Supersaurio renders a satire of youth, work, and ordinary life so bitand refreshingly honest that the real world feels just a little more ridiculous by comparison. I tore through this book.—Jinwoo Chong, author of Flux"',
    imagePosition: 'right'
  }
];


  const booksList = books.length > 0 ? books : defaultBooks;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariantsLeft = {
    hidden: { x: -60, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  const imageVariantsRight = {
    hidden: { x: 60, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className=" bg-white py-20 "
    >
      <div className="  max-w-7xl mx-auto space-y-16 md:space-y-24">
        {booksList.map((book, index) => (
          <motion.div
            key={book.id}
            variants={itemVariants}
            className={`flex flex-col ${
              book.imagePosition === 'right' 
                ? 'lg:flex-row-reverse' 
                : 'lg:flex-row'
            } gap-8 lg:gap-12 items-center`}
          >
            {/* Book Image */}
            <motion.div
              variants={book.imagePosition === 'left' ? imageVariantsLeft : imageVariantsRight}
              className="w-full lg:w-auto flex-shrink-0"
            >
              <motion.a
                href={`/book/${book.id}`}
                whileHover={{ scale: 1.05, rotate: book.imagePosition === 'left' ? -2 : 2 }}
                transition={{ duration: 0.3 }}
                className="block relative group"
              >
                <div className="relative bg-white p-4 rounded-xl  shadow-xl max-w-xl ">
                  {/* Shadow/Background Effect */}
                 
                  
                  {/* Book Cover */}
                  <motion.img
                    whileHover={{ y: -5 }}
                    src={book.image}
                    alt={book.title}
                    className="relative  rounded-lg  mx-auto lg:mx-0"
                  />
                </div>
              </motion.a>
            </motion.div>

            {/* Book Details */}
            <motion.div
              variants={itemVariants}
              className="flex-1 space-y-4"
            >
              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary-blue"
              >
                {book.title}
              </motion.h2>

              {/* Author */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-primary-purple font-medium"
              >
                {book.author}
              </motion.p>

              {/* Rating */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-1"
              >
                {renderStars(book.rating)}
              </motion.div>

              {/* Review Quote */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
               
                <p className=" text-primary-purple tracking-wider  italic ">
                  {book.review}
                </p>
                {book.reviewer && (
                  <p className="text-gray-500 text-sm mt-3 pl-6">
                    — {book.reviewer}
                  </p>
                )}
              </motion.div>

              {/* View Details Button */}
              
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#4a2c7c] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#ef5350] rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
};

export default NewReleaseBookComponent;