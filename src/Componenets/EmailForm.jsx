import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

const EmailForm = ({
  title = "Subscribe to Our Newsletter",
  description = "Stay connected to the world of exceptional books. Join our list for exclusive updates, curated picks, and early access to new arrivals.",
  image = "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
  buttonText = "Submit",
  onSubmit
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    
    if (onSubmit) {
      onSubmit(email);
    } else {
      console.log('Email submitted:', email);
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

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

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className="py-0 overflow-hidden bg-white w-full"
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left Side - Content */}
          <motion.div
            variants={leftVariants}
            className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 px-8 md:px-12 lg:px-16   flex items-center"
          >
            <div className="w-full max-w-xl">
              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-6 leading-tight"
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-primary-purple  tracking-wider text-base md:text-lg leading-relaxed mb-10"
              >
                {description}
              </motion.p>

              {/* Email Form */}
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="relative"
              >
                <div className="relative flex">
                  {/* Email Icon */}
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <Mail
                      size={22}
                      className={`transition-colors duration-300 ${
                        isFocused ? 'text-[#ef5350]' : 'text-gray-400'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Enter Your Email Address"
                    disabled={isSubmitted}
                    className={`flex-1 pl-14 pr-4 py-5 bg-white border-2 rounded-l-full text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      error
                        ? 'border-red-400'
                        : isFocused
                        ? 'border-[#ef5350]'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isSubmitted ? 'bg-gray-50' : ''}`}
                  />

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitted}
                    className={`px-8 md:px-12 py-5 font-bold text-white rounded-r-full transition-all duration-300 flex items-center gap-2 ${
                      isSubmitted
                        ? 'bg-green-500'
                        : 'bg-primary-orange hover:bg-[#e53935] shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={22} />
                        <span className="hidden sm:inline">Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">{buttonText}</span>
                        <span className="sm:hidden">
                          <Send size={20} />
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-3 ml-5"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Success Message */}
                {isSubmitted && !error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm mt-3 ml-5 flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    Thank you for subscribing!
                  </motion.p>
                )}
              </motion.form>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-10 left-10 w-32 h-32 bg-[#4a2c7c] rounded-full blur-3xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-20 right-20 w-40 h-40 bg-primary-orange rounded-full blur-3xl -z-10"
              />
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            variants={rightVariants}
            className="relative overflow-hidden bg-gray-200"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <img
                src={image}
                alt="Newsletter"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Decorative Book Stack Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#4a2c7c]/30 to-transparent backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EmailForm;