import { motion } from 'framer-motion'
import { about, education } from '../constants'

const orbitIcons = [
  { label: 'Python', color: 'from-yellow-400 to-amber-500' },
  { label: 'Java', color: 'from-orange-400 to-red-500' },
  { label: 'React', color: 'from-sky-400 to-cyan-500' },
  { label: 'AWS', color: 'from-orange-400 to-yellow-500' },
  { label: 'GitHub', color: 'from-slate-300 to-slate-100' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative border-t border-slate-800/70 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.5),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.5),transparent_100%)] opacity-80" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              About Me
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              {about.summary}
            </p>

            {/* Tech Orbit Nested Here */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 mx-auto mt-10 aspect-square w-72 max-w-xs rounded-[36px] border border-slate-700/80 bg-slate-950/80 p-[1px] shadow-[0_0_80px_rgba(30,64,175,0.9)] md:w-80"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.48),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(236,72,153,0.45),transparent_55%),radial-gradient(circle_at_center,rgba(15,23,42,0.9),#020617)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.55),transparent_55%)] mix-blend-screen opacity-80" />

                <div className="relative flex h-full flex-col items-center justify-center gap-2">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-300/80">
                    Core Stack
                  </div>
                  <div className="text-lg font-semibold text-slate-50">
                    Tech Stack Orbit
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                    {orbitIcons.map((icon, index) => (
                      <div
                        key={icon.label}
                        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          animation: `orbit-${index + 1} 16s linear infinite`,
                          animationDelay: `-${index * (16 / orbitIcons.length)}s`,
                        }}
                      >
                        <div className="flex h-full w-full items-center justify-center">
                          <div
                            className={`rounded-2xl bg-gradient-to-br ${icon.color} px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_32px_rgba(129,140,248,0.95)] backdrop-blur-md`}
                          >
                            {icon.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-[0_0_40px_rgba(15,23,42,0.95)] backdrop-blur-xl"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Education
            </h3>
            <div className="mt-4 space-y-5 text-sm text-slate-200">
              {education.map((item) => (
                <div
                  key={item.institution}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-400">
                    {item.period}
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {item.institution}
                  </div>
                  <div className="mt-1 text-xs text-slate-300">
                    {item.degree}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    {item.meta}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

