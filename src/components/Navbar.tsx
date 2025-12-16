import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Login", href: "#login" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-heading font-bold text-2xl gradient-text"
          >
            AJAY
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: "hsl(var(--neon-cyan))" }}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/919444308959"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan px-6 py-2 rounded-full font-semibold text-foreground"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
