import React from "react";
import { motion } from "framer-motion";

import { HeroBanner } from "../assets";
import { MoveRight } from "lucide-react";
import { ContactForm, EmailForm, FeaturedOne, Footer, HeaderOne, HomeSliderOne } from "../Componenets";
import DynamicBookSlider from "../Componenets/DynamicBookSlider";
import FeatureTwo from "../Componenets/FeatureTwo";

const Home = () => {
//   const newBooks = [
//   {
//     id: 1,
//     title: "The Women",
//     author: "Kristin Hannah",
//     rating: 3,
//     image: "https://www.freepik.com/premium-psd/top-angle-view-book-cover-mockup-design_11018063.htm#fromView=keyword&page=1&position=8&uuid=156f9ac1-1206-4903-b61a-50ce737931e4&query=Book"
//   },
//   {
//     id: 2,
//     title: "Funny Story",
//     author: "Emily Henry",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9d9?w=400&h=520&fit=crop"
//   },
//   {
//     id: 3,
//     title: "James",
//     author: "Percival Everett",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=520&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Martyr!",
//     author: "Kaveh Akbar",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=520&fit=crop"
//   },
//   {
//     id: 5,
//     title: "Intermezzo",
//     author: "Sally Rooney",
//     rating: 4,
//     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=520&fit=crop"
//   },
//   {
//     id: 6,
//     title: "The God of the Woods",
//     author: "Liz Moore",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=520&fit=crop"
//   },
//   {
//     id: 7,
//     title: "All Fours",
//     author: "Miranda July",
//     rating: 4,
//     image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=520&fit=crop"
//   },
//   {
//     id: 8,
//     title: "Wandering Stars",
//     author: "Tommy Orange",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=520&fit=crop"
//   }
// ];
  // Animation variants
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
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <HeaderOne />
      {/* hero section  */}
      <main className="bg-hero grid lg:grid-cols-2 gap-8 lg:gap-12 mt-[3%] px-4 sm:px-8 lg:px-0">
        <motion.div
          className="flex flex-col justify-center items-start lg:pl-16 space-y-6 lg:space-y-8 py-8 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-blue font-semibold leading-tight"
            variants={textVariants}
          >
            Curate Your{" "}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-orange">
              Collection.
            </span>{" "}
            <br className="hidden lg:block" />
            Elevate Your Reading{" "}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-orange">
              Experience.
            </span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-justify text-primary-purple tracking-wider max-w-2xl"
            variants={textVariants}
          >
            Immerse yourself in the world of exceptional books and show your
            support for independent bookstores places where every purchase
            reflects your taste, your values, and your love for authentic
            storytelling. Each book you choose not only enriches your mind, but
            also strengthens the passion and dedication of the people who keep
            the spirit of reading alive.
          </motion.p>

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
              Explore Our Collection
              <MoveRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.button>
            <motion.button
              className="border-gradient px-6 lg:px-8 py-3 rounded-full flex items-center justify-center gap-2 text-primary-orange text-sm lg:text-base whitespace-nowrap"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Discover New Releases
              <MoveRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            className=" w-full max-w-full"
            src={HeroBanner}
            alt="Hero Banner"
          />
        </motion.div>
      </main>

      <section>
        <HomeSliderOne/>
      </section>

      <section>
        <DynamicBookSlider/>
      </section>
      <section>
        <DynamicBookSlider title="New Releases" description="Be the first to discover the latest titles, handpicked for their brilliance and impact." />
      </section>
      <section>
        <FeaturedOne/>
      </section>
      <section className="mt-[5%]">
        <FeatureTwo/>
      </section>
      <section className="mt-[5%]">
        <ContactForm/>
      </section>
      <section className="mt-[5%]">
        <EmailForm/>
      </section>
      <section className="mt-[5%]">
        <Footer/>
      </section>


    </>
  );
};

export default Home;