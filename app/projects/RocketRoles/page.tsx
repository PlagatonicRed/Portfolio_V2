import Image from 'next/image';
import Link from 'next/link';

const projectData = {
  title: "Rocket Mortgage: Rocket Roles",
  subtitle: "Internal workflow distribution tool and permission routing engine for enterprise mortgage pipelines.",
  meta: [
    { label: "Role", value: "Full Stack Intern" },
    { label: "Timeline", value: "3 Months (May 2025 - August 2025)" },
    { label: "Stack", value: "React, Next.js, C#, DynamoDB" }
  ],
  skillsLearned: [
    "Enterprise database refactoring and schema migrations for pre-existing production systems.",
    "Designing and extending scalable REST API endpoints for consumption by external internal tools.",
    "Implementing performance-oriented server-side fuzzy search functionality across large employee indices.",
    "Integrating proprietary internal authorization providers to cleanly validate corporate identities."
  ],
  heroImage: {
    src: "/images/projects/Rocket.webp",
    alt: "Rocket Roles internal dashboard layout showing team workflow distribution panels"
  },
  
  contentBlocks: [
    {
      heading: "Project Overview & Modernization Goals",
      // image: {
      //   src: "/projects/screenshot-ui.jpg",
      //   alt: "User interface view of tracking panel",
      //   caption: "Fig 1. Modernized team permission structure and routing panel.",
      //   layout: "right",
      //   widthClass: "w-full sm:w-80"
      // },
      paragraphs: [
        "Rocket Roles is a critical, pre-existing internal application utilized within Rocket Mortgage to streamline and distribute distinct phases of the mortgage process across specialized business teams. Operating similarly to server role permissions found in platforms like Discord, the software allows employees to subscribe to defined 'roles' that directly dictate which segmented pieces of mortgage paperwork and tasks route to their respective dashboards.",
        "Our team's primary directive was to completely modernize the legacy user interface and build out high-impact feature additions to meet scaling operational demands. Because the system was actively integrated into daily production workflows, all refactors and feature enhancements had to be engineered with strict backwards compatibility in mind.",
        "To significantly accelerate administrative setup times, we integrated Rocket Mortgage's core internal database directly into the application. This upgrade allowed for instant role creation and seamless cross-referencing to automatically authenticate corporate employee information against central business records."
      ]
    },
    {
      heading: "Database Refactoring & Core API Extensions",
      image: {
        src: "/images/projects/RocketRolesFlowChart.png",
        alt: "System architecture diagram for the Rocket Roles backend",
        caption: "Fig 1. System architecture diagram for the Rocket Roles backend",
        layout: "left",
        widthClass: "w-full sm:w-120"
      },
      paragraphs: [
        "To unlock deeper collaborative features, we designed and implemented a nested group functionality. This architectural shift allowed administrators to bundle multiple granular permissions and roles together into top-level operational groups, heavily minimizing manual access configuration loops for complex multi-team tasks.",
        "Supporting these front-end feature sets required a deep overhaul of the backend. I worked on refactoring our core PostgreSQL database schemas to accommodate the newly introduced relational hierarchies and deployed server-side fuzzy search capabilities to let users rapidly filter through extensive sets of roles, groups, and staff records.",
        "Furthermore, because multiple separate internal applications across Rocket Mortgage depend heavily on this system for task routing, we significantly extended the application's API endpoints. This upgrade ensured that dependent internal tooling could securely pull richer, highly detailed role information than previously possible, all culminating in a successful live rollout directly to production."
      ]
    }
  ]
};

export default function ProjectTemplate() {
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

        {/* Skills Learned Section */}
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
          src={projectData.heroImage.src} 
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
            
            {/* Block Heading */}
            <h2 className="text-2xl font-bold text-foreground transition-colors duration-300 mb-6">
              {block.heading}
            </h2>

            <div className="block flow-root sm:block text-zinc-600 dark:text-zinc-400 leading-relaxed font-light text-base">
              
              {block.image && (
                <figure 
                  className={`
                    /* Component structure switches dynamically based on position inputs */
                    ${block.image.layout === 'left' ? 'sm:float-left sm:mr-8 sm:mb-6' : ''}
                    ${block.image.layout === 'right' ? 'sm:float-right sm:ml-8 sm:mb-6' : ''}
                    ${block.image.layout === 'full' ? 'w-full mb-8 clear-both' : block.image.widthClass || 'w-full sm:w-72'}
                    
                    /* Base behavior for small mobile viewports (stretches full width) */
                    w-full mb-6 relative group
                  `}
                >
                  <div className="relative aspect-video w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-sm overflow-hidden group-hover:border-accent transition-all duration-300">
                    <Image 
                      src={block.image.src} 
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