import Image from 'next/image';
import Link from 'next/link';

const projectData = {
  title: "Windows Window Shader Engine",
  subtitle: "An advanced desktop optimization and effects framework utilizing Windows Graphics Capture and free-threaded DirectX 11 pipelines.",
  meta: [
    { label: "Role", value: "Core Graphics Developer" },
    { label: "Timeline", value: "2 Weeks (June 2026)" },
    { label: "Stack", value: "C++/WinRT, DirectX 11, HLSL, Windows Graphics Capture" }
  ],
  skillsLearned: [
    "Leveraging low-latency Windows.Graphics.Capture APIs via C++/WinRT for asynchronous frame pooling.",
    "Implementing free-threaded FrameArrived handlers to isolate rendering pipelines from UI execution blocks.",
    "Developing adaptive subresource staging buffers to process dirty-region tracking updates safely on the GPU.",
    "Compiling and remapping standalone mathematical HLSL fragment shaders over dynamically resizing swapchains.",
    "Engineering a real-time Win32 management GUI to enumerate window hooks and simulate workspace physics structures."
  ],
  heroImage: {
    src: "/images/projects/WWS_V3.png",
    alt: "Windows Desktop utility capturing and displaying high-performance shader effects on target app windows",
    width: 1920,
    height: 1080
  },
  
  contentBlocks: [
    {
      heading: "Asynchronous Desktop Capture & WinRT Pipelines",
      image: {
        src: "/images/projects/WWS_Demonstration.gif",
        alt: "The centralized configuration block managing target frame pool inputs",
        caption: "Fig 1. Demonstration of shader being applied to a window",
        layout: "right",
        widthClass: "w-full sm:w-120",
        width: 600,
        height: 450
      },
      paragraphs: [
        "The Windows Window Shader project is a high-performance desktop utility engineered to capture native OS applications and inject real-time mathematical shader effects directly over their presentation states. Built using modern C++/WinRT, the architecture shifts away from heavy legacy GDI hooks, opting instead for Microsoft's low-latency Windows.Graphics.Capture (WGC) API framework to achieve maximum hardware throughput.",
        "To guarantee a completely smooth rendering experience without impacting desktop input stability, the pipeline implements a free-threaded frame execution strategy. By spinning up `Direct3D11CaptureFramePool::CreateFreeThreaded`, the system forces incoming `FrameArrived` notification events onto an isolated worker thread. This structure isolates heavy texture updates from the main program execution loop.",
        "The framework wraps native surface references into a thread-safe rendering engine, managing its own hardware references (`ID3D11Device`, `IDXGISwapChain3`). When users manipulate layout sizes or resize their active windows, the application senses the variance immediately, invoking dedicated asset transformations to dynamically resize back-buffers while matching specific DXGI color profiles seamlessly."
      ]
    },
    {
      heading: "Win32 Control Interface & Target Window Interception",
      image: {
        src: "/images/projects/WWS_GUI.png",
        alt: "The centralized Win32 configuration panel containing target window enumeration dropdowns and physics toggle switches",
        caption: "Fig 2. Native control interface for targeted handle hooks and mechanics toggles.",
        layout: "left",
        widthClass: "w-full sm:w-80",
        width: 400,
        height: 600
      },
      paragraphs: [
        "To provide an administrative interface over the rendering pipelines, the system compiles a lightweight, native Win32 control GUI layer using desktop common controls (`comctl32.lib`). This control hub functions as a live command center, actively enumerating open desktop window hierarchies and exposing real-time toggle arrays to attach, detach, or modify graphics parameters instantly across targeted workspace hooks.",
        "When an operator isolates a target workspace context, the GUI backend extracts its unique window handle (`HWND`) and feeds the descriptor directly into the capture initialization pipeline. Users can selectively overlay shaders onto individual applications without interfering with nearby processes, preserving standard desktop workflow composition flags.",
        "By binding granular callback routines directly to the native window loop (`WndProc`), slider inputs dynamically transmit constant buffer parameters down to the graphics pipelines. This allows for fluid, uninterrupted modifications to visual amplitude, frequency spectrum boundaries, and color overlay masks in real time."
      ]
    },
    {
      heading: "Systemic Workspace Mechanics: Kinetic Momentum & Gravity Simulations",
      image: {
        src: "/images/projects/WWS_Physics.gif",
        alt: "HLSL vertex/pixel shader structure executing over full-screen triangle structures",
        caption: "Fig 3. Demonstration of window physics ",
        layout: "left",
        widthClass: "w-full sm:w-80",
        width: 800,
        height: 450
      },
      paragraphs: [
        "Beyond localized graphic rendering, the utility introduces an interactive mechanics engine over standard desktop layouts by introducing kinematic physical calculations. When specialized physics flags are enabled within the Win32 interface, the program captures asynchronous mouse input ticks and evaluates travel vector changes over successive timeline updates.",
        "If a user drags and releases an active target workspace container, the physics engine tracks the final velocity trajectory, retaining directional momentum and applying a precise mathematical friction dampening multiplier (`0.98f`) across active updates. This allows windows to smoothly coast across display dimensions with realistic mechanical feedback.",
        "Simultaneously, an optional downward gravitational acceleration factor (`0.8f`) can be applied to window positions on every frame tick. The backend continuously measures the moving boundaries against primary monitor screen metrics (`SM_CXSCREEN`, `SM_CYSCREEN`). When hitting an environmental border, velocity vectors are inverted by an elastic dampening parameter (`-0.7f`) to simulate impact physics, cleanly settling application layers to rest without clipping screen bounds."
      ]
    },
    {
      heading: "Optimized Dirty Region Processing & Shader Pass Execution",
      paragraphs: [
        "A core technical strength of the utility lies in its defensive consumption of graphics memory. The engine detects if the active OS version supports dirty rect caching (`GraphicsCaptureDirtyRegionMode::ReportAndRender`). Instead of forcing a massive, full-frame texture overwrite on every single tick, the system loop evaluates sub-rect regions.",
        "When processing fractional updates, the backend calculates target bounding arrays via custom macro structures, isolating updated coordinate boxes safely. It uses `CopySubresourceRegion` to stitch only the dirty regions into a localized texture map (`m_stagingTexture`). This prevents redundant memory operations and significantly reduces resource utilization under intensive frame tracking changes.",
        "Once frame compositions are completely assembled inside the staging layer, they pass straight to the custom HLSL shader compiler stage. The application binds its constant buffers via strict 16-byte aligned configurations, mapping the texture input over an unindexed full-screen triangle setup before outputting the final visual effect to the system swapchain via `Present1` routines."
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

      {/* Hero Showcase Image - Now auto-scales to its exact aspect ratio safely */}
      <div className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden mb-20">
        <Image 
          src={projectData.heroImage.src} 
          alt={projectData.heroImage.alt}
          width={projectData.heroImage.width}
          height={projectData.heroImage.height}
          className="w-full h-auto object-cover"
          priority
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
                  {/* Container uses native content dimensions rather than enforcing aspect-video boxes */}
                  <div className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-sm overflow-hidden group-hover:border-accent transition-all duration-300">
                    <Image 
                      src={block.image.src} 
                      alt={block.image.alt}
                      width={block.image.width}
                      height={block.image.height}
                      className="w-full h-auto object-cover"
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