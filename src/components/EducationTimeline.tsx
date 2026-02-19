import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    institution: "Seshadripuram Evening College, Bengaluru",
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "CGPA: 8.9",
    period: "Aug 2025",
    status: "Credential Verified",
  },
  {
    institution: "Jetking",
    degree: "Diploma in Network Administration",
    period: "Jan 2023",
    status: "Technical Certification",
  },
  {
    institution: "Vidya Mandir Independent PU College",
    degree: "PUC (PCME)",
    period: "Jul 2020",
    status: "Academic Foundation",
  },
];

const EducationTimeline = () => (
  <section id="education" className="section-padding relative">

    <SectionHeading
      label="// Credentials"
      title="Technical Foundation"
      description="Verified academic and technical qualifications"
    />

    <div className="max-w-4xl mx-auto space-y-10">

      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="relative glass-card-glow p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
        >
          {/* Verification Badge */}
          <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">
            {edu.status}
          </div>

          {/* Degree */}
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {edu.degree}
          </h3>

          {/* Institution */}
          <p className="text-foreground/70 text-sm mb-1">
            {edu.institution}
          </p>

          {/* Detail */}
          {edu.detail && (
            <p className="text-primary text-sm mb-2">
              {edu.detail}
            </p>
          )}

          {/* Period */}
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            {edu.period}
          </span>

          {/* Subtle Cyber Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none rounded-lg" />
        </motion.div>
      ))}

    </div>
  </section>
);

export default EducationTimeline;
