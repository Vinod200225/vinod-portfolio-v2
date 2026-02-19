import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Linkedin, Download, Shield } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "vinod252002@gmail.com", href: "mailto:vinod252002@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91" },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vinod-kumar-k-3b265b238",
    href: "https://www.linkedin.com/in/vinod-kumar-k-3b265b238",
  },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzo7FO-JxtAbpeasn2dB5HERLC0l_Pwt_akcciZS10mYA2E8L3bNlnnYlYl60SxNedlsg/exec";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: "", company: "", email: "" });
    } catch (error) {
      alert("Transmission Failed.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding relative">

      <SectionHeading
        label="// Secure Access"
        title="Communication Gateway"
        description="Encrypted channel for professional engagement"
      />

      <div className="max-w-2xl mx-auto">

        {/* Secure Header Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest"
        >
          <div className="flex items-center gap-2 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Channel Encrypted
          </div>
          <div className="text-primary/70">
            TLS Secured Transmission
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-glow p-8 space-y-6 border border-border/40"
        >
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                <c.icon size={18} />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-foreground/80 text-sm">{c.value}</span>
                )}
              </div>
            </div>
          ))}

          <div className="pt-6 border-t border-border">
            <button
              onClick={() => {
                setSuccess(false);
                setOpen(true);
              }}
              className="btn-primary-glow w-full flex items-center justify-center gap-2 text-sm"
            >
              <Shield size={16} />
              Request Secure Resume Access
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-card-glow p-8 w-full max-w-md relative border border-primary/30">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-muted-foreground"
            >
              ✕
            </button>

            {!success ? (
              <>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Secure Resume Request
                </h3>

                <p className="text-xs font-mono uppercase tracking-widest text-primary/70 text-center mb-6">
                  Request Logged & Encrypted
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Organization"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Professional Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-glow w-full text-sm"
                  >
                    {loading ? "Encrypting & Submitting..." : "Submit Secure Request"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-green-400">
                  Transmission Successful
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your request has been securely logged. I will respond shortly.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
