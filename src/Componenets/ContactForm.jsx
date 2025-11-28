import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactForm = ({
  title = "Contact Us",
  description = "Bookshop.org digital gift cards are the perfect gift for any avid reader! The card value never expires, and it is added to the recipient's Bookshop.org account as store credit. Our gift cards can only be redeemed online on Bookshop.org, not in a physical bookstore. You can purchase multiple gift cards by adding them to your cart one at a time.",
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    country: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.number.trim()) newErrors.number = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          number: '',
          country: '',
          message: ''
        });
        alert('Form submitted successfully!');
      }
    }
  };

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

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
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
      className=" bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="custom-padding">
        <motion.div
          variants={itemVariants}
          className="bg-two via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-6">
              {title}
            </h2>
            <p className="text-primary-blue tracking-wider text-base md:text-lg leading-relaxed max-w-6xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div variants={inputVariants} className="relative">
                <div className="relative">
                  <User
                    size={20}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-[#ef5350]' : 'text-gray-400'
                    }`}
                  />
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter Your Name"
                    className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500'
                        : focusedField === 'name'
                        ? 'border-primary-blue shadow-lg shadow-red-100'
                        : 'border-primary-blue hover:border-[#e53935]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 ml-4"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div variants={inputVariants} className="relative">
                <div className="relative">
                  <Mail
                    size={20}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-[#ef5350]' : 'text-gray-400'
                    }`}
                  />
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter Your Email"
                    className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? 'border-red-100 focus:border-red-500'
                        : focusedField === 'email'
                        ? 'border-primary-blue shadow-lg shadow-red-100'
                        : 'border-primary-blue hover:border-[#e53935]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 ml-4"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Row 2: Number & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Number Input */}
              <motion.div variants={inputVariants} className="relative">
                <div className="relative">
                  <Phone
                    size={20}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'number' ? 'text-[#ef5350]' : 'text-gray-400'
                    }`}
                  />
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('number')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter Your Number"
                    className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.number
                        ? 'border-red-400 focus:border-red-500'
                        : focusedField === 'number'
                        ? 'border-primary-blue shadow-lg shadow-red-100'
                        : 'border-primary-blue hover:border-[#e53935]'
                    }`}
                  />
                </div>
                {errors.number && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 ml-4"
                  >
                    {errors.number}
                  </motion.p>
                )}
              </motion.div>

              {/* Country Input */}
              <motion.div variants={inputVariants} className="relative">
                <div className="relative">
                  <MapPin
                    size={20}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focusedField === 'country' ? 'text-[#ef5350]' : 'text-gray-400'
                    }`}
                  />
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('country')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter Your Country"
                    className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.country
                        ? 'border-red-400 focus:border-red-500'
                        : focusedField === 'country'
                        ? 'border-primary-blue shadow-lg shadow-red-100'
                        : 'border-primary-blue hover:border-[#e53935]'
                    }`}
                  />
                </div>
                {errors.country && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 ml-4"
                  >
                    {errors.country}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Message Textarea */}
            <motion.div variants={inputVariants} className="relative">
              <div className="relative">
                <MessageSquare
                  size={20}
                  className={`absolute left-4 top-6 transition-colors duration-300 ${
                    focusedField === 'message' ? 'text-[#ef5350]' : 'text-gray-400'
                  }`}
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter Your Message"
                  rows="6"
                  className={`w-full pl-12 pr-4 py-4 bg-white border-2 rounded-3xl text-gray-700 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : focusedField === 'message'
                      ? 'border-primary-blue shadow-lg shadow-red-100'
                      : 'border-primary-blue hover:border-[#e53935]'
                  }`}
                />
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1 ml-4"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={inputVariants}
              className="flex justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary-orange hover:bg-[#e53935] text-white font-bold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                SUBMIT NOW
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;