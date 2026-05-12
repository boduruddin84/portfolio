"use client"; 
import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thanks for reaching out!");
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#1a1d23] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full bg-[#242931] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full bg-[#242931] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-blue-500" size={20} />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full bg-[#242931] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0038a8] hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}