import Image from 'next/image';
import Link from 'next/link';

const projectData = {
  title: "Revolunar",
  subtitle: "A Gothic Western rogue-like FPS featuring complex bullet-crafting behaviors and dynamic encounter systems.",
  meta: [
    { label: "Role", value: "Tech Lead & Producer" },
    { label: "Timeline", value: "4 Months (August 2025 - December 2025)" },
    { label: "Stack", value: "C++, Unreal Engine, Jira (Agile/Scrum)" }
  ],
skillsLearned: [
    "Architecture of complete, state-driven gameplay combat loops (health, damage, stage progression).",
    "Low-level projectile programming including ricochet physics, piercing logic, and runtime parameter scaling.",
    "Data-driven encounter systems for wave spawning and status effect pipelines (Freeze, Lifedrain).",
    "Agile production leadership, milestone delivery, quality assurance governance, and risk mitigation management."
  ],
  heroImage: {
    src: "/images/projects/Revelunar_logo_bckgrnd.png",
    alt: "Revolunar gameplay showing a gunslinger fighting waves of enemies in a Gothic Western town"
  },
  
  contentBlocks: [
    {
      heading: "Project Overview & Core Gameplay Architecture",
      image: {
        src: "/images/projects/Combat.gif",
        alt: "Gameplay gif showing health UI, bullet mechanics, and enemies",
        caption: "Fig 1. Core combat loop, and enemy wave spawning",
        layout: "right",
        widthClass: "w-full sm:w-80"
      },
      paragraphs: [
        "Set in a grim Gothic Western town shadowed by impending doom, Revolunar casts the player as a lone Gunslinger tasked with purging waves of horrific entities. The mechanical heart of the game revolves around a highly customizable 6-Chamber Revolver. Players earn, combine, and equip distinct bullet types to assemble optimized builds that radically shift both movement capabilities and defensive or offensive damage outputs.",
        "From an engineering standpoint, I owned the execution and implementation of the game's foundational combat loop. This involved building out the systemic state machine handling player health pools, multi-source damage calculations, crisp death and respawn mechanics, and clean conditional handling for successful stage completion triggers.",
        "To keep combat unpredictable and scale difficulty smoothly, I engineered a modular Encounter System. Instead of rigid hard-coded spawns, enemy groups are structurally parsed into decoupled, wave-by-wave configurations. This data-driven layout allows designers to safely tune encounter difficulty, enemy types, and wave spacing without risking engine thread instabilities."
      ]
    },
    {
      heading: "Technical Production & Agile Leadership",
      paragraphs: [
        "In tandem with my contributions to the game's codebase, I stepped up as the Technical Producer for our multi-disciplinary development team. I established and maintained our production cadence by coordinating weekly Scrum meetings, managing task progression across Jira, and owning the end-to-end execution of critical project deliverables. Through comprehensive slide reviews and artifact auditing, I served as the primary gatekeeper for asset and code quality, ensuring that every shipped milestone met strict internal fidelity standards.",
        "A major component of my leadership strategy was proactive risk management. By consistently analyzing team velocity and cross-functional task states, I was able to identify technical dependencies early and forecast potential architectural or scheduling roadblocks. Bringing these points straight to the development team allowed us to preemptively adjust our engineering scope rather than reacting to critical bottlenecks late in the milestone loop.",
        "By keeping a close pulse on individual task completion and tracking velocity metrics, I led the structural flow of our sprints. When tight milestones or sudden scope creep threatened project stability, I collaborated closely with team members to safely restructure task hierarchies, reallocate engineering resources, and adjust deadlines. This balance of low-level gameplay engineering and proactive production mapping ensured we shipped a feature-complete game directly on schedule."
      ]
    },
    {
      heading: "Advanced Bullet Physics & Status Pipelines",
      paragraphs: [
        "Beyond standard raycasting or simple linear projectiles, the design required deep, complex weapon behaviors. I programmed advanced bullet mechanics including mathematical ricochet bounces off environmental surfaces, target piercing vectors, and custom lifedrain systems that dynamically siphon vitality metrics back to the player character context.",
        "These bullets are heavily bound to a custom runtime scaling damage model, letting attributes adjust on the fly based on player velocity, distance traveled, or stack interactions. To add another layer of combat depth, I constructed the underlying status effect pipeline. This system processes overlapping gameplay modifiers simultaneously, including three fully realized status mechanics like custom 'Freeze' logic that manipulates enemy navigation mesh speeds and animations.",
        "Every physics layer and modifier routine was optimized within the engine to maintain tight frame-time limits, ensuring that dozens of fast-moving, bouncing, and piercing rounds could coexist simultaneously during dense wave bottlenecks without choking the hardware rendering pipeline."
      ]
    },

  ]
};

export default function ProjectTemplate() {
  const srcPrefix = process.env.NODE_ENV === 'production' ? '/Portfolio_V2' : '';

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      
      {/* Navigation Return Hook */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Project Header Meta Block */}
      <header className="mb-12">
        <span className="text-sm text-accent font-medium block mb-2 transition-colors duration-300">
          {projectData.subtitle}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground transition-colors duration-300 mb-8">
          {projectData.title}
        </h1>

        {/* Specifications Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-zinc-200/60 dark:border-zinc-800/60 text-sm mb-10">
          {projectData.meta.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">{item.label}</span>
              <span className="text-foreground font-semibold transition-colors duration-300">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Skills Learned Block */}
        <div className="p-6 rounded-sm bg-zinc-50/60 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-900/50 text-sm">
          <h3 className="font-bold text-foreground mb-3 tracking-tight">Key Takeaways & Skills Acquired</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 list-disc list-inside text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            {projectData.skillsLearned.map((skill, index) => (
              <li key={index} className="pl-1 text-zinc-600 dark:text-zinc-400">
                <span className="relative -left-1">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/*Hero Showcase Image */}
      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden mb-20">
        <Image 
          src={`${srcPrefix}${projectData.heroImage.src}`} 
          alt={projectData.heroImage.alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </div>

      <div className="space-y-20">
        {projectData.contentBlocks.map((block, blockIdx) => (
          <section key={blockIdx} className="clear-both">
            
            <h2 className="text-2xl font-bold text-foreground transition-colors duration-300 mb-6">
              {block.heading}
            </h2>

            <div className="block flow-root sm:block text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-base">
              
              {block.image && (
                <figure 
                  className={`
                    ${block.image.layout === 'left' ? 'sm:float-left sm:mr-8 sm:mb-6' : ''}
                    ${block.image.layout === 'right' ? 'sm:float-right sm:ml-8 sm:mb-6' : ''}
                    ${block.image.layout === 'full' ? 'w-full mb-8 clear-both' : block.image.widthClass || 'w-full sm:w-72'}
                    w-full mb-6 relative group
                  `}
                >
                  <div className="relative aspect-video w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-sm overflow-hidden group-hover:border-accent transition-all duration-300">
                    <Image 
                      src={'${srcPrefix}${block.image.src}'} 
                      alt={block.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                  {block.image.caption && (
                    <figcaption className="text-xs text-zinc-400 dark:text-zinc-500 font-light italic mt-2 pl-1">
                      {block.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {block.paragraphs.map((para, paraIdx) => (
                <p key={paraIdx} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}

            </div>
          </section>
        ))}
      </div>

    </main>
  );
}