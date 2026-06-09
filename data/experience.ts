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
      "Engineered desktop viewport clipping tools utilizing custom runtime graphics buffers.",
      "Designed dynamic alpha-blending layouts and transparency pipelines for multi-window applications."
    ]
  },
  {
    id: "igs-2026",
    role: "Tech Lead & Producer",
    company: "Iron Galaxy Studios",
    period: "August 2025 — December 2025",
    bullets: [
      "Engineered desktop viewport clipping tools utilizing custom runtime graphics buffers.",
      "Designed dynamic alpha-blending layouts and transparency pipelines for multi-window applications."
    ]
  },
  {
    id: "rocket-2025",
    role: "Full Stack Intern",
    company: "Rocket Mortgage",
    period: "May 2025 — August 2025",
    bullets: [
      "Engineered desktop viewport clipping tools utilizing custom runtime graphics buffers.",
      "Designed dynamic alpha-blending layouts and transparency pipelines for multi-window applications."
    ]
  }
];