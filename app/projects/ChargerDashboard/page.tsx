import Image from 'next/image';
import Link from 'next/link';



const projectData = {
  title: "General Motors: EV Charger Dashboard",
  subtitle: "Internal multi-vendor aggregation platform, secure role management, and operational analytics suite.",
  meta: [
    { label: "Role", value: "Full Stack Developer" },
    { label: "Timeline", value: "4 Months (Jan 2026 - March 2026)" },
    { label: "Stack", value: "Next.js, FastAPI, PostgreSQL, Slack API" }
  ],
  skillsLearned: [
    "Enterprise Role-Based Access Control (RBAC) & web application security architectures.",
    "Data normalization pipelines handling asymmetric third-party vendor API streams.",
    "Automated asynchronous event notification routing using enterprise Slack Webhooks.",
    "Full-stack state management and telemetry mapping across containerized Next.js/FastAPI environments."
  ],
  heroImage: {
    src: "/images/projects/GM.webp", 
    alt: "General Motors on-campus EV charging station lot overview map"
  },
  
  contentBlocks: [
    {
      heading: "Project Overview & Engineering Goals",
      image: {
        src: "/images/projects/EV_Charger_Map_UI.png",
        alt: "User interface view of tracking panel displaying real-time charger pins",
        caption: "Fig 1. Interactive map page showing charger locations and statuses",
        layout: "right", 
        widthClass: "w-full sm:w-120" 
      },
      paragraphs: [
        "As more employees at General Motors transition to electric vehicles, on-campus charging infrastructure has faced high demand and structural constraints. Charger information was originally fragmented across completely different third-party vendor systems, rendering it nearly impossible for administrators and employees to accurately determine true availability and pull metrics.",
        "One big technical challenge we had to overcome was consolidating data records without having unified, standard access to all proprietary APIs for every EV charger vendor. The goal was to build a single centralized web platform capable of normalizing incoming vendor feeds to minimize charger downtime and radically reduce employee idle wait loops.",
        "By avoiding detached infrastructure channels and setting up unified real-time telemetry mappings, the dashboard allows employees to monitor parking layouts dynamically via interactive color-coded maps, view specific output power metrics, join waiting queues, and receive direct notifications when an active charging cycle concludes."
      ]
    },
    {
      heading: "Full-Stack Implementation & System Security",
      image: {
        src: "/images/projects/EV_Charger_SAD_V2.png",
        alt: "Role-based access control authentication flow diagram",
        caption: "Fig 2. EV Charger DashBoard system arcitecture diagram.",
        layout: "left",
        widthClass: "w-full sm:w-130"
      },
      paragraphs: [
        "In addition to full-stack feature development, a core responsibility of this project involved engineering the application's comprehensive security framework. I owned the implementation of strict end-to-end security measures and designed the role-based access control (RBAC) architecture to securely segment layout privileges between standard employees and site administrators.",
        "On the presentation layer, I co-designed and developed user interfaces using Next.js and React to keep the administrative dashboards and map tools highly responsive. On the backend, I built out scalable Python and FastAPI routes to support secure session authentications, data validation layers, and custom database transactions.",
        "To maximize user engagement and system throughput, I also designed and deployed an automated Slack integration channel. By hooking the notification pipeline straight into enterprise Slack spaces, the application seamlessly alerts employees right where they work the moment an EV charger frees up or their vehicle hits maximum capacity, preventing prolonged station stagnation."
      ]
    },
    {
      heading: "Data Architecture & Infrastructure Stability",
      paragraphs: [
        "A relational PostgreSQL database engine stores both incoming live status updates and deep historical usage charts. This robust historical logging enables executive managers and campus administrators to filter, sort, and isolate consumption analytics trends over specific time spans, connector configurations, or target locations to back future facility expansions.",
        "The entire integrated system architecture is containerized and deployed utilizing Docker, ensuring isolated runtimes, uniform dependencies, and predictable production lifecycles across GM enterprise host servers."
      ]
    }
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

        {/* New Skills Learned Block */}
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

      {/* Hero Showcase Image */}
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
                      src={`${srcPrefix}${block.image.src}`}
                      alt={block.image.alt}
                      unoptimized
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