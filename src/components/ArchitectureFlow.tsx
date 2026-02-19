import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  KeyRound,
  ShieldAlert,
  Monitor,
  Cloud,
  Activity,
  Database,
} from "lucide-react";

const steps = [
  { icon: KeyRound, label: "IAM Layer", sub: "Identity & Access Control" },
  { icon: ShieldAlert, label: "Firewall Layer", sub: "Network Defense" },
  { icon: Monitor, label: "Endpoint Layer", sub: "EDR Enforcement" },
  { icon: Cloud, label: "Cloud Layer", sub: "AWS & Hybrid Governance" },
  { icon: Activity, label: "Monitoring Layer", sub: "SIEM & Telemetry" },
  { icon: Database, label: "Recovery Layer", sub: "Backup & BCP" },
];

const ArchitectureFlow = () => (
  <section id="architecture" className="section-padding relative">

    <SectionHeading
      label="// Architecture"
      title="Zero-Trust Security Pipeline"
      description="Layered defense architecture with continuous monitoring"
    />

    <div className="max-w-6xl mx-auto relative">

      {/* Subtle Flow Pulse Line */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 relative">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="relative glass-card-glow p-6 text-center border border-border/40 hover:border-primary/50 transition-all duration-300 w-[160px] md:w-[180px]"
            >
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest text-green-400">
                Active
              </div>

              <div className="p-3 rounded-xl bg-primary/10 text-primary mx-auto mb-4 w-fit">
                <step.icon size={26} />
              </div>

              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                {step.label}
              </h4>

              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {step.sub}
              </p>

              {/* Subtle Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none rounded-lg" />
            </motion.div>

            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center text-primary/40 px-2">
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                >
                  <path
                    d="M0 7H26M26 7L20 1M26 7L20 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </motion.svg>
              </div>
            )}
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

export default ArchitectureFlow;
