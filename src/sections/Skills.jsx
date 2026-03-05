import { motion } from 'framer-motion'
import { skills } from '../constants'

const Skills = () => {
  const entries = Object.entries(skills)

  return (
    <section
      id="skills"
      className="relative border-t border-slate-800/70 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),transparent_55%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Skills
            </h2>
            <p className="mt-2 text-xs text-slate-400 md:text-sm">
              A blend of AI, backend, and full stack engineering tools.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {entries.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur-xl"
            >
              <div className="absolute inset-px rounded-[22px] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.32),transparent_55%)] opacity-60" />
              <div className="relative">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  {category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-200 shadow-[0_0_14px_rgba(15,23,42,0.95)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

