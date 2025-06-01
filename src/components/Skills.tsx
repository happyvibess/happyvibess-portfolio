import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAwslambda,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiGraphql,
} from 'react-icons/si';

const skillsData = {
  Frontend: [
    { name: 'React', icon: SiReact, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'JavaScript', icon: SiJavascript, level: 95 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, level: 85 },
    { name: 'Python', icon: SiPython, level: 80 },
    { name: 'GraphQL', icon: SiGraphql, level: 75 },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb, level: 85 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker, level: 75 },
    { name: 'AWS', icon: SiAwslambda, level: 70 },
    { name: 'Git', icon: SiGit, level: 90 },
  ],
};

const CircularProgress = ({ value, size = 85 }: { value: number; size?: number }) => {
  const progress = useMotionValue(0);
  const progressValue = useTransform(progress, [0, 100], [0, 1]);
  
  useEffect(() => {
    const animation = animate(progress, value, { duration: 1.5, delay: 0.2 });
    return animation.stop;
  }, [value]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="text-violet-500 drop-shadow-lg"
          style={{
            pathLength: progressValue,
            strokeDasharray: "1 1"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold">{Math.round(value)}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-[#0a0a0a]">
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
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-violet-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-400 border border-violet-500/20">
              My Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-8">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <skill.icon className="h-12 w-12 text-violet-400" />
                          <h4 className="font-medium text-lg text-white">{skill.name}</h4>
                          <CircularProgress value={skill.level} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

