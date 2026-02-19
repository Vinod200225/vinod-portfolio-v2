import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Senior IT Lead",
    company: "Invisia Software Pvt Ltd",
    period: "2024 – Present",
    access: "Access Level : Root",
    highlights: [
      "Full ownership of IT infrastructure, security, and governance",
      "Led SOC 2 Type II audit readiness & evidence collection",
      "Deployed Zero Trust architecture across 250+ endpoints",
      "Managed CrowdStrike EDR, FortiGate, JumpCloud IAM",
    ],
  },
  {
    role: "Senior IT, Admin & Facilities",
    company: "Proziod Analytics",
    period: "2023 – 2024",
    access: "Access Level : Administrator",
    highlights: [
      "Transformed IT operations and security posture",
      "Implemented company-wide IAM with MFA enforcement",
      "Established IT governance policies & asset management",
      "Scaled infrastructure for rapid business growth",
    ],
  },
  {
    role: "IT Analyst",
    company: "Strategic Marketing & Research Team",
    period: "2020 – 2023",
    access: "Access Level : L3 Operations",
    highlights: [
      "Core IT support and infrastructure management",
      "Network administration & endpoint security",
      "Vendor management & procurement optimization",
      "Foundation in enterprise IT operations",
    ],
  },
];

const ExperienceTimeline = () => (
  <section id="experience" className="section-padding relative">
    <SectionHeading label="// Career" title="Operational Command History" />

    <div className="max-w-3xl mx-auto relative">

      {/* Animated Vertical Spine */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-px"
      />

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`relative mb-16 pl-12 md:pl-0 md:w-1/2 ${
            i % 2 === 0
              ? "md:pr-12 md:text-right"
              : "md:ml-auto md:pl-12"
          }`}
        >
          {/* Pulsing Node */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-2.5 md:left-auto top-2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_15px_hsl(var(--primary)/0.6)]"
            style={
              i % 2 === 0
                ? { right: "-8px", left: "auto" }
                : { left: "-8px" }
            }
          />

          {/* Period */}
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            {exp.period}
          </span>

          {/* Role */}
          <h3 className="font-heading font-bold text-xl text-foreground mt-2">
            {exp.role}
          </h3>

          <p className="text-muted-foreground text-sm mb-1">
            {exp.company}
          </p>

          {/* Access Badge */}
          <div className="inline-block mb-4 px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-primary/10 text-primary rounded-md border border-primary/20">
            {exp.access}
          </div>

          {/* Highlights */}
          <ul
            className={`space-y-2 text-sm ${
              i % 2 === 0 ? "md:text-right" : ""
            }`}
          >
            {exp.highlights.map((h, j) => (
              <li
                key={j}
                className="text-foreground/70 flex items-start gap-2"
              >
                {i % 2 !== 0 && (
                  <span className="text-primary shrink-0 mt-0.5">
                    ▸
                  </span>
                )}

                <span className={i % 2 === 0 ? "md:ml-auto" : ""}>
                  {h}
                </span>

                {i % 2 === 0 && (
                  <span className="text-primary shrink-0 mt-0.5 hidden md:inline">
                    ◂
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceTimeline;
