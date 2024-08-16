import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 2000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <motion.section
      id="contact"
      className="p-12 bg-gradient-to-b from-black to-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h3 className="text-4xl font-bold text-gold mb-8 text-center">
        Get In Touch
      </h3>
      <p className="max-w-2xl mx-auto text-center text-lg mb-12 text-gray-400">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-300 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-300 mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-gray-300 mb-2">Your Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-gold outline-none h-32"
            placeholder="Enter your message"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Submitted Successfully!' : 'Send Message'}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;