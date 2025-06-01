import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiPython, SiTensorflow, SiReact, SiMlflow, SiGithub } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';
import { BsRobot } from 'react-icons/bs';
import { TbBrandOpenai } from 'react-icons/tb';

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  achievements: string[];
  gradient: string;
}

const experiences: ExperienceData[] = [
  {
    title: 'AI Solutions Developer',
    company: 'Independent Projects',
    period: '2025 - Present',
    description: 'Developing advanced AI solutions focusing on system prompt transparency and AI development tools.',
    icon: <TbBrandOpenai className="w-8 h-8" />,
    technologies: ['Python', 'TensorFlow', 'MLflow', 'React', 'LangChain'],
    achievements: [
      'Created claritas-ai for system prompt transparency across multiple AI models',
      'Developed ai_dev_assistant for streamlined AI development workflows',
      'Implemented comprehensive AI model integration systems'
    ],
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
  },
  {
    title: 'E-commerce Security Specialist',
    company: 'Marketplace Security Projects',
    period: '2025',
    description: 'Building AI-powered security and optimization solutions for e-commerce platforms.',
    icon: <MdSecurity className="w-8 h-8" />,
    technologies: ['Machine Learning', 'Python', 'Security Analytics', 'React'],
    achievements: [
      'Developed Fiverr anti-phishing detection system',
      'Created EtsyGuard-AI for automated shop management and optimization',
      'Implemented AI-powered analytics for e-commerce optimization'
    ],
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
  },
  {
    title: 'MLOps Engineer',
    company: 'ML Infrastructure Projects',
    period: '2025',
    description: 'Optimizing machine learning operations and deployment workflows.',
    icon: <SiMlflow className="w-8 h-8" />,
    technologies: ['MLflow', 'Python', 'DevOps', 'CI/CD', 'Docker'],
    achievements: [
      'Developed mlflow-assist for streamlined ML pipeline management',
      'Optimized ML model deployment processes',
      'Implemented automated testing and validation workflows'
    ],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'Trading Systems Developer',
    company: 'Automated Trading Solutions',
    period: '2025',
    description: 'Developing automated trading systems and market analysis tools.',
    icon: <BsRobot className="w-8 h-8" />,
    technologies: ['Python', 'Trading APIs', 'Automation', 'Data Analysis'],
    achievements: [
      'Created trading_signal_bot for automated market analysis',
      'Implemented real-time trading signals system',
      'Developed comprehensive market data analysis tools'
    ],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  },
];

const Experience: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-[#0a0a0a]">
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20">
              Career Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  variants={itemVariants}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:grid-flow-dense'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50" />

                  {/* Card */}
                  <motion.div
                    className={`relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 
                      ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${experience.gradient} text-white`}>
                          {experience.icon}
                        </div>
                        <span className="text-sm text-gray-400">{experience.period}</span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
                        <p className="text-lg text-purple-400 mb-4">{experience.company}</p>
                        <p className="text-gray-400">{experience.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${experience.gradient} bg-opacity-10 text-white/80
                                hover:bg-opacity-20 transition-all duration-300 cursor-default backdrop-blur-sm border border-white/5`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <ul className="space-y-2">
                          {experience.achievements.map((achievement) => (
                            <motion.li 
                              key={achievement}
                              className="text-gray-400 flex items-center gap-3 hover:text-white transition-colors duration-300"
                              whileHover={{ x: 4 }}
                            >
                              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.gradient} shadow-lg`} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
