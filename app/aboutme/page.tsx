'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { experiencesData } from '@/data/experience'; 
import { skills } from '@/data/skills';

export default function AboutMe() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return skills;
    
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery.split(/\s+/).join('.*'), 'i');

    return skills
      .map((skill) => {
        const matchesCategory = regex.test(skill.category);
        const matchedTech = skill.technologies.filter((tech) => regex.test(tech));

        if (matchesCategory) {
          return skill;
        } else if (matchedTech.length > 0) {
          return { ...skill, technologies: matchedTech }; // Only display matching tags
        }
        return null;
      })
      .filter((skill): skill is typeof skills[number] => skill !== null);
  }, [searchQuery]);

  const srcPrefix = process.env.NODE_ENV === 'production' ? '/Portfolio_V2' : '';

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Profile Photo Frame */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden group hover:border-accent transition-all duration-300">
            <Image 
              src={`${srcPrefix}/images/projects/Ian.jpg`}
              alt="Ian Lampley portrait"
              fill
              className="object-cover grayscale contrast-110 dark:contrast-125 opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Narrative, Experience & Interactive Skills Column */}
        <div className="lg:col-span-7 space-y-12 sm:space-y-16">
          
          {/* Section: Biography */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground transition-colors duration-300">
              Hi, I'm Ian. I engineer comprehensive, full-stack software solutions.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-base sm:text-lg">
              I am a Full Stack Software Developer working across the entire engineering lifecycle. My experience ranges from constructing low-level systems architecture and hardware-accelerated graphics pipelines to assembling responsive, high-performance web applications and optimized cloud-dashboard interfaces.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed font-light text-sm sm:text-base">
              I thrive in fast-paced environments where technical requirements shift quickly, leaning on a natural drive for rapid, continuous learning to pick up new languages, frameworks, and engineering paradigms on the fly. For me, software development is about pinpointing the exact problem a piece of software is solving and ensuring data flows reliably and efficiently—whether that means optimizing free-threaded C++ graphics frame pools or building dynamic Next.js routing ecosystems. I am genuinely in it for both the logic of the solution and the journey of building it.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed font-light text-sm sm:text-base">
              Bringing a meticulous eye for detail to both backend architecture and frontend polish, I balance rigorous execution with strong project delivery frameworks. From structuring data-driven gameplay state machines to tracking Agile sprint workflows and milestones, I love seeing a product smoothly transition from an abstract problem to robust, production-ready code.
            </p>
          </section>

          {/* Section: Experience */}
          <section>
            <h3 className="text-xl font-bold text-foreground transition-colors duration-300 mb-6 sm:mb-8 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              Experience
            </h3>
            
            <div className="space-y-10 sm:space-y-12 border-l border-zinc-200 dark:border-zinc-800 pl-4 sm:pl-6">
              {experiencesData.map((experience) => (
                <div key={experience.id} className="relative">
                  
                  <div className="absolute -left-[21px] sm:-left-[31px] top-2 w-2 h-2 rounded-full bg-accent border-4 border-[var(--background)] box-content transition-colors duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1 sm:mb-2">
                    <h4 className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors duration-300">
                      {experience.role}
                    </h4>
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs sm:text-sm whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-4">
                    {experience.company}
                  </p>
                  
                  <ul className="list-disc list-outside space-y-2 text-zinc-500 dark:text-zinc-400 font-light text-xs sm:text-sm pl-4">
                    {experience.bullets.map((bullet, index) => (
                      <li key={index} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Aesthetic Skillsets Container with Real-Time Search */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-foreground transition-colors duration-300">
                Skillsets
              </h3>
              
              {/* Interactive Fuzzy Search Input Bar */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter skills (e.g., DX11, RBAC)..."
                  className="w-full px-3 py-1.5 text-xs rounded-sm text-foreground focus:outline-none transition-all duration-300 font-light
                    bg-[var(--card-bg)] border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600
                    focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 hover:text-accent text-xs transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Dynamic Skills Display Grid */}
            <div className="space-y-6">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <div key={skill.id} className="space-y-2.5">
                    <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-light text-zinc-700 dark:text-zinc-300 rounded-sm transition-all duration-200
                            bg-[var(--card-bg)] border border-zinc-200/80 dark:border-zinc-700/80 hover:border-accent/50 dark:hover:border-accent/40 hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs font-light text-zinc-400 dark:text-zinc-600 border border-dashed border-zinc-200 dark:border-zinc-900 rounded-sm">
                  No matching technical skills found for "{searchQuery}"
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}