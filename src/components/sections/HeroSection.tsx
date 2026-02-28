import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p
          className="mb-4 font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          developer &amp; designer
        </p>
        <h1
          className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl transition-all duration-1000 delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Alex
          <br />
          <span className="text-primary">Morgan</span>
        </h1>
        <p
          className="mt-8 max-w-lg mx-auto text-lg text-muted-foreground font-light leading-relaxed transition-all duration-1000 delay-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Crafting digital experiences at the intersection of code and aesthetics.
        </p>
        <div
          className="mt-12 transition-all duration-1000 delay-700"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <a
            href="#work"
            className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary border border-primary/30 px-6 py-3 hover:bg-primary/10 transition-colors duration-300"
          >
            View Work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
