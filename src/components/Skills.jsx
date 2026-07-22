import { motion } from 'framer-motion';

const CHANNELS = [
  { code: 'CH.01', label: 'LANGUAGES', items: ['Java', 'SQL', 'JavaScript'] },
  { code: 'CH.02', label: 'MACHINE LEARNING', items: ['Random Forest', 'CNN', 'scikit-learn', 'TensorFlow'] },
  { code: 'CH.03', label: 'FRONTEND', items: ['React JS', 'Three.js', 'HTML / CSS'] },
  { code: 'CH.04', label: 'BACKEND', items: ['Spring Boot', 'Flask'] },
  { code: 'CH.05', label: 'DATABASES', items: ['MySQL'] },
  { code: 'CH.06', label: 'TOOLING', items: ['Git', 'VS Code', 'Figma'] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-base-panel/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mt-3 font-display text-3xl text-ink">Instrument panel</h2>
        <p className="mt-3 max-w-lg font-body text-[15px] text-ink-muted">
          The stack, grouped the way I actually reach for it — by channel,
          not by buzzword.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((ch, i) => (
            <motion.div
              key={ch.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-base p-6 transition-colors hover:bg-base-raised"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-widest text-ink-faint">
                  {ch.code}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan opacity-60 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-2 font-display text-[15px] tracking-wide text-ink">
                {ch.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ch.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
