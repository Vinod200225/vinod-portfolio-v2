import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Target, Lightbulb, Wrench, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "Threat Landscape",
    text: "Flat legacy network architecture with shared administrative credentials, no endpoint telemetry, and absence of compliance controls — enabling lateral movement risk and elevated breach exposure.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Response",
    text: "Designed and executed a Zero Trust security roadmap: centralized IAM (JumpCloud), network segmentation (FortiGate), endpoint detection (CrowdStrike), and strict least-privilege enforcement.",
  },
  {
    icon: Wrench,
    title: "Phased Deployment",
    text: "6-month structured rollout: Identity migration → Firewall hardening → EDR enforcement → Policy governance → Continuous monitoring & compliance documentation.",
  },
  {
    icon: TrendingUp,
    title: "Operational Impact",
    text: "100% EDR coverage, full MFA adoption, SOC 2 audit-ready posture, 60% incident reduction, encrypted endpoints, and centralized governance — transforming the organization into a hardened security environment.",
  },
];

const CaseStudy = () => (
  <section id="case-study" className="section-padding relative">

    <SectionHeading
      label="// Transformation"
      title="Enterprise Security Modernization"
      description="Zero Trust implementation across 250+ endpoints"
    />

    <div className="max-w-5xl mx-auto">

      {/* Executive Status Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest"
      >
        <div className="text-primary/70">
          Project Classification : High Impact
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Transformation Complete
        </div>
      </motion.div>

      {/* Case Study Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative glass-card-glow p-7 border border-border/40 hover:border-primary/40 transition-all duration-300"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none rounded-lg" />

            <div className="flex items-center gap-3 mb-4 relative">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <s.icon size={20} />
              </div>

              <h3 className="font-heading font-semibold text-foreground text-lg">
                {s.title}
              </h3>
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed relative">
              {s.text}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

export default CaseStudy;
