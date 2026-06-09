import { projects } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const srcPrefix = process.env.NODE_ENV === 'production' ? '/Portfolio_V2' : '';
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col gap-24">
        {projects.map((project) => (
          <ScrollReveal key={project.id}>
            <Link href={project.link} className="group block">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-zinc-200/60 dark:border-zinc-900/50 pb-20 last:border-0">
                
                {/* Project Interface Viewport Frame */}
                <div className="md:col-span-8 relative aspect-video bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-sm transition-all group-hover:border-[var(--accent)]">
                  {project.image && (
                    <Image 
                      src={`${srcPrefix}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover opacity-100 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]" 
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  )}
                  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{
                      backgroundImage: 'linear-gradient(to top, var(--gradient-start), var(--gradient-mid))'
                    }}
                  />            
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <h4 className="text-4xl font-black tracking-tighter uppercase text-center px-4 text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Project Specifications Details Column */}
                <div className="md:col-span-4 flex flex-col justify-center">
                  <span className="text-xs font-mono tracking-widest uppercase mb-2 block font-semibold text-accent transition-colors duration-300">
                    Featured Project
                  </span>
                  
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  {/* Action Link Indicator Vector Asset */}
                  <div className="mt-6 flex items-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-accent transition-colors duration-300">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-all text-accent stroke-accent transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}