import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { KeyRound, ShieldCheck, Network, Cloud, Monitor, Cog } from "lucide-react";

const expertise = [
  {
    icon: KeyRound,
    title: "Identity & Access Management",
    tags: ["JumpCloud", "MFA", "RBAC"],
    points: [
      "Centralized IAM across 120+ users with JumpCloud",
      "Enforced MFA achieving 100% adoption",
      "Role-based access control with least-privilege policies",
    ],
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 & Compliance",
    tags: ["SOC 2", "Policy", "Audit"],
    points: [
      "Led SOC 2 Type II audit readiness",
      "Developed 15+ security governance policies",
      "Implemented evidence collection & monitoring",
    ],
  },
  {
    icon: Network,
    title: "Zero Trust & Network Security",
    tags: ["FortiGate", "VPN", "ZTNA"],
    points: [
      "Deployed FortiGate firewall with IPS/IDS",
      "Configured site-to-site VPN and ZTNA",
      "Network segmentation and traffic monitoring",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    tags: ["AWS", "AD", "DNS"],
    points: [
      "AWS EC2, S3, IAM administration",
      "Active Directory & DNS failover management",
      "Hybrid cloud architecture design",
    ],
  },
  {
    icon: Monitor,
    title: "Endpoint & Server Protection",
    tags: ["CrowdStrike", "Encryption", "EDR"],
    points: [
      "CrowdStrike EDR across 250+ endpoints",
      "BitLocker & FileVault encryption enforcement",
      "Server hardening and patch management",
    ],
  },
  {
    icon: Cog,
    title: "Automation & Governance",
    tags: ["PowerShell", "Jira", "ITSM"],
    points: [
      "PowerShell automation for IT operations",
      "ITSM workflows via Jira Service Management",
      "Automated compliance reporting",
    ],
  },
];

const ExpertiseDashboard = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="expertise" className="section-padding relative">
      <SectionHeading label="// Command Center" title="Core Expertise" description="Enterprise security and infrastructure capabilities" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {expertise.map((item, i) => {
          const isActive = active === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActive(isActive ? null : i)}
              className={`glass-card-glow p-6 cursor-pointer transition-all duration-300 ${isActive ? "border-primary/40" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-2 border-t border-border">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {!isActive && (
                <p className="text-xs text-muted-foreground/60 mt-2 font-mono">Click to expand</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpertiseDashboard;
