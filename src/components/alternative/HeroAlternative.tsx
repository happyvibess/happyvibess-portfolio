import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { HiArrowDown, HiCode, HiDownload } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';
import { useTypewriter } from '../../hooks/useTypewriter';
import type { HeroProps } from '../../types/hero';

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

const HeroAlternative: FC<Partial<HeroProps>> = (props) => {
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

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, white, transparent)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl opacity-20 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-12 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:w-1/2"
          >
            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-400 border border-violet-500/20">
                  Welcome to my portfolio
                </span>
                
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  {name}
                </h1>

                <div className="h-12 text-xl lg:text-2xl text-gray-300/90">
                  <span>{typedText}</span>
                  <span className="animate-blink text-violet-400">|</span>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/25 transition-shadow"
                  >
                    <HiCode className="w-5 h-5" />
                    View Projects
                  </motion.a>

                  <motion.a
                    href={resumeUrl}
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <HiDownload className="w-5 h-5" />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 mt-8"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
                <motion.a
                  href="https://www.buymeacoffee.com/happyvibess"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/20 transition-all duration-300"
                >
                  <SiBuymeacoffee className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-1/2 relative aspect-square max-w-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-full rounded-[3rem] overflow-hidden border border-white/10 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5"
            >
              <img
                src={profileImage}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="flex flex-col items-center text-gray-400 hover:text-violet-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <HiArrowDown className="w-5 h-5 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAlternative;

