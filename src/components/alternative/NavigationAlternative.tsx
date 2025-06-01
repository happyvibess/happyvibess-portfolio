import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const NavigationAlternative = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out
                ${isScrolled
                  ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-black/5'
                  : 'bg-transparent'
                }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 
                       rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"
              animate={{
                opacity: [0.5, 0.7, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.a
              href="#"
              className="relative text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 
                       bg-clip-text text-transparent bg-[length:200%_auto] group-hover:bg-[length:100%_auto]
                       transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              HappyVibess
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-3 py-2 text-gray-300 hover:text-violet-400 
                         transition-colors duration-300 group focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-violet-500/50 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/70 to-violet-500/0 
                             scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-white/[0.05] backdrop-blur-md
                       hover:bg-white/[0.1] border border-white/[0.05]
                       hover:border-violet-500/20 transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-violet-500/50 focus-visible:ring-offset-2
                       focus-visible:ring-offset-transparent"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="relative w-5 h-5"
                initial={false}
                animate={{ 
                  rotate: isDark ? 180 : 0,
                  scale: [0.9, 1]
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 1 : 0,
                    scale: isDark ? 1 : 0.5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <HiSun className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 0 : 1,
                    scale: isDark ? 0.5 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMoon className="w-5 h-5 text-violet-400" />
                </motion.div>
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-white/[0.05] backdrop-blur-md
                       hover:bg-white/[0.1] border border-white/[0.05]
                       hover:border-violet-500/20 transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-violet-500/50 focus-visible:ring-offset-2
                       focus-visible:ring-offset-transparent"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative w-5 h-5"
                animate={{ 
                  rotate: isDark ? 180 : 0,
                  scale: [0.9, 1]
                }}
                transition={{ duration: 0.4 }}
              >
                {isDark ? (
                  <HiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <HiMoon className="w-5 h-5 text-violet-400" />
                )}
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] backdrop-blur-md
                       hover:bg-white/[0.1] border border-white/[0.05]
                       hover:border-violet-500/20 transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-violet-500/50 focus-visible:ring-offset-2
                       focus-visible:ring-offset-transparent"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-5 h-5 text-gray-300" />
                ) : (
                  <HiMenu className="w-5 h-5 text-gray-300" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-x-0 top-20 bg-[#0a0a0a]/95 backdrop-blur-xl 
                       border-b border-white/[0.05] shadow-lg shadow-black/10 
                       md:hidden z-30 overflow-hidden"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1],
                height: { duration: 0.4 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="py-4 space-y-0.5">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-6 py-3.5 text-gray-300 hover:text-violet-400
                             hover:bg-white/[0.05] active:bg-white/[0.1]
                             transition-all duration-300 relative overflow-hidden
                             focus-visible:outline-none focus-visible:bg-white/[0.08]
                             focus-visible:text-violet-400 touch-action-manipulation"
                    style={{
                      WebkitTapHighlightColor: 'transparent'
                    }}
                    tabIndex={0}
                    role="menuitem"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none"
        animate={{
          opacity: isScrolled ? 0.9 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </header>
  );
};

export default NavigationAlternative;

