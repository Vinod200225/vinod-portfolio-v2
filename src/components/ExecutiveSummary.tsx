import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Shield, Server, Users, Lock } from "lucide-react";

const highlights = [
  { icon: Shield, text: "SOC 2 readiness & audit governance across enterprise environments" },
  { icon: Lock, text: "IAM, RBAC, MFA — Zero Trust architecture enforcement" },
  { icon: Users, text: "Managing 120+ users and 250+ secured endpoints" },
  { icon: Server, text: "End-to-end infrastructure ownership & modernization strategy" },
];

const ExecutiveSummary = () => (
  <section id="summary" className="section-padding relative">

    <SectionHeading label="// Profile" title="Mission Overview" />

    <div className="max-w-4xl mx-auto">

      {/* Classification Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-primary/70"
      >
        <span>Classification : Internal</span>
        <span>Operational Status : Active</span>
      </motion.div>

      {/* Main Summary Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative glass-card p-8 md:p-10 mb-10 border-l-4 border-primary"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

        <p className="relative text-foreground/80 text-lg leading-relaxed">
          Senior IT Lead with{" "}
          <span className="text-primary font-semibold">6+ years</span> of enterprise IT leadership 
          driving security transformation, infrastructure modernization, and governance frameworks. 
          Architect of Zero Trust implementations, SOC 2 audit readiness programs, 
          and enterprise-scale infrastructure operations. 
          Combines technical depth with strategic oversight to secure assets 
          while enabling scalable business growth.
        </p>
      </motion.div>

      {/* Live Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
      >
        {[
          { label: "Experience", value: "6+ Years" },
          { label: "Users Secured", value: "120+" },
          { label: "Endpoints", value: "250+" },
          { label: "Compliance", value: "SOC 2 Ready" },
        ].map((m, i) => (
          <div
            key={i}
            className="glass-card p-4 text-center border border-border/40 hover:border-primary/40 transition-colors"
          >
            <p className="text-primary font-semibold text-lg">{m.value}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {m.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Capability Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-5 flex items-start gap-4 group hover:border-primary/30 transition-colors duration-300"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
              <h.icon size={20} />
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {h.text}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ExecutiveSummary;
