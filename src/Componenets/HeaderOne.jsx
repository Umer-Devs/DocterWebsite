import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const HeaderOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'BOOKS', path: '/books' },
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary-blue text-white py-2 px-4 md:px-8"
      >
        <div className="custom-padding flex justify-between items-center">
          {/* Phone Number */}
          <motion.a 
            href="tel:+918374902234"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm md:text-base hover:text-gray-200 transition-colors"
          >
            <Phone size={16} className="animate-pulse" />
            <span>+91 8374902234</span>
          </motion.a>

          {/* Social Icons */}
          <div className="flex items-center gap-6 md:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-200 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white shadow-md py-4 "
      >
        <div className="custom-padding">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer"
              >
                <div className="text-primary-blue font-bold">
                  <span className="text-4xl md:text-5xl">B</span>
                  <span className="text-lg md:text-xl ml-1">Bookshop.org</span>
                  <sup className="text-xs">®</sup>
                </div>
              </motion.div>
            </a>

            {/* Search Bar - Desktop & Tablet */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex flex-1 max-w-xl "
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Books"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-12 rounded-full bg-[#E7E7E7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full hover:bg-[#5a3c8c] transition-colors"
                >
                  <Search size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary-blue p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>

          {/* Search Bar - Mobile */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Books"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-12 rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4a2c7c] transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-orange text-white p-2 rounded-full hover:bg-[#5a3c8c] transition-colors"
              >
                <Search size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Bar - Desktop */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:block bg-white outline-t  custom-padding outline-gray-400"
      >
        <div className='w-full bg-gray-200 h-0.5'></div>
        <div className=" ">
          <ul className="flex items-center justify-center gap-8 lg:gap-16 py-4">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <a
                  href={item.path}
                  className="relative text-black pr-4 border-r border-black   font-bold hover:text-primary-orange transition-colors group"
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-orange mt-2 group-hover:w-[78%] transition-all duration-300"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-200"
      >
        <nav className="px-4 py-2">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <a
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-primary-orange hover:text-white rounded-lg transition-all font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default HeaderOne;