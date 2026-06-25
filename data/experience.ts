export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "gm-2026",
    role: "Full Stack Developer",
    company: "General Motors",
    period: "January 2026 — April 2026",
    bullets: [
      'Engineered secure authorization and role-based access control (RBAC) systems for an internal EV charging platform used across GM campuses.',
      'Developed Slack-integrated notification services for real-time charger monitoring and employee queue alerts.',
      'Built charger discovery, occupancy tracking, and waitlist functionality using Python, Next.js, and PostgreSQL.',
      'Collaborated within a 4-person Agile team on sprint planning, code reviews, and feature delivery.',
      'Improved platform scalability and reliability through modular backend architecture and optimized database workflows.'
    ]
  },
  {
    id: "igs-2026",
    role: "Tech Lead & Producer",
    company: "Iron Galaxy Studios",
    period: "August 2025 — December 2025",
    bullets: [
      'Led a multidisciplinary development team as Technical Producer, coordinating Scrum ceremonies, sprint planning, and Jira-based task management.',
      'Engineered core gameplay systems including player health, damage calculation, death/respawn handling, and stage progression state machines.',
      'Developed a modular, data-driven encounter system that enabled designers to configure enemy waves and difficulty scaling without engine-level modifications.',
      'Implemented advanced projectile mechanics including ricochet physics, piercing behaviors, lifedrain effects, and runtime damage scaling systems.',
      'Managed milestone delivery, quality assurance reviews, and risk mitigation efforts to ensure the project shipped feature-complete and on schedule.'
    ]
  },
  {
    id: "rocket-2025",
    role: "Full Stack Intern",
    company: "Rocket Mortgage",
    period: "May 2025 — August 2025",
    bullets: [
      'Revamped "Rocket Roles," an internal workload assignment platform used by over 100 employees.',
      'Built C# (ASP.NET) services backed by AWS DynamoDB to automate task assignment and improve operational throughput.',
      'Developed Angular and TypeScript UI components with API integrations supporting end-to-end workflows.',
      'Applied Git/GitHub workflows, testing practices, and documentation standards to ensure production-ready quality.',
      'Presented project pitches and live demonstrations to department leadership throughout development.'
    ]
  }
];