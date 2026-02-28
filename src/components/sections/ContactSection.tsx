import { useScrollReveal } from '@/hooks/useScrollReveal';

const links = [
  { label: 'Email', href: 'mailto:hello@alexmorgan.dev' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <p
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          // contact
        </p>
        <p
          className="text-2xl sm:text-3xl font-light leading-relaxed text-foreground/90 mb-12 transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Let's build something
          <span className="text-primary"> extraordinary</span> together.
        </p>
        <div
          className="flex flex-wrap gap-8 transition-all duration-700 delay-400"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-24 font-mono text-xs text-muted-foreground/30 tracking-wider">
          © 2026 — Designed & built with precision
        </p>
      </div>
    </section>
  );
}
