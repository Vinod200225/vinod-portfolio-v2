import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";

const metrics = [
  { value: 6, suffix: "+", label: "Years Operational" },
  { value: 250, suffix: "+", label: "Endpoints Secured" },
  { value: 120, suffix: "+", label: "Users Managed" },
  { value: 100, suffix: "%", label: "EDR Coverage" },
  { value: 1, suffix: "", label: "SOC 2 Compliant", display: "✓" },
  { value: 1, suffix: "", label: "Zero Trust Active", display: "✓" },
];

const LiveMetrics = () => (
  <section id="metrics" className="section-padding relative">

    <SectionHeading
      label="// Monitoring"
      title="Security Operations Status"
      description="Live enterprise security posture overview"
    />

    <div className="max-w-6xl mx-auto">

      {/* System Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-8 text-xs font-mono uppercase tracking-widest"
      >
        <div className="flex items-center gap-2 text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          System Status : Secure
        </div>

        <div className="text-primary/70">
          Monitoring Mode : Active
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative glass-card-glow p-6 text-center border border-border/40 hover:border-primary/40 transition-all duration-300"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none rounded-lg" />

            <div className="relative text-3xl md:text-4xl font-bold text-primary mb-2">
              {m.display ? (
                <span className="text-green-400">{m.display}</span>
              ) : (
                <AnimatedCounter end={m.value} suffix={m.suffix} />
              )}
            </div>

            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
              {m.label}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

export default LiveMetrics;
