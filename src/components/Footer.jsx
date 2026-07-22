export default function Footer() {
  return (
    <footer className="border-t border-line bg-base py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] tracking-widest text-ink-faint md:flex-row">
        <span>MAGILAVAN M — © {new Date().getFullYear()}</span>
        <span>BUILT WITH REACT · THREE.JS · TAILWIND</span>
      </div>
    </footer>
  );
}
