export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-80px)] max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center">
      
      {/* Hero */}
      <section className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Let's work together.
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Whether you're building enterprise software, game technology,
          internal tooling, or modern web applications, I'm always interested
          in discussing ambitious projects and challenging engineering problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/"
            className="bg-accent text-[var(--background)] inline-flex items-center justify-center border border-accent/30 px-8 py-3.5 font-medium text-sm rounded-sm hover:border-accent hover:bg-[var(--accent-hover)] hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div className="group relative flex flex-col items-center justify-center p-6 border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-sm hover:border-accent hover:bg-accent/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[140px]">
            <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 z-10 pointer-events-none">
              Phone
            </span>

            <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-accent transition-colors duration-300 z-10 pointer-events-none">
              +1 (248) 949-5090
            </span>

            <span className="text-xs text-zinc-400 mt-2 z-10 pointer-events-none">
              Call or Text
            </span>

            <a
              href="tel:+12489495090"
              className="absolute inset-0 z-20"
              aria-label="Call Ian Lampley"
            />
          </div>

          {/* Email */}
          <div className="group relative flex flex-col items-center justify-center p-6 border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-sm hover:border-accent hover:bg-accent/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[140px]">
            <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 z-10 pointer-events-none">
              Email
            </span>

            <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-accent transition-colors duration-300 z-10 pointer-events-none">
              IanLampley@gmail.com
            </span>

            <span className="text-xs text-zinc-400 mt-2 z-10 pointer-events-none">
              Preferred Contact Method
            </span>

            <a
              href="mailto:IanLampley@gmail.com"
              className="absolute inset-0 z-20"
              aria-label="Email Ian Lampley"
            />
          </div>

          {/* LinkedIn */}
          <div className="group relative flex flex-col items-center justify-center p-6 border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-sm hover:border-accent hover:bg-accent/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[140px]">
            <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 z-10 pointer-events-none">
              LinkedIn
            </span>

            <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-accent transition-colors duration-300 z-10 pointer-events-none">
              Connect Professionally
            </span>

            <span className="text-xs text-zinc-400 mt-2 z-10 pointer-events-none">
              Career & Experience
            </span>

            <a
              href="https://www.linkedin.com/in/ian-lampley-054111318"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label="View LinkedIn Profile"
            />
          </div>

          {/* GitHub */}
          <div className="group relative flex flex-col items-center justify-center p-6 border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-sm hover:border-accent hover:bg-accent/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[140px]">
            <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 z-10 pointer-events-none">
              GitHub
            </span>

            <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-accent transition-colors duration-300 z-10 pointer-events-none">
              View Source Code
            </span>

            <span className="text-xs text-zinc-400 mt-2 z-10 pointer-events-none">
              Projects & Experiments
            </span>

            <a
              href="https://github.com/PlagatonicRed"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label="View GitHub Profile"
            />
          </div>

        </div>
      </section>

      {/* Additional Information */}
      <section className="mt-20 border-t border-zinc-200/60 dark:border-zinc-900/60 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold text-accent mb-2">
              Enterprise
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Experience building internal tools, dashboards, and workflow
              automation platforms.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-accent mb-2">
              Game Dev
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Unity gameplay systems, tooling, technical leadership, and
              production experience.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-accent mb-2">
              Full Stack
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Modern web applications using React, Next.js, TypeScript,
              C#, and cloud-based services.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}