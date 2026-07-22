import { motion } from 'framer-motion';

const FACTS = [
  { label: 'PROGRAM', value: 'B.Tech, AI & Data Science' },
  { label: 'INSTITUTION', value: 'Sri Krishna College of Engineering & Technology' },
  { label: 'CGPA', value: '8.06 / 10' },
  { label: 'BASED IN', value: 'Coimbatore, India' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-base py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h2 className="mt-3 font-display text-3xl text-ink">About</h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-ink-faint">
              A working log of what shaped the approach — school, the stack,
              and the kind of problems I keep returning to.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <p className="font-body text-[16px] leading-loose text-ink">
              I'm a final-year AI &amp; Data Science student who'd rather ship
              a working prototype than debate one in theory. Most of what I
              build starts from a real, slightly messy problem —{' '}
              <span className="text-ink">buses without occupancy data</span>,{' '}
              <span className="text-ink">farmers guessing at crop choice</span>{' '}
              — and ends with a sensor rig or a trained model that gives a
              straight answer instead.
            </p>
            <p className="mt-5 font-body text-[16px] leading-loose text-ink-muted">
              That's meant getting comfortable across the whole chain: Java
              and Spring Boot for the backend logic, React for whatever
              people actually touch, and scikit-learn / TensorFlow for the
              models sitting in between. I've picked up IoT integration,
              cloud fundamentals, and a couple of hackathon finishes along
              the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="corner-frame border border-line bg-base-panel/50 p-6 md:col-span-3"
          >
            <dl className="space-y-5">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[10px] tracking-widest text-ink-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-body text-[14px] text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
