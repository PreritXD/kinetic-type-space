import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <p
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          // about
        </p>
        <p
          className="text-2xl sm:text-3xl font-light leading-relaxed text-foreground/90 transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          I build things for the web with a focus on{' '}
          <span className="text-primary font-normal">clean interfaces</span>,{' '}
          <span className="text-primary font-normal">thoughtful motion</span>, and{' '}
          <span className="text-primary font-normal">performant code</span>.
        </p>
        <p
          className="mt-8 text-base text-muted-foreground leading-relaxed transition-all duration-700 delay-400"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          With over five years of experience in front-end development and creative coding,
          I specialize in transforming complex ideas into elegant, intuitive digital products.
          Currently exploring the boundaries between generative art and functional design.
        </p>
      </div>
    </section>
  );
}
