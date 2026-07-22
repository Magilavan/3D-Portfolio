import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    year: '2024',
    title: 'Smart India Hackathon',
    detail: 'Selected through the inter-college round.',
  },
  {
    year: '2024',
    title: 'Hack Fest 2k24 — 3rd Prize',
    detail: 'National-level hackathon at Erode Sengunthar Engineering College.',
  },
];

const CERTS = [
  'Azure Fundamentals — Microsoft',
  'AWS Cloud Practitioner Essentials',
  'ML: Banking & Credit Fraud, Intro to Python, NLP, Deep Learning — Infosys SpringBoard',
  'CCNA: Switching, Routing & Wireless Essentials — Cisco',
  'Ethics in Engineering Practice — NPTEL',
  'Introduction to CyberSecurity · Python Essentials 2',
];

export default function Log() {
  return (
    <section id="log" className="border-t border-line bg-base-panel/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mt-3 font-display text-3xl text-ink">Activity log</h2>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-[11px] tracking-widest text-ink-faint">
              ACHIEVEMENTS
            </h3>
            <ul className="mt-5 space-y-5 border-l border-line pl-6">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-signal-amber" />
                  <p className="font-mono text-[11px] text-ink-faint">{a.year}</p>
                  <p className="mt-1 font-display text-[16px] text-ink">{a.title}</p>
                  <p className="mt-1 font-body text-[14px] text-ink-muted">{a.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-[11px] tracking-widest text-ink-faint">
              CERTIFICATIONS
            </h3>
            <ul className="mt-5 space-y-3">
              {CERTS.map((c) => (
                <li
                  key={c}
                  className="border-b border-line pb-3 font-body text-[14px] text-ink-muted last:border-b-0"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
