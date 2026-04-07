"use client";

import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Section from "./Section";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const Contact = () => {
  const CONTACT = {
    email: "mdfarokahmed2002@gmail.com",
    phone: "+880 1908313996",
    location: "Aharanda, Brahmanbaria Sadar, Bangladesh",
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Have a project in mind?
          </h2>
            <p className="text-slate-600 text-lg">Let&apos;s build it together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Contact Info</h3>
            <p className="text-slate-600 mb-8">
              Share a quick brief and I&apos;ll get back to you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">{CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Location</p>
                  <p className="text-slate-600">{CONTACT.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-4">Social</p>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "https://github.com/Farok-ahmed", Icon: Github },
                  { label: "LinkedIn", href: "#", Icon: Linkedin },
                  { label: "Twitter", href: "#", Icon: Twitter },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm"
          >
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                Something went wrong. Please try again later.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border ${errors.projectType ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors`}
                  >
                    <option value="">Select a project type</option>
                    <option value="nextjs">Next.js Application</option>
                    <option value="wordpress">WordPress Customization</option>
                    <option value="elementor">Elementor Widget Dev</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border ${errors.budget ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors`}
                  >
                    <option value="">Select a budget range</option>
                    <option value="<1k">&lt; $1k</option>
                    <option value="1k-5k">$1k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k+">$10k+</option>
                  </select>
                  {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project goals..."
                  className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
export default Contact;