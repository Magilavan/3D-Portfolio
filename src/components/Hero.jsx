import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

const FieldMesh = lazy(() => import('./canvas/FieldMesh.jsx'));

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-instrument-grid relative flex min-h-screen items-center overflow-hidden bg-base pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(95,194,186,0.10),transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-3"
        >
          <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Reading signals
            <br />
            from soil to
            <br />
            <span className="text-signal-amber">software.</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-ink-muted">
            I build the pipeline between raw sensors and useful decisions —
            IoT rigs that log real data, and ML models that turn it into a
            call someone can act on. Java and Spring Boot on the backend,
            React on the front, scikit-learn and TensorFlow doing the thinking
            in between.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="border border-signal-amber bg-signal-amber/10 px-6 py-3 font-mono text-[13px] tracking-wide text-signal-amber transition-colors hover:bg-signal-amber hover:text-base"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="border border-line px-6 py-3 font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:border-ink hover:text-ink"
            >
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="corner-frame relative h-[320px] border border-line bg-base-panel/40 md:col-span-2 md:h-[420px]"
        >
          <Suspense fallback={null}>
            <FieldMesh />
          </Suspense>
          <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-ink-faint">
            METAL.HUMAN — VISUAL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
