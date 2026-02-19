import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  KeyRound,
  Mail,
  Cloud,
  ShieldAlert,
  Shield,
  Terminal,
  Kanban,
  Server,
} from "lucide-react";

const stack = [
  { icon: KeyRound, name: "JumpCloud", category: "Identity & Access" },
  { icon: Mail, name: "Microsoft 365", category: "Collaboration Suite" },
  { icon: Cloud, name: "AWS", category: "Cloud Infrastructure" },
  { icon: ShieldAlert, name: "FortiGate", category: "Network Security" },
  { icon: Shield, name: "CrowdStrike", category: "Endpoint Protection" },
  { icon: Terminal, name: "PowerShell", category: "Automation & Scripting" },
  { icon: Kanban, name: "Jira", category: "Governance & Change" },
  { icon: Server, name: "Windows Server", category: "Core Infrastructure" },
];

const TechStackGrid = () => (
  <section id="stack" className="section-padding relative">

    <SectionHeading
      label="// Governance"
      title="Governed Technology Stack"
      description="Centralized tool ownership and security enforcement"
    />

    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">

      {stack.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ y: -6 }}
          className="relative glass-card p-6 text-center border border-border/40 hover:border-primary/40 transition-all duration-300 cursor-default"
        >
          {/* Status Badge */}
          <div className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest text-green-400">
            Active
          </div>

          {/* Icon */}
          <div className="mb-4 flex justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
            <tech.icon
              size={30}
              className="transition-all duration-300 hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
            />
          </div>

          {/* Name */}
          <h4 className="font-mono text-xs tracking-widest uppercase text-foreground/80 mb-1">
            {tech.name}
          </h4>

          {/* Category */}
          <p className="text-[11px] text-muted-foreground">
            {tech.category}
          </p>

          {/* Subtle Cyber Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none rounded-lg" />
        </motion.div>
      ))}

    </div>
  </section>
);

export default TechStackGrid;
