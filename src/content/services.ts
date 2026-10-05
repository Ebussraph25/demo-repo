import { photo } from "./projects";

export interface Service {
  slug: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  offerings: string[];
  image: string;
  idealFor: string[];
  relatedProjectSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "architectural-design",
    number: "01",
    title: "Architectural Design",
    short: "Thoughtful architectural concepts designed around functionality, proportion, environment and lifestyle.",
    intro:
      "Good architecture starts with how you want to live or work. We develop concepts that respond to your site, light, budget and long-term goals — then refine them into clear, buildable designs.",
    offerings: ["Concept development", "Floor planning", "Space planning", "Residential architecture", "Building layouts", "Exterior concepts", "Design development"],
    image: photo("woven-pavilion", 1),
    idealFor: ["New custom homes", "Major additions", "Small multi-family developments"],
    relatedProjectSlugs: ["ridgeline-retreat", "curve-house", "lattice-tower"],
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior Design",
    short: "Complete interior environments combining materials, furniture, lighting, color and spatial planning.",
    intro:
      "We design interiors that feel personal, calm and complete. Every material, fixture and piece of furniture is selected to work together — and to work for you.",
    offerings: ["Interior concepts", "Space planning", "Furniture selection", "Materials", "Color palettes", "Lighting", "Fixtures", "Styling"],
    image: photo("executive-headquarters", 3),
    idealFor: ["Whole-home interiors", "Apartments and condos", "Hospitality and workplace"],
    relatedProjectSlugs: ["color-studies-residence", "brick-gallery-house", "executive-headquarters"],
  },
  {
    slug: "residential-design",
    number: "03",
    title: "Residential Design",
    short: "Custom solutions for new homes, renovations and residential transformations.",
    intro:
      "From a first home to a vacation property, we guide homeowners and developers through design decisions that balance beauty, everyday function and resale value.",
    offerings: ["Custom homes", "Apartments", "Townhouses", "Luxury residences", "Vacation properties"],
    image: photo("courtyard-house", 1),
    idealFor: ["Homeowners", "Property developers", "Real estate investors"],
    relatedProjectSlugs: ["gabled-wellness-house", "courtyard-house", "curve-house"],
  },
  {
    slug: "commercial-design",
    number: "04",
    title: "Commercial Design",
    short: "Functional and visually compelling spaces for offices, retail, hospitality and other commercial environments.",
    intro:
      "Commercial spaces shape how customers see your brand and how your team works. We design environments that perform as well as they look.",
    offerings: ["Offices", "Retail environments", "Restaurants", "Hospitality", "Professional spaces"],
    image: photo("city-workplace", 1),
    idealFor: ["Corporate offices", "Restaurants and hospitality", "Retail and showrooms"],
    relatedProjectSlugs: ["pink-column-workplace", "color-hotel", "arc-early-learning"],
  },
  {
    slug: "renovation",
    number: "05",
    title: "Renovation & Remodeling",
    short: "Transform existing spaces through intelligent planning, modern finishes and improved functionality.",
    intro:
      "Renovation is about unlocking what a property can become. We rethink layouts, upgrade finishes and improve how every room works — while respecting the character worth keeping.",
    offerings: ["Complete home remodeling", "Kitchen renovations", "Bathroom renovations", "Living-space redesign", "Basement upgrades", "Property modernization"],
    image: photo("glasshouse-loft", 1),
    idealFor: ["Kitchens and bathrooms", "Whole-home remodels", "Investment property upgrades"],
    relatedProjectSlugs: ["glasshouse-loft", "brick-gallery-house", "laneway-workshop"],
  },
  {
    slug: "construction-consulting",
    number: "06",
    title: "Construction Consulting",
    short: "Professional guidance during planning, design development and project execution.",
    intro:
      "Even the best design needs careful delivery. We help you plan, coordinate contractors and keep the finished result true to the design intent.",
    offerings: ["Design consultation", "Project planning", "Material consultation", "Contractor coordination", "Project oversight", "Design implementation advice"],
    image: photo("bush-pavilion-house", 1),
    idealFor: ["Owner-managed builds", "Developers", "Projects already in progress"],
    relatedProjectSlugs: ["rooftop-solar-retrofit", "health-campus", "riverside-precinct"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
