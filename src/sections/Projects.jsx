import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../constants'

const Projects = () => {
  const [flipped, setFlipped] = useState(null)

  return (
    <section
      id="projects"
      className="relative border-t border-slate-800/70 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.36),transparent_55%),radial-gradient(circle_at_center,_rgba(15,23,42,0.5),transparent_100%)] opacity-80" />
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
              Projects
            </h2>
            <p className="mt-2 text-xs text-slate-400 md:text-sm">
              Intelligent systems, IoT solutions, and full stack applications. Click a card to read docs.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isFlipped = flipped === index;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                className="group relative h-80 w-full [perspective:1000px] cursor-pointer"
                onClick={() => setFlipped(isFlipped ? null : index)}
              >
                <motion.div
                  className="relative h-full w-full rounded-3xl [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-950/90 p-[1px] shadow-[0_0_40px_rgba(15,23,42,1)]">
                    <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_10%_0%,rgba(56,189,248,0.55),rgba(236,72,153,0.7),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col rounded-[22px] bg-slate-950/95 p-4">
                      <div className="h-36 w-full overflow-hidden rounded-xl bg-slate-900 mb-4">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-slate-50">
                          {project.name}
                        </h3>
                        <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                          Project
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border border-cyan-500/30 bg-slate-900/95 p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center text-center backdrop-blur-md">
                    <div className="mb-4 text-4xl">📄</div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-100">{project.name} Docs</h3>
                    <p className="text-sm text-slate-400 max-w-[85%] mx-auto leading-relaxed">
                      {project.fullDescription}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 w-full items-center">
                      {project.pdfUrl && (
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-fit rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform"
                        >
                          View Full PDF ↗
                        </a>
                      )}
                      <div className="rounded-full border border-slate-700 px-4 py-1 text-xs text-slate-300 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                        Flip Back
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
