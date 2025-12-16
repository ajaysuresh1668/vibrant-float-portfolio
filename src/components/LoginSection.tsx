import { motion } from "framer-motion";
import { useState } from "react";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality coming soon!");
    }, 1500);
  };

  return (
    <section id="login" className="py-24 px-6">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block px-4 py-2 rounded-full bg-neon-pink/20 border border-neon-pink/30 text-neon-pink text-sm font-medium mb-4"
          >
            User Access
          </motion.span>
          <h2 className="font-heading text-4xl font-bold mb-4">
            <span className="gradient-text">Login</span> to Continue
          </h2>
          <p className="text-muted-foreground">
            Access your personalized dashboard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan" />
          
          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-neon-purple/20 blur-xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-neon-cyan/20 blur-xl"
          />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <label className="block text-sm font-medium mb-2 text-foreground/80">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all"
                required
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-2 text-foreground/80">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all"
                required
              />
            </motion.div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border bg-muted accent-neon-purple" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-neon-cyan hover:text-neon-purple transition-colors">
                Forgot password?
              </a>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full glow-button bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan py-4 rounded-xl font-bold text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                  />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center relative z-10">
            <p className="text-muted-foreground text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-neon-purple hover:text-neon-pink transition-colors font-medium">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginSection;
