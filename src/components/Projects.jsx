import { motion } from 'framer-motion';

const PROJECTS = [
  {
    code: '01',
    title: 'Bus Sense',
    tag: 'IoT · Embedded',
    desc: 'An IoT rig for local public buses — thermal and IR sensors wired to an Arduino log passenger counts and cabin conditions in real time, replacing guesswork with actual occupancy data.',
    stack: ['Arduino', 'IR / Thermal Sensors', 'IoT'],
    link: { label: 'Project write-up on profile', href: 'https://github.com/Magilavan' },
  },
  {
    code: '02',
    title: 'Plant Recommendation System',
    tag: 'Machine Learning',
    desc: 'A Random Forest classifier trained on agricultural soil and climate data to recommend the right crop. Covers preprocessing, label encoding, evaluation, and a user-input prediction flow.',
    stack: ['Python', 'scikit-learn', 'Random Forest'],
    link: { label: 'View on GitHub', href: 'https://github.com/Magilavan' },
  },
  {
    code: '03',
    title: 'Plant Disease Detection',
    tag: 'Machine Learning',
    desc: 'A CNN model that reads leaf images and flags disease, built with TensorFlow and tuned to over 90% classification accuracy.',
    stack: ['Python', 'TensorFlow', 'CNN'],
  },
  {
    code: '04',
    title: 'Uzhavan ERP',
    tag: 'Full Stack · Flask',
    desc: 'An ERP model built to streamline agricultural operations — crop tracking, resource allocation, and yield forecasting in one system.',
    stack: ['Flask', 'Python', 'ERP Modules'],
  },
  {
    code: '05',
    title: 'Soil Prediction System',
    tag: 'Machine Learning',
    desc: 'An ML system that classifies soil characteristics against real soil datasets to recommend the crops best suited to them.',
    stack: ['Python', 'scikit-learn'],
  },
  {
    code: '06',
    title: 'This Portfolio',
    tag: 'Full Stack · Three.js',
    desc: 'A responsive personal site built with React and Three.js to actually showcase the projects above, rather than just list them.',
    stack: ['React', 'Three.js', 'Vercel'],
    link: { label: 'Live site', href: 'https://3-d-portfolio-seven-rosy.vercel.app/' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-base py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mt-3 font-display text-3xl text-ink">Projects</h2>
        <p className="mt-3 max-w-lg font-body text-[15px] text-ink-muted">
          Six builds, logged by channel. Each one starts with a real dataset
          or a real sensor, not a toy example.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="corner-frame flex flex-col border border-line bg-base-panel/40 p-6 transition-colors hover:border-signal-cyan/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-signal-amber">
                  {p.code}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-ink-faint">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 font-body text-[14px] leading-relaxed text-ink-muted">
                {p.desc}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="border border-line px-2 py-0.5 font-mono text-[10px] text-ink-faint"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] text-signal-cyan transition-colors hover:text-signal-amber"
                >
                  {p.link.label} <span aria-hidden>↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
