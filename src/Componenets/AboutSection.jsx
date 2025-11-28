import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Globe, Users, Heart } from 'lucide-react';
import { EmailFormq } from '../assets';

const AboutSection = ({
    title = "Celebrating the",
    titleHighlight = "World of Books",
    subtitle = "Where every book tells a story, and every story connects us to a global literary community.",
    image = "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=700&fit=crop",
    paragraphs = [
        "At Bookshop.org, we believe in the power of books to inspire, educate, and transform lives. As part of our evolution, we're transitioning into a digital Book Fair, a global space for book lovers, authors, and publishers to explore the vast and diverse world of literature.",
        "Our platform is dedicated to providing comprehensive, up-to-date information about books from all genres, authors, and regions across the globe. Whether you're a casual reader looking for your next great novel, an academic seeking in-depth research materials, or a passionate bibliophile curious about rare and collectible editions, Bookshop.org is here to serve as your gateway to the literary world.",
        "We aim to offer more than just a collection of titles. Our mission is to foster a deeper connection with books by providing insightful details, background information, author profiles, and literary discussions. Here, you'll find descriptions, reviews, and articles about books that celebrate both well-known classics and hidden gems that deserve attention.",
        "We're not just about books; we're about the community they create. Our platform celebrates the shared experience of reading, learning, and connecting with like-minded individuals. While we don't sell books directly, we aim to be a valuable resource, empowering readers and inspiring them to dive deeper into the world of literature.",

    ],
    ctaText = "EXPLORE BOOKS",
    ctaLink = "/books"
}) => {

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

    const imageVariants = {
        hidden: { x: 50, opacity: 0, scale: 0.95 },
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

    const decorativeIcons = [
        { icon: BookOpen, color: 'text-[#ef5350]', delay: 0.5 },
        { icon: Globe, color: 'text-[#4a2c7c]', delay: 0.6 },
        { icon: Users, color: 'text-[#ef5350]', delay: 0.7 },
        { icon: Heart, color: 'text-[#4a2c7c]', delay: 0.8 }
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        >
            <div className="custom-padding">
                {/* Header with Title */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-primary-blue">{title} </span>
                        <span className="text-primary-orange">{titleHighlight}</span>
                    </h2>
                    <p className="text-gray-800 text-base md:text-lg max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-4">
                    {/* Left Side - Text Content */}
                    <motion.div
                        variants={containerVariants}
                        className="space-y-6"
                    >
                        {paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                className="text-primary-purple  md:text-lg tracking-wider text-justify"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        variants={imageVariants}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            transition={{ duration: 0.4 }}
                            className="relative group"
                        >
                            {/* Background decoration */}


                            {/* Image Container */}
                            <div className="">
                                <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    src={EmailFormq}
                                    alt="Books"
                                    className="rounded-xl"
                                />


                            </div>
                        </motion.div>

                        {/* Floating Decorative Icons */}

                    </motion.div>
                </div>
                <div className='mb-4'>
                    <p className='text-primary-purple  md:text-lg tracking-wider text-justify'>As we continue to grow, our platform is transforming into a modern digital Book Fair — an online global destination where readers, writers, and publishers can discover the richness and variety of literature from around the world.

                        Our mission is to bring you detailed, reliable, and up-to-date information on books from every field and genre. Whether you’re simply searching for an enjoyable read, looking for academic or research-based content, or seeking rare and collectible editions, Bookshop.org wants to be your trusted doorway into the literary landscape.

                        We offer far more than book listings. Our goal is to deepen your connection with reading by providing thoughtful insights, author backgrounds, rich descriptions, and meaningful literary conversations. From famous classics to overlooked masterpieces, our articles, reviews, and recommendations highlight books that truly deserve your attention.

                        Books connect people, and we celebrate this shared bond. Through reading and discovery, our platform creates a space for community, learning, and conversation. Although we do not sell books directly, our purpose is to guide, inspire, and enrich your reading journey.</p>
                </div>
                {/* Bottom CTA Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4a2c7c] text-center sm:text-left">
                        Explore the World of Books with Us
                    </h3>
                    <motion.a
                        href={ctaLink}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-orange hover:bg-[#e53935] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        {ctaText}
                        <ArrowRight
                            size={22}
                            className="group-hover:translate-x-2 transition-transform duration-300"
                        />
                    </motion.a>
                </motion.div>
            </div>


        </motion.section>
    );
};

export default AboutSection;