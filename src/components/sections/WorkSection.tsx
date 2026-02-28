import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'Nebula',
    description: 'Generative art platform with real-time WebGL rendering',
    tech: 'React · Three.js · GLSL',
    year: '2025',
  },
  {
    title: 'Pulse',
    description: 'Analytics dashboard with fluid data visualizations',
    tech: 'TypeScript · D3 · Supabase',
    year: '2024',
  },
  {
    title: 'Mono',
    description: 'Minimalist writing app for focused creative work',
    tech: 'React · Markdown · PWA',
    year: '2024',
  },
  {
    title: 'Drift',
    description: 'Audio-reactive visual experience for live performances',
    tech: 'WebAudio · Canvas · MIDI',
    year: '2023',
  },
];

export default function WorkSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="work" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <p
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-12 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          // selected work
        </p>
        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group border-t border-border py-8 cursor-pointer transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-mono font-medium group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground/60">
                    {project.tech}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground/40 pt-1 shrink-0">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
