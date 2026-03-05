import { motion } from 'framer-motion'
import { achievements, certifications, owner } from '../constants'

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative border-t border-slate-800/70 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.38),transparent_55%)] opacity-80" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.5fr)] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-[0_0_40px_rgba(15,23,42,1)] backdrop-blur-xl"
          >
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Achievements
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-[0_0_40px_rgba(15,23,42,1)] backdrop-blur-xl"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Certifications
            </h3>
            <div className="mt-4 grid gap-2 text-xs text-slate-200 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2"
                >
                  {cert}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={owner.certificateDriveLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2.5 text-xs font-semibold text-sky-400 transition-all hover:border-sky-500/50 hover:bg-sky-500/20"
              >
                <span>View All Certificates</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

