import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiPython, SiTensorflow, SiPytorch, SiMlflow } from 'react-icons/si';
import { HiShieldCheck, HiChartBar, HiLightningBolt } from 'react-icons/hi';

interface ProjectData {
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  gradient: string;
}

const projects: ProjectData[] = [
  {
    title: 'MLflow Assist',
    description: 'AI-powered MLflow automation and optimization tool for streamlined MLOps workflows and model management.',
    icon: <SiMlflow className="w-8 h-8" />,
    technologies: ['Python', 'MLflow', 'PyTorch', 'TensorFlow', 'GPT'],
    features: ['Model monitoring', 'Performance optimization', 'Automated MLOps'],
    github: 'https://github.com/happyvibess/mlflow-assist',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    title: 'Fiverr Phishing Detector',
    description: 'Advanced anti-phishing detection system designed specifically for Fiverr\'s marketplace security.',
    icon: <HiShieldCheck className="w-8 h-8" />,
    technologies: ['Python', 'Cybersecurity', 'Machine Learning', 'API Integration'],
    features: ['Real-time threat detection', 'Fraud prevention', 'Marketplace protection'],
    github: 'https://github.com/happyvibess/fiverr-phishing-detector',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'EtsyGuard AI Demo',
    description: 'AI-powered analytics and optimization tool for Etsy shops, providing intelligent insights and recommendations.',
    icon: <HiChartBar className="w-8 h-8" />,
    technologies: ['Python', 'AI/ML', 'Data Analytics', 'Etsy API'],
    features: ['Shop analytics', 'Performance tracking', 'Optimization suggestions'],
    github: 'https://github.com/happyvibess/EtsyGuard-AI-Demo',
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
  },
  {
    title: 'Trading Signal Bot',
    description: 'Automated trading signals and market analysis bot providing real-time insights and recommendations.',
    icon: <HiLightningBolt className="w-8 h-8" />,
    technologies: ['Python', 'Financial APIs', 'Data Analysis', 'Machine Learning'],
    features: ['Real-time signals', 'Market analysis', 'Automated alerts'],
    github: 'https://github.com/happyvibess/trading_signal_bot',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
];

const Projects: FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-[#0a0a0a]">
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
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
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 border border-purple-500/20">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Latest Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 h-full hover:border-white/[0.1] transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                          aria-label="View source on GitHub"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="View live demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white/80
                              hover:bg-opacity-20 transition-all duration-300 cursor-default backdrop-blur-sm border border-white/5`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <motion.li 
                            key={feature} 
                            className="text-gray-400 flex items-center gap-3 hover:text-white transition-colors duration-300"
                            whileHover={{ x: 4 }}
                          >
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} shadow-lg`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
