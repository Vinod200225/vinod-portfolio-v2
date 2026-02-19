import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12 md:mb-16 text-center"
  >
    <span className="font-mono text-sm tracking-widest uppercase text-primary mb-3 block">{label}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">{title}</h2>
    {description && <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>}
  </motion.div>
);

export default SectionHeading;
