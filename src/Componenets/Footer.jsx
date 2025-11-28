import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = ({
  logo = "Bookshop.org",
  tagline = "Curating exceptional books, supporting independent bookstores.",
  email = "promotions@bookshop.org",
  quickLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'BOOKS', path: '/books' },
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'CONTACT US', path: '/contact' }
  ],
  socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ]
}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className="bg-two py-16 md:py-20 px-6 md:px-8 lg:px-12"
    >
      <div className="custom-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section - Logo & Tagline */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo */}
            <a href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <div className="text-[#4a2c7c] font-bold">
                  <span className="text-5xl md:text-6xl">B</span>
                  <span className="text-xl md:text-2xl ml-2">{logo}</span>
                  <sup className="text-xs">®</sup>
                </div>
              </motion.div>
            </a>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-base leading-relaxed max-w-xs"
            >
              {tagline}
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={containerVariants}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  variants={socialVariants}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-[#ef5350] hover:bg-[#e53935] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#ef5350] uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.path}
                    whileHover={{ x: 5, color: '#ef5350' }}
                    className="text-gray-700 hover:text-[#ef5350] font-medium text-base transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section - Contact Us */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#ef5350] uppercase tracking-wide">
              Contact Us
            </h3>
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#ef5350] text-base transition-colors duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-[#ef5350] group-hover:bg-[#e53935] text-white flex items-center justify-center shadow-md transition-all duration-300"
              >
                <Mail size={18} />
              </motion.div>
              <span className="group-hover:underline">{email}</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Bookshop.org. All rights reserved.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex items-center gap-6"
            >
              <motion.a
                href="/privacy"
                whileHover={{ scale: 1.05, color: '#ef5350' }}
                className="text-gray-600 hover:text-[#ef5350] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                whileHover={{ scale: 1.05, color: '#ef5350' }}
                className="text-gray-600 hover:text-[#ef5350] text-sm transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#4a2c7c] rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-72 h-72 bg-[#ef5350] rounded-full blur-3xl -z-10"
      />
    </motion.footer>
  );
};

export default Footer;