import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate sending email/form message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Let's Discuss Senior Software Roles & Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            Whether you're looking for a Java Full Stack Developer, RAG AI Engineer, or Enterprise Backend Architect, feel free to reach out.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left: Contact Details & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-8"
          >
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Direct Contact Information
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Available for full-time opportunities, technical consultations, and enterprise roles.
              </p>

              {/* Direct Info List */}
              <div className="mt-6 space-y-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs font-bold text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs font-bold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Connect via Professional Platforms:
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <LinkedinIcon size={16} className="text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-8"
          >
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Fill out the form below to reach Sathish KS directly.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  Message Sent Successfully!
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out. Sathish will get back to you shortly at your provided email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {status === 'error' && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-semibold text-red-600 dark:text-red-400">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="mt-1 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="mt-1 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Opportunity for Senior Java / AI Developer Role"
                    className="mt-1 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, opportunity, or inquiry..."
                    className="mt-1 w-full rounded-xl border border-slate-200/80 bg-white/90 p-3.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-95 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
