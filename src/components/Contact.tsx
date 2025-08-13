import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full lg:w-auto"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-accent-dark transition-colors flex items-center gap-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
              {!loading && <Send className="w-5 h-5" />}
            </button>

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-success-light font-medium"
              >
                Thank you! I'll get back to you as soon as possible.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-error-light font-medium"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[24px] font-semibold mb-2">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="bg-tertiary p-3 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-white text-[18px] font-medium">Location</h4>
                <p className="text-secondary text-[16px]">New Delhi, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-tertiary p-3 rounded-full">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-white text-[18px] font-medium">Email</h4>
                <p className="text-secondary text-[16px]">noorali200609@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-tertiary p-3 rounded-full">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-white text-[18px] font-medium">Phone</h4>
                <p className="text-secondary text-[16px]">+91 8448556794</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-white text-[24px] font-semibold mb-6">Let's Connect</h3>
            <p className="text-secondary text-[16px] mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="bg-tertiary p-6 rounded-lg">
              <p className="text-white text-[16px]">
                <span className="text-accent">Available for:</span> Freelance, Full-time positions, Part-time positions, Internships
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;