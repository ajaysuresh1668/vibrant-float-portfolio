import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", icon: "🌐", color: "from-neon-purple to-neon-pink" },
  { name: "UI/UX Design", icon: "🎨", color: "from-neon-cyan to-neon-blue" },
  { name: "Creative Solutions", icon: "💡", color: "from-neon-pink to-neon-purple" },
  { name: "Digital Marketing", icon: "📈", color: "from-neon-blue to-neon-cyan" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block px-4 py-2 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate creative professional dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <h3 className="font-heading text-2xl font-bold mb-4 gradient-text">
                Professional Summary
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm AJAY, a creative professional with a passion for building 
                innovative digital solutions. With expertise spanning web development, 
                design, and digital strategy, I bring ideas to life with precision and creativity.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach combines technical excellence with creative thinking, 
                ensuring every project not only meets but exceeds expectations. 
                I believe in the power of collaboration and am always excited to 
                take on new challenges.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center text-sm font-bold">5+</div>
                </div>
                <span className="text-muted-foreground">Years of Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 4 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3 
                  }}
                  className="relative z-10"
                >
                  <span className="text-4xl mb-4 block">{skill.icon}</span>
                  <h4 className="font-heading font-semibold text-lg">{skill.name}</h4>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass-card p-6 text-center"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <span className="block font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
