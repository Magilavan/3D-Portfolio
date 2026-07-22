import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#log', label: 'Log' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-base/90 backdrop-blur-sm border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="inline-block h-2 w-2 rounded-full bg-signal-amber" />
          MAGILAVAN.M
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:mmagilavan@gmail.com"
          className="hidden rounded-none border border-line px-4 py-2 font-mono text-[12px] tracking-wide text-ink transition-colors hover:border-signal-amber hover:text-signal-amber md:inline-block"
        >
          SAY HELLO →
        </a>
      </nav>
    </header>
  );
}
