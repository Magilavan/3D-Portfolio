import { motion } from 'framer-motion'
import { owner, navLinks } from '../constants'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/70"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-[1px] shadow-[0_0_24px_rgba(129,140,248,0.9)]">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
              <span className="text-sm font-semibold tracking-tight text-sky-300">
                M
              </span>
            </div>
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </span>
            <span className="text-sm font-medium text-slate-100">
              {owner.name}
            </span>
          </div>
        </button>

        <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="relative pb-1 transition-colors hover:text-sky-300"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-slate-300">
          <a
            href={owner.links.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full bg-slate-900/70 p-2 text-xs transition-all hover:bg-slate-800 hover:text-sky-400"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href={owner.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full bg-slate-900/70 p-2 text-xs transition-all hover:bg-slate-800 hover:text-blue-400"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
            </svg>
          </a>
          <a
            href={owner.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full bg-slate-900/70 p-2 text-xs transition-all hover:bg-slate-800 hover:text-orange-400"
            title="LeetCode"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.323 4.32a1.097 1.097 0 1 1-1.551-1.55L10.97.863a2.79 2.79 0 0 1 2.347-.733 2.8 2.8 0 0 1 1.568.734l9.116 9.116a2.793 2.793 0 0 1 0 3.945l-10.33 10.33a2.791 2.791 0 0 1-3.945 0L.6 14.254a2.795 2.795 0 0 1 0-3.945l3.177-3.177a1.097 1.097 0 0 1 1.55 1.549L2.15 11.858a1.097 1.097 0 0 0 0 1.55l9.116 9.116a1.097 1.097 0 0 0 1.55 0l10.33-10.33a1.097 1.097 0 0 0 0-1.55L14.03.125a1.378 1.378 0 0 0-.547-.125z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar

