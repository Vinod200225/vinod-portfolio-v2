import { motion } from "framer-motion";
import { ChevronDown, Download, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Cyber Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,170,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,140,255,0.08),transparent_40%)]" />

      {/* Subtle Scan Line */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            System Secure
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-primary/70">
            SOC 2 : Active
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-primary/70">
            Zero Trust : Enforced
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">VINOD</span>{" "}
          <span className="text-gradient relative">
            KUMAR K
            <span className="absolute -inset-2 blur-2xl bg-primary/10 -z-10" />
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-xs sm:text-sm tracking-widest text-muted-foreground mb-4 uppercase"
        >
          Senior IT Lead | Information Security | Infrastructure Governance
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Securing Infrastructure. Enforcing Zero Trust. Building Audit-Ready Systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#expertise"
            className="btn-primary-glow flex items-center justify-center gap-2"
          >
            View Command Center
            <ChevronDown size={18} />
          </a>

          <button
            onClick={scrollToContact}
            className="btn-outline-glow flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Secure Resume Access
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/40" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
