import { motion } from 'framer-motion'
import { hero, owner } from '../constants'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.55),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.45),transparent_55%)] opacity-70" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-24 pb-24 md:flex-row md:items-center md:pt-28 md:px-6">
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-300 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="uppercase tracking-[0.2em] text-slate-400">
              AI & Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50 via-sky-200 to-violet-300 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl md:text-5xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 text-sm text-slate-300 sm:text-base"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(129,140,248,0.8)]"
            >
              {hero.cta}
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <div className="flex items-center gap-4">
              <div className="text-xs text-slate-400">
                <div>{owner.role}</div>
                <div className="mt-1 text-sky-300 font-medium">{owner.email}</div>
              </div>
              <div className="h-8 w-px bg-slate-800/80" />
              <div className="flex gap-3">
                <a
                  href={owner.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href={owner.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                  </svg>
                </a>
                <a
                  href={owner.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  title="LeetCode"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.323 4.32a1.097 1.097 0 1 1-1.551-1.55L10.97.863a2.79 2.79 0 0 1 2.347-.733 2.8 2.8 0 0 1 1.568.734l9.116 9.116a2.793 2.793 0 0 1 0 3.945l-10.33 10.33a2.791 2.791 0 0 1-3.945 0L.6 14.254a2.795 2.795 0 0 1 0-3.945l3.177-3.177a1.097 1.097 0 0 1 1.55 1.549L2.15 11.858a1.097 1.097 0 0 0 0 1.55l9.116 9.116a1.097 1.097 0 0 0 1.55 0l10.33-10.33a1.097 1.097 0 0 0 0-1.55L14.03.125a1.378 1.378 0 0 0-.547-.125z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 mx-auto mt-6 aspect-square w-72 max-w-xs rounded-[36px] border border-slate-700/80 bg-slate-950/80 p-[1px] shadow-[0_0_80px_rgba(30,64,175,0.9)] md:mt-0 md:w-80"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.48),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(236,72,153,0.45),transparent_55%),radial-gradient(circle_at_center,rgba(15,23,42,0.9),#020617)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.55),transparent_55%)] mix-blend-screen opacity-80" />

            <div className="flex h-full w-full items-center justify-center p-6">
              <div className="relative group h-full w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50">
                <img
                  src={owner.profileImage}
                  alt={owner.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
