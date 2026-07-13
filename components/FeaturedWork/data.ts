export type Project = {
  id: number;
  year: string;
  category: string;
  title: string;
  /** One-line editorial standfirst shown under the title. */
  dek: string;
  challenge: string;
  solution: string;
  metricValue: string;
  metricLabel: string;
  /**
   * Base path (no extension) inside /public/images/projects/.
   * The component looks for, in order of preference:
   *   {image}.avif, {image}.webp, {image}.jpg
   * Drop matching files in /public/images/projects/ and this
   * is the only field you need to touch to swap in final assets.
   */
  image: string;
  imageAlt: string;
  /** Case study destination. Replace "#" with the live URL when ready. */
  href: string;
  /** Loads eagerly with high priority. Reserve for the first chapter only. */
  priority?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    year: "2024",
    category: "Website Development",
    title: "Luxury Real Estate Platform",
    dek: "Rebuilding a legacy listing site into a fast, trust-first buying experience.",
    challenge:
      "Outdated website with poor conversions and weak brand perception.",
    solution:
      "Designed and developed a premium, conversion-focused digital experience.",
    metricValue: "+186%",
    metricLabel: "Qualified leads",
    image: "/images/projects/122",
    imageAlt:
      "Full-bleed property listing page from the luxury real estate platform, shown on desktop.",
    href: "#",
    priority: true,
  },
  {
    id: 2,
    year: "2024",
    category: "Motion Graphics",
    title: "High-Impact Social Campaign",
    dek: "A cinematic visual language built to hold attention in a three-second feed.",
    challenge:
      "Low engagement and inconsistent visual identity across platforms.",
    solution:
      "Created cinematic motion graphics and social-first creative assets.",
    metricValue: "4.2M",
    metricLabel: "Organic reach",
    image: "/images/projects/152",
    imageAlt:
      "Key frame from the social campaign motion graphic, featuring bold cinematic typography.",
    href: "#",
  },
  {
    id: 3,
    year: "2023",
    category: "Brand Identity",
    title: "Modern Brand Transformation",
    dek: "A full identity system built to read as premium at every touchpoint.",
    challenge: "Brand lacked trust and premium positioning.",
    solution:
      "Built a complete visual identity system with modern brand assets.",
    metricValue: "+61%",
    metricLabel: "Brand recall",
    image: "/images/projects/modern-brand-transformation",
    imageAlt:
      "Brand identity system showing logo, type, and colour applications across print and digital.",
    href: "#",
  },
];
