import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const fadeInFrom = (x = 0, y = 40, delay = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15, delay },
  },
});

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/send-email`;
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
        formRef.current.reset();
      } else {
        toast.error("Oops! Email sending failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
     
      <div className="max-w-3xl w-full text-center space-y-10">
        {/* Contact Badge */}
        <motion.div
          className="inline-block px-4 py-1 text-sm border border-blue-500/30 bg-blue-500/10 text-blue-400 rounded-full backdrop-blur-md"
          whileHover={{ scale: 1.05 }}
        >
          💬 Contact
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          variants={fadeInFrom(0, 20, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Let’s Work Together
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          variants={fadeInFrom(0, 20, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          I’m always excited to work on interesting projects and collaborate
          with amazing people. Let’s create something extraordinary together.
        </motion.p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              className="space-y-1"
              variants={fadeInFrom(0, 20, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <label className="text-sm text-gray-300">Name *</label>
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="space-y-1"
              variants={fadeInFrom(0, 20, 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <label className="text-sm text-gray-300">Email *</label>
              <input
                type="email"
                name="from_email"
                required
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          </div>

          <motion.div
            className="space-y-1"
            variants={fadeInFrom(0, 20, 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <label className="text-sm text-gray-300">Message *</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div
            className="flex justify-center pt-4"
            variants={fadeInFrom(0, 20, 0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                rotateX: 4,
                rotateY: 3,
                boxShadow: "0 10px 30px rgba(0, 0, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-lg shadow-md"
            >
              📧 Send Message →
            </motion.button>
          </motion.div>
        </form>

        {/* OR */}
        <motion.p
          className="text-gray-400 text-sm mt-6"
          variants={fadeInFrom(0, 10, 0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Or reach out directly:
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeInFrom(0, 20, 0.75)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <a
            href="mailto:vinitkumarpothuraju@gmail.com"
            className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            <Mail size={16} /> Send Email
          </a>
          <a
            href="/ResumeOrg.pdf"
            download="vinit_kumar.pdf"
            className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            <Download size={16} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
