import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { owner } from '../constants'

const Contact = () => {
  const formRef = useRef()
  const [formStatus, setFormStatus] = useState('idle') // idle, animating, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formStatus === 'animating' || formStatus === 'success') return

    setFormStatus('animating')

    // IMPORTANT: Replace these with your actual EmailJS credentials
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setFormStatus('success')
        formRef.current.reset()
        // Reset form after a few seconds
        setTimeout(() => setFormStatus('idle'), 3500)
      }, (error) => {
        console.error('Email sending failed:', error)
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 3500)
      })
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800/70 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.42),transparent_55%)] opacity-80" />

      {/* Rocket Animation Layer - covers whole section */}
      <AnimatePresence>
        {formStatus === 'animating' && (
          <motion.div
            initial={{ bottom: '-10%', left: '75%', opacity: 0, scale: 0.5 }}
            animate={{ bottom: '120%', left: '75%', opacity: 1, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeIn' }}
            className="pointer-events-none absolute z-50 text-6xl"
            style={{ filter: 'drop-shadow(0px 10px 20px rgba(239, 68, 68, 0.6))' }}
          >
            <span className="inline-block -rotate-45">🚀</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 py-16 md:flex-row md:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 text-sm text-slate-200 shadow-[0_0_40px_rgba(15,23,42,1)] backdrop-blur-xl md:w-5/12 md:p-8"
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
            Contact
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Let&apos;s collaborate on intelligent systems, data-driven
            solutions, or full stack experiences.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${owner.email}`}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Email
                </div>
                <div className="mt-1 text-sm text-slate-100">
                  {owner.email}
                </div>
              </div>
              <span className="text-xs text-sky-400">Send →</span>
            </a>

            <a
              href={owner.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  LinkedIn
                </div>
                <div className="mt-1 text-sm text-slate-100">
                  /magilavan
                </div>
              </div>
              <span className="text-xs text-sky-400">Open →</span>
            </a>

            <a
              href={owner.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  LeetCode
                </div>
                <div className="mt-1 text-sm text-slate-100">/Magilavan</div>
              </div>
              <span className="text-xs text-sky-400">Open →</span>
            </a>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Phone
                </div>
                <div className="mt-1 text-sm text-slate-100">
                  {owner.phone}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 shadow-[0_0_40px_rgba(15,23,42,1)] backdrop-blur-xl md:w-7/12 md:p-8"
        >
          <h3 className="mb-6 text-lg font-medium text-slate-50">Send a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="relative flex flex-col gap-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.1em] text-slate-400">Name</label>
              <input id="name" name="user_name" required type="text" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-sky-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-sky-500/20" placeholder="Your Name" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.1em] text-slate-400">Email Address</label>
              <input id="email" name="user_email" required type="email" className="w-full rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-sky-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-sky-500/20" placeholder="you@domain.com" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.1em] text-slate-400">Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full resize-none rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-sky-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-sky-500/20" placeholder="How can we help?" />
            </div>
            <button
              disabled={formStatus !== 'idle'}
              type="submit"
              className={`relative mt-2 flex items-center justify-center overflow-hidden rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${formStatus === 'idle' ? 'cursor-pointer border-sky-500/30 bg-sky-500/10 text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]' : 'cursor-not-allowed border-slate-700 bg-slate-800 text-slate-500'}`}
            >
              <span className={`block transition-opacity duration-300 ${formStatus === 'idle' ? 'opacity-100' : 'opacity-0'}`}>Launch Message 🚀</span>

              {formStatus === 'animating' && (
                <span className="absolute inset-0 z-10 flex items-center justify-center font-bold text-sky-400">Preparing logic thrusters...</span>
              )}

              {formStatus === 'success' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 flex items-center justify-center font-bold text-emerald-400"
                >
                  Successfully Sent! ✓
                </motion.span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

