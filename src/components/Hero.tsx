import { FC, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown, HiCode, HiDownload } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';
import { useTypewriter } from '../hooks/useTypewriter';
import type { HeroProps } from '../types/hero';

const defaultProps: HeroProps = {
  name: 'HappyVibess',
  roles: [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Open Source Contributor',
    'Tech Innovator',
  ],
  description: `Passionate about creating beautiful, responsive, and user-friendly web applications. 
  Specializing in modern web technologies and delivering high-quality solutions.`,
  socialLinks: [
    { icon: FaGithub, href: 'https://github.com/happyvibess', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/happyvibess', label: 'Twitter' },
  ],
  resumeUrl: '/resume.pdf',
  profileImage: '/images/profile.jpg',
};

const Hero: FC<Partial<HeroProps>> = (props) => {
  const {
    name,
    roles,
    description,
    socialLinks,
    resumeUrl,
    profileImage,
  } = { ...defaultProps, ...props };

  const typedText = useTypewriter({
    words: roles,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000,
  });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] dark:bg-[#0a0a0a]"
      aria-label="Hero section"
    >
      {/* Modern Mesh Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left backdrop-blur-md bg-white/5 dark:bg-black/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                {name}
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl sm:text-3xl text-gray-300 mb-8 h-[48px]"
              variants={itemVariants}
            >
              <span className="typing-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{typedText}</span>
              <span className="animate-blink text-purple-400">|</span>
            </motion.div>

            <motion.p
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-medium shadow-lg shadow-purple-500/25"
                aria-label="View my projects"
              >
                <HiCode className="h-6 w-6" />
                View Projects
              </a>
              <a
                href={resumeUrl}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-medium backdrop-blur-sm"
                download
                aria-label="Download my resume"
              >
                <HiDownload className="h-6 w-6" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
              <motion.a
                href="https://www.buymeacoffee.com/happyvibess"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFDD00] hover:text-[#FFED4A] transition-all duration-300 transform hover:scale-110 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                aria-label="Buy me a coffee"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiBuymeacoffee className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[40px] opacity-20 blur-2xl" />
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[40px] p-2 backdrop-blur-xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt={`${name}'s profile`}
                  className="rounded-[32px] object-cover w-full h-full"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Modern Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: 1.5
            }
          }}
        >
          <motion.a
            href="#about"
            className="group relative flex flex-col items-center gap-3 p-4"
            aria-label="Scroll to About section"
            whileHover="hover"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl"
              variants={{
                hover: {
                  scale: 1.2,
                  opacity: 0.8,
                  transition: { duration: 0.3 }
                }
              }}
            />
            
            {/* Glass container */}
            <motion.div
              className="relative flex flex-col items-center px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
              variants={{
                hover: {
                  y: -4,
                  scale: 1.05,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                Scroll Down
              </span>
              
              {/* Arrow animation container */}
              <motion.div
                className="relative w-6 h-6 mt-1"
                variants={{
                  hover: {
                    y: [0, 4, 0],
                    transition: {
                      y: {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }
                    }
                  }
                }}
              >
                <HiArrowDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

