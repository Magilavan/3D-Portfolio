import { useEffect, useRef, useState } from 'react';

// The signature element of this design: a live scrolling signal trace that
// periodically "locks" into a classification label — a nod to the actual
// pipeline behind Magilavan's projects (raw sensor signal -> trained model -> label).
const READINGS = [
  { channel: 'IR.01', label: 'PASSENGER COUNT', value: '14 ONBOARD' },
  { channel: 'THERM.02', label: 'CABIN TEMP', value: 'NOMINAL' },
  { channel: 'SOIL.PH', label: 'CROP MODEL', value: 'GROUNDNUT' },
  { channel: 'NDVI.14', label: 'LEAF SCAN', value: 'HEALTHY' },
  { channel: 'YIELD.03', label: 'FORECAST', value: '+12% Q3' },
];

export default function SignalStrip({ className = '' }) {
  const canvasRef = useRef(null);
  const [readingIndex, setReadingIndex] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);
      const mid = height / 2;

      // faint baseline
      ctx.strokeStyle = 'rgba(139,152,160,0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(width, mid);
      ctx.stroke();

      const isLockPhase = Math.floor(t / 90) % 5 === 0 && t % 90 > 60;
      ctx.strokeStyle = isLockPhase ? '#E8A33D' : '#5FC2BA';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 4) {
        const n = (x + t * 2.2);
        const y =
          mid +
          Math.sin(n * 0.02) * (height * 0.16) +
          Math.sin(n * 0.055 + t * 0.03) * (height * 0.08) +
          (Math.random() - 0.5) * (isLockPhase ? 1.5 : 4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      setLocked((prev) => (isLockPhase !== prev ? isLockPhase : prev));

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const interval = setInterval(() => {
      setReadingIndex((i) => (i + 1) % READINGS.length);
    }, 4500);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const reading = READINGS[readingIndex];

  return (
    <div className={`relative border-y border-line bg-base-panel/60 ${className}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-2.5">
        <span className="font-mono text-[11px] tracking-widest text-ink-faint shrink-0">
          {reading.channel}
        </span>
        <canvas ref={canvasRef} className="h-8 w-full flex-1" />
        <span
          className={`font-mono text-[11px] tracking-widest shrink-0 transition-colors duration-300 ${
            locked ? 'text-signal-amber' : 'text-ink-muted'
          }`}
        >
          {reading.label} · {reading.value}
        </span>
      </div>
    </div>
  );
}
