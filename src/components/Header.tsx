import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

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

const Header = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            YourName
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100
                       dark:from-gray-800 dark:to-gray-900
                       hover:from-gray-100 hover:to-gray-200
                       dark:hover:from-gray-700 dark:hover:to-gray-800
                       focus:outline-none focus:ring-2 focus:ring-primary/50
                       transform transition-all duration-300 ease-in-out
                       shadow-sm hover:shadow-md border border-gray-200/50 
                       dark:border-gray-700/50 hover:border-primary/30 
                       dark:hover:border-primary/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              role="switch"
              aria-checked={isDark}
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
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 1 : 0,
                    scale: isDark ? 1 : 0.5
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <HiSun className="w-5 h-5 text-yellow-500" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 0 : 1,
                    scale: isDark ? 0.5 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <HiMoon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100
                       dark:from-gray-800 dark:to-gray-900
                       hover:from-gray-100 hover:to-gray-200
                       dark:hover:from-gray-700 dark:hover:to-gray-800
                       focus:outline-none focus:ring-2 focus:ring-primary/50
                       transform transition-all duration-300 ease-in-out
                       shadow-sm hover:shadow-md border border-gray-200/50 
                       dark:border-gray-700/50 hover:border-primary/30 
                       dark:hover:border-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              role="switch"
              aria-checked={isDark}
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
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 1 : 0,
                    scale: isDark ? 1 : 0.5
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <HiSun className="w-5 h-5 text-yellow-500" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isDark ? 0 : 1,
                    scale: isDark ? 0.5 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <HiMoon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </motion.div>
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-x-0 top-20 bg-white dark:bg-gray-900 shadow-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

