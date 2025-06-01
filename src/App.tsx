import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import NavigationAlternative from "./components/alternative/NavigationAlternative";
import Hero from "./components/Hero";
import HeroAlternative from "./components/alternative/HeroAlternative";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [useAlternativeHero, setUseAlternativeHero] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Update theme-color meta tag when theme changes
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#0f172a' : '#ffffff');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${
      useAlternativeHero ? 'bg-[#0a0a0a] text-gray-100' : 'bg-background text-foreground'
    }`}>
      {useAlternativeHero ? <NavigationAlternative /> : <Header />}
      <motion.div
        className="fixed md:top-28 md:right-6 right-4 top-24 z-50 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl -z-10 rounded-xl"
          initial={false}
          animate={{ 
            opacity: useAlternativeHero ? 0.6 : 0.4,
            scale: useAlternativeHero ? 1.15 : 1.1
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.button
          onClick={() => setUseAlternativeHero(!useAlternativeHero)}
          className={`group relative px-4 py-3 md:py-2.5 rounded-xl 
                   ${useAlternativeHero
                     ? 'bg-[#0a0a0a]/90 hover:bg-[#0a0a0a]/95'
                     : 'bg-white/95 dark:bg-gray-800/95 hover:bg-white/100 dark:hover:bg-gray-800/100'
                   }
                   backdrop-blur-lg shadow-lg
                   transition-all duration-300 flex items-center gap-2.5
                   border border-white/10 dark:border-white/5
                   hover:border-violet-500/30 dark:hover:border-violet-500/30
                   focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2
                   focus:ring-offset-transparent
                   hover:shadow-xl hover:shadow-violet-500/10
                   dark:hover:shadow-violet-500/20
                   active:scale-95 transform
                   md:touch-none touch-pan-x`}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Switch to ${useAlternativeHero ? 'modern' : 'classic'} layout`}
          role="switch"
          aria-checked={useAlternativeHero}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setUseAlternativeHero(!useAlternativeHero);
            }
          }}
        >
          <motion.div
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full
                       bg-gradient-to-r from-violet-500 to-fuchsia-500
                       shadow-[0_0_8px_rgba(139,92,246,0.5)]`}
            initial={false}
            animate={{
              scale: useAlternativeHero ? 1 : 0.5,
              opacity: useAlternativeHero ? 1 : 0.3
            }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          />
          <div className="relative h-5 min-w-[4.5rem] md:min-w-[5rem] flex items-center justify-center overflow-hidden">
            <motion.span 
              className={`absolute font-medium tracking-wide ${
                useAlternativeHero
                  ? 'text-gray-300'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              initial={false}
              animate={{
                y: useAlternativeHero ? 24 : 0,
                opacity: useAlternativeHero ? 0 : 1,
                scale: useAlternativeHero ? 0.9 : 1
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              Modern
            </motion.span>
            <motion.span 
              className={`absolute font-medium tracking-wide ${
                useAlternativeHero
                  ? 'text-gray-300'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
              initial={false}
              animate={{
                y: useAlternativeHero ? 0 : -24,
                opacity: useAlternativeHero ? 1 : 0,
                scale: useAlternativeHero ? 1 : 0.9
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              Classic
            </motion.span>
          </div>
          <motion.span 
            className={`font-medium tracking-wide ml-1
                     transition-opacity duration-300
                     ${useAlternativeHero
                       ? 'text-gray-300 opacity-80 group-hover:opacity-100'
                       : 'text-gray-900 dark:text-gray-100 opacity-90 group-hover:opacity-100'
                     }`}
            initial={false}
            animate={{
              scale: [0.98, 1]
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          >
            Layout
          </motion.span>
        </motion.button>
      </motion.div>
      <main>
        <AnimatePresence mode="wait">
          {useAlternativeHero ? (
            <motion.div
              key="alternative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroAlternative />
            </motion.div>
          ) : (
            <motion.div
              key="original"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Skills />
          <Projects />
          <Experience />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
