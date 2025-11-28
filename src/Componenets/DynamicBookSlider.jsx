import React, { useState } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Slider = Slick.default ? Slick.default : Slick;

const DynamicBookSlider = ({
  title,
  description,
  books = [],
}) => {
  const defaultBooks = [
    { id: 1, title: "Project Hail Mary", author: "Andy Weir", rating: 5, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=520&fit=crop" },
    { id: 2, title: "Nobody's Girl", author: "Virginia Roberts Giuffre", rating: 5, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=520&fit=crop" },
    { id: 3, title: "You Better Be Lightning", author: "Andrea Gibson", rating: 5, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=520&fit=crop" },
    { id: 4, title: "Billy Collins", author: "Pamela Sztybel", rating: 5, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=520&fit=crop" },
    { id: 5, title: "Klara and the Sun", author: "Kazuo Ishiguro", rating: 4, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=520&fit=crop" },
    { id: 6, title: "The Silent Patient", author: "Alex Michaelides", rating: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=520&fit=crop" },
  ];

  // Sirf yeh line change hui — ab title, description, books sab props se control honge
  const booksList = Array.isArray(books) && books.length > 0 ? books : defaultBooks;

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
      />
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),

    appendDots: (dots) => (
      <div className="mt-12 relative flex items-center justify-center">
        <ul className="flex justify-center items-center gap-3"> {dots} </ul>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
          <Link
            to="/books"
            className="text-primary-orange font-bold text-sm md:text-base flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View More <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    ),

    customPaging: (i) => (
      <div className="flex items-center justify-center cursor-pointer ">
        <motion.div
          initial={false}
          animate={{
            scale: i === currentSlide ? 1 : 1,
          }}
          className={`rounded-full flex items-center justify-center transition-all duration-300 ${i === currentSlide
              ? "w-8 h-8 border border-primary-orange p-3"
              : "w-4 h-4"
            }`}
        >
          <div
            className={`rounded-full transition-all duration-300 ${i === currentSlide
                ? "w-2.5 h-2.5 bg-primary-orange"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        </motion.div>
      </div>
    ),

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" } },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-padding w-full">

        {/* Header - ab yeh bhi dynamic hai lekin style same */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-blue mb-4 tracking-tight">
            {title || "Bestsellers"}
          </h2>
          <p className="text-primary-purple/70 text-base md:text-lg max-w-2xl mx-auto font-medium">
            {description || "Discover the books that are captivating readers worldwide and defining the literary landscape."}
          </p>
        </motion.div>

        {/* Slider - bilkul same jaise pehle tha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {booksList.map((book) => (
              <div key={book.id} className="px-4 my-8">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl p-4 transition-all group rounded-md shadow-md group-hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative mb-6 overflow-hidden">
                    <img
                      src={book.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=520&fit=crop"}
                      alt={book.title}
                      className="transform mx-auto w-[60%] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-primary-blue font-bold text-lg md:text-xl line-clamp-1 group-hover:text-primary-orange transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-primary-purple/60 text-sm font-medium">
                      {book.author}
                    </p>
                    <div className="flex justify-center gap-1 pt-1">
                      {renderStars(book.rating)}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Mobile View More */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/books"
            className="text-primary-orange font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View More <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DynamicBookSlider;