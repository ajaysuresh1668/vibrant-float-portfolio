import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-sm font-medium mb-6">
                ✨ Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Suresh Philips</span>
            </motion.h1>

            <motion.p
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Creative Professional & Developer
            </motion.p>

            <motion.p
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transforming ideas into stunning digital experiences. 
              Let's create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://wa.me/919444308959"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan px-8 py-4 rounded-full font-bold text-lg text-foreground inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Work With Us
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all inline-flex items-center justify-center gap-2"
              >
                About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Glow rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-neon-purple/30 border-dashed" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-neon-cyan/20" />
            </motion.div>

            {/* Floating orbs around photo */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-6 h-6 rounded-full bg-neon-purple glow-effect"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, -15, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-5 w-4 h-4 rounded-full bg-neon-cyan glow-effect"
            />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                x: [0, -8, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/3 left-0 w-3 h-3 rounded-full bg-neon-pink glow-effect"
            />

            {/* Profile Image */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-effect border-4 border-neon-purple/50">
                <img
                  src={profilePhoto}
                  alt="Suresh Philips"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-purple/20 via-transparent to-neon-cyan/10 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
