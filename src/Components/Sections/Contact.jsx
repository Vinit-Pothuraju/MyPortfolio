import React, { useRef, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !import.meta.env.VITE_SERVICE_ID ||
      !import.meta.env.VITE_TEMPLATE_ID ||
      !import.meta.env.VITE_PUBLIC_KEY
    ) {
      toast.error("Missing EmailJS environment variables.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full sm:max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md"
            >
              Send Message
            </button>
          </form>

      
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
