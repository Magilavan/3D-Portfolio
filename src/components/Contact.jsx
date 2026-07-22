import { motion } from 'framer-motion';
import { useState } from 'react';

const LINKS = [
  { label: 'EMAIL', value: 'mmagilavan@gmail.com', href: 'mailto:mmagilavan@gmail.com' },
  { label: 'PHONE', value: '+91 93425 66772', href: 'tel:+919342566772' },
  { label: 'GITHUB', value: 'github.com/Magilavan', href: 'https://github.com/Magilavan' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/magilavan', href: 'https://www.linkedin.com/in/magilavan' },
  { label: 'LEETCODE', value: 'leetcode.com/u/Magilavan', href: 'https://leetcode.com/u/Magilavan/' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mmagilavan@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable, ignore */
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-base py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-[12px] tracking-[0.25em] text-signal-cyan"
        >
          SIG.05
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.05 }}
          className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl"
        >
          Open to software engineering, ML, and IoT-driven roles.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              onClick={copyEmail}
              className="w-full border border-signal-amber bg-signal-amber/10 px-6 py-4 text-left font-mono text-[13px] tracking-wide text-signal-amber transition-colors hover:bg-signal-amber hover:text-base"
            >
              {copied ? 'COPIED ✓' : 'COPY EMAIL ADDRESS →'}
            </button>
            <p className="mt-4 font-body text-[14px] text-ink-muted">
              Based in Coimbatore. Happy to work remote or relocate for the
              right team.
            </p>
          </div>

          <div className="border border-line md:col-span-7">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-line px-6 py-4 transition-colors last:border-b-0 hover:bg-base-panel/60"
              >
                <span className="font-mono text-[11px] tracking-widest text-ink-faint">
                  {l.label}
                </span>
                <span className="font-body text-[14px] text-ink transition-colors group-hover:text-signal-cyan">
                  {l.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
