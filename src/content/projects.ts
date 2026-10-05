import { img } from "@/lib/site";

/**
 * Project data follows the CMS structure in PRD §48 so it can be moved into
 * Sanity / Contentful later without touching components.
 * NOTE: These are conceptual showcase projects with placeholder photography.
 */
export type ProjectCategory = "Residential" | "Commercial" | "Interior" | "Renovation" | "Architecture";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  type: string;
  location: string;
  year: number;
  size?: string;
  services: string[];
  thumbnail: string;
  hero: string;
  gallery: { src: string; alt: string }[];
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  materials: { label: string; value: string }[];
  results: string;
  seoTitle: string;
  seoDescription: string;
}

const I = {
  poolHouse: "1600596542815-ffad4c1539a9",
  modernExterior: "1600585154340-be6161a56a0c",
  livingWide: "1600607687939-ce8a6c25118c",
  kitchenWhite: "1600566753190-17f0baa2a6c3",
  livingWarm: "1600210492486-724fe5c67fb0",
  interiorStair: "1600607687920-4e2a09cf159d",
  diningRoom: "1600566753086-00f18fb6b3ea",
  kitchenIsland: "1600585154526-990dced4db0d",
  loungeNeutral: "1600573472550-8090b5e0745e",
  luxuryHouse: "1613490493576-7fde63acd811",
  whiteHouse: "1564013799919-ab600027ffc6",
  modernHouse: "1512917774080-9991f1c4c750",
  officeOpen: "1497366216548-37526070297c",
  officeBright: "1497366811353-6870744d04b2",
  bathStone: "1552321554-5fefe8c9ef14",
  bathModern: "1584622650111-993a426fbf0a",
  restaurant: "1517248135467-4c7edcad34c4",
  kitchenDark: "1556909114-f6e7ad7d3136",
  sofaRoom: "1586023492125-27b2c045efd7",
  interiorCalm: "1618221195710-dd6b41faaea6",
  bedroomSoft: "1616486338812-3dadae4b4ace",
  bedroomCalm: "1631679706909-1844bbd07221",
  houseDusk: "1600047509807-ba8f99d2cdde",
  apartment: "1522708323590-d24dbb6b0267",
  apartmentLiving: "1502672260266-1c1ef2d93688",
  apartmentBright: "1560448204-e02f11c3d0e2",
  officeDesk: "1524758631624-e2822e304c36",
  kitchenOak: "1556912173-3bb406ef7e77",
  kitchenClassic: "1484154218962-a197022b5858",
  lampRoom: "1507089947368-19c1da9775ae",
  bedroomWide: "1505691938895-1758d7feb511",
};
export const photoIds = I;

const g = (ids: string[], base: string) => ids.map((id, i) => ({ src: img(id, 1600), alt: `${base} — view ${i + 1}` }));

export const projects: Project[] = [
  {
    slug: "canyon-ridge-residence",
    title: "Canyon Ridge Residence",
    categories: ["Residential", "Architecture"],
    type: "New Custom Home",
    location: "Malibu, California",
    year: 2025,
    size: "6,200 sq ft",
    services: ["Architectural Design", "Interior Design", "Construction Consulting"],
    thumbnail: img(I.poolHouse, 1200),
    hero: img(I.poolHouse, 2400),
    gallery: g([I.poolHouse, I.livingWide, I.kitchenWhite, I.interiorStair, I.diningRoom, I.bedroomSoft, I.bathStone, I.loungeNeutral], "Canyon Ridge Residence"),
    overview:
      "A young family wanted a home that opened fully to its hillside setting while remaining private, calm and easy to live in every day.",
    challenge:
      "A steep lot with strong afternoon sun and close neighbors on two sides. The brief called for expansive glazing without sacrificing comfort or privacy.",
    approach:
      "We oriented the main living volume toward the canyon and stepped the plan down the slope, using deep overhangs and solid side walls to shape views and control light.",
    solution:
      "A single long living pavilion with retractable glass, a sheltered pool terrace and a private bedroom wing. Warm oak, limestone and plaster keep the palette quiet so the landscape leads.",
    materials: [
      { label: "Flooring", value: "Wide-plank white oak, honed limestone" },
      { label: "Walls", value: "Lime plaster, board-formed concrete" },
      { label: "Cabinetry", value: "Rift oak with integrated pulls" },
      { label: "Lighting", value: "Recessed linear, sculptural pendants" },
      { label: "Furniture", value: "Low-profile upholstered pieces in natural linen" },
      { label: "Fixtures", value: "Brushed brass, matte black accents" },
    ],
    results:
      "The family now lives almost entirely indoor–outdoor. Interior temperatures stay comfortable through summer, and the bedroom wing feels genuinely private despite the open plan.",
    seoTitle: "Canyon Ridge Residence | Custom Home Design — Alfred Pederson",
    seoDescription: "A 6,200 sq ft hillside custom home in Malibu combining architectural design, interiors and construction consulting.",
  },
  {
    slug: "highland-park-kitchen",
    title: "Highland Park Kitchen",
    categories: ["Renovation", "Interior"],
    type: "Kitchen Renovation",
    location: "Los Angeles, California",
    year: 2025,
    size: "420 sq ft",
    services: ["Renovation & Remodeling", "Interior Design"],
    thumbnail: img(I.kitchenIsland, 1200),
    hero: img(I.kitchenIsland, 2400),
    gallery: g([I.kitchenIsland, I.kitchenOak, I.kitchenWhite, I.diningRoom, I.kitchenClassic, I.lampRoom], "Highland Park Kitchen"),
    overview: "Owners of a 1920s craftsman home wanted a kitchen that suited how they cook and entertain without losing the home's character.",
    challenge: "A closed, dark galley layout with limited storage, dated systems and a disconnect from the garden.",
    approach: "We removed a non-structural wall, relocated the range to an outside wall and introduced a generous island as the social center of the home.",
    solution: "Oak cabinetry, a honed marble island and a new steel-framed garden door that brings in afternoon light and connects directly to outdoor dining.",
    materials: [
      { label: "Flooring", value: "Reclaimed oak, herringbone" },
      { label: "Walls", value: "Hand-made zellige tile, warm white paint" },
      { label: "Cabinetry", value: "Quarter-sawn oak, inset doors" },
      { label: "Lighting", value: "Linen pendants, under-cabinet LED" },
      { label: "Furniture", value: "Counter stools in leather and walnut" },
      { label: "Fixtures", value: "Unlacquered brass taps" },
    ],
    results: "Storage nearly doubled, the kitchen now opens to the garden, and the space has become the everyday gathering room of the house.",
    seoTitle: "Highland Park Kitchen Renovation — Alfred Pederson",
    seoDescription: "A craftsman kitchen renovation in Los Angeles that improved layout, storage and garden connection.",
  },
  {
    slug: "meridian-executive-office",
    title: "Meridian Executive Office",
    categories: ["Commercial", "Interior"],
    type: "Executive Office",
    location: "Santa Monica, California",
    year: 2024,
    size: "12,500 sq ft",
    services: ["Commercial Design", "Interior Design", "Project Consultation"],
    thumbnail: img(I.officeBright, 1200),
    hero: img(I.officeBright, 2400),
    gallery: g([I.officeBright, I.officeOpen, I.officeDesk, I.loungeNeutral, I.interiorCalm, I.lampRoom], "Meridian Executive Office"),
    overview: "A growing advisory firm needed a workplace that would impress clients and support focused, collaborative work.",
    challenge: "A deep floor plate with little natural light at its center and an aggressive move-in timeline.",
    approach: "We pushed open workspaces to the perimeter glazing and placed enclosed rooms at the core, finished in light-reflective materials.",
    solution: "A welcoming client lounge, acoustically treated meeting rooms and flexible team areas, unified by oak, felt and soft bronze detailing.",
    materials: [
      { label: "Flooring", value: "Engineered oak, wool carpet tiles" },
      { label: "Walls", value: "Acoustic felt panels, glass partitions" },
      { label: "Cabinetry", value: "Oak veneer joinery" },
      { label: "Lighting", value: "Tunable white linear systems" },
      { label: "Furniture", value: "Height-adjustable desks, lounge seating" },
      { label: "Fixtures", value: "Bronze hardware throughout" },
    ],
    results: "Delivered on schedule. Staff report better focus, and the client lounge is now a key part of the firm's client experience.",
    seoTitle: "Meridian Executive Office | Commercial Interior Design — Alfred Pederson",
    seoDescription: "A 12,500 sq ft executive office interior in Santa Monica designed for clients and focused teamwork.",
  },
  {
    slug: "laurel-terrace-apartment",
    title: "Laurel Terrace Apartment",
    categories: ["Interior", "Residential"],
    type: "Luxury Apartment",
    location: "West Hollywood, California",
    year: 2024,
    size: "2,100 sq ft",
    services: ["Interior Design", "Residential Design"],
    thumbnail: img(I.livingWarm, 1200),
    hero: img(I.livingWarm, 2400),
    gallery: g([I.livingWarm, I.apartmentLiving, I.bedroomCalm, I.bathModern, I.apartmentBright, I.sofaRoom], "Laurel Terrace Apartment"),
    overview: "A professional couple wanted their apartment to feel like a calm retreat from a busy city schedule.",
    challenge: "A builder-grade apartment with awkward furniture zones and harsh overhead lighting.",
    approach: "We re-planned furniture layouts around views and daily routines and replaced flat lighting with layered, dimmable sources.",
    solution: "A soft, tonal palette of linen, travertine and walnut, with custom joinery that hides storage and frames the city views.",
    materials: [
      { label: "Flooring", value: "Light oak, wool rugs" },
      { label: "Walls", value: "Limewash in warm white" },
      { label: "Cabinetry", value: "Walnut custom joinery" },
      { label: "Lighting", value: "Layered lamps, concealed cove lighting" },
      { label: "Furniture", value: "Bespoke sofa, travertine tables" },
      { label: "Fixtures", value: "Brushed nickel" },
    ],
    results: "The apartment now feels larger, quieter and more personal, with every room used daily.",
    seoTitle: "Laurel Terrace Apartment | Luxury Interior Design — Alfred Pederson",
    seoDescription: "A luxury apartment interior in West Hollywood with tailored joinery, layered lighting and a calm palette.",
  },
  {
    slug: "ember-and-oak-restaurant",
    title: "Ember & Oak",
    categories: ["Commercial", "Interior"],
    type: "Restaurant Interior",
    location: "Pasadena, California",
    year: 2023,
    size: "3,800 sq ft",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: img(I.restaurant, 1200),
    hero: img(I.restaurant, 2400),
    gallery: g([I.restaurant, I.diningRoom, I.lampRoom, I.kitchenDark, I.interiorCalm, I.loungeNeutral], "Ember & Oak restaurant"),
    overview: "A chef-led restaurant needed a dining room as considered as its seasonal menu.",
    challenge: "A former retail unit with high ceilings, poor acoustics and no clear sense of arrival.",
    approach: "We created a sequence from street to bar to dining room, softened acoustics with timber and textiles, and used light to set intimate zones.",
    solution: "Warm oak, smoked glass and banquette seating create an atmospheric room that works for both quiet dinners and full service.",
    materials: [
      { label: "Flooring", value: "Dark stained oak, encaustic tile" },
      { label: "Walls", value: "Timber slat acoustic panels" },
      { label: "Cabinetry", value: "Smoked oak bar joinery" },
      { label: "Lighting", value: "Low pendants, warm 2200K" },
      { label: "Furniture", value: "Leather banquettes, bentwood chairs" },
      { label: "Fixtures", value: "Aged brass" },
    ],
    results: "Noise levels dropped noticeably and the room supports more covers without feeling crowded.",
    seoTitle: "Ember & Oak | Restaurant Interior Design — Alfred Pederson",
    seoDescription: "Restaurant interior design in Pasadena focused on atmosphere, acoustics and guest flow.",
  },
  {
    slug: "silver-lake-modern",
    title: "Silver Lake Modern",
    categories: ["Renovation", "Residential", "Architecture"],
    type: "Residential Renovation",
    location: "Los Angeles, California",
    year: 2023,
    size: "3,400 sq ft",
    services: ["Architectural Design", "Renovation & Remodeling"],
    thumbnail: img(I.modernExterior, 1200),
    hero: img(I.modernExterior, 2400),
    gallery: g([I.modernExterior, I.livingWide, I.kitchenWhite, I.bedroomWide, I.bathStone, I.houseDusk], "Silver Lake Modern"),
    overview: "A tired 1960s home was reimagined for a family that wanted open, light-filled living.",
    challenge: "Low ceilings, small windows and an inefficient plan that turned its back on the view.",
    approach: "We preserved the structure where possible, raised the main roof and opened the rear facade to the garden.",
    solution: "A clean, contemporary envelope with a vaulted living space, clerestory light and a seamless flow to the outdoor terrace.",
    materials: [
      { label: "Flooring", value: "Polished concrete, oak" },
      { label: "Walls", value: "Smooth plaster, cedar cladding" },
      { label: "Cabinetry", value: "Matte lacquer, oak" },
      { label: "Lighting", value: "Clerestory daylight, track lighting" },
      { label: "Furniture", value: "Mid-century inspired pieces" },
      { label: "Fixtures", value: "Matte black" },
    ],
    results: "The home feels twice its former size, uses far less artificial light during the day and has significantly increased in value.",
    seoTitle: "Silver Lake Modern | Home Renovation — Alfred Pederson",
    seoDescription: "A 1960s home renovation in Silver Lake, Los Angeles, opened to light and garden.",
  },
  {
    slug: "brentwood-spa-bath",
    title: "Brentwood Spa Bath",
    categories: ["Renovation", "Interior"],
    type: "Luxury Bathroom",
    location: "Brentwood, California",
    year: 2024,
    size: "280 sq ft",
    services: ["Renovation & Remodeling", "Interior Design"],
    thumbnail: img(I.bathStone, 1200),
    hero: img(I.bathStone, 2400),
    gallery: g([I.bathStone, I.bathModern, I.bedroomSoft, I.interiorCalm], "Brentwood Spa Bath"),
    overview: "A primary bathroom redesign to create a daily spa-like ritual at home.",
    challenge: "A cramped layout with poor ventilation and a window placed awkwardly above the tub.",
    approach: "We reorganized the room around the window, creating a wet zone with a freestanding tub and walk-in shower.",
    solution: "Book-matched stone, warm oak vanity and soft concealed lighting deliver a calm, durable room.",
    materials: [
      { label: "Flooring", value: "Heated honed limestone" },
      { label: "Walls", value: "Book-matched marble, tadelakt plaster" },
      { label: "Cabinetry", value: "Floating oak vanity" },
      { label: "Lighting", value: "Concealed LED, mirror backlight" },
      { label: "Furniture", value: "Teak bench" },
      { label: "Fixtures", value: "Brushed brass thermostatic" },
    ],
    results: "A brighter, better-ventilated room that the clients describe as the most used space in the house.",
    seoTitle: "Brentwood Spa Bath | Bathroom Remodeling — Alfred Pederson",
    seoDescription: "Luxury bathroom remodeling in Brentwood with natural stone, oak and spa-inspired planning.",
  },
  {
    slug: "harbor-view-workspace",
    title: "Harbor View Workspace",
    categories: ["Commercial"],
    type: "Commercial Workspace",
    location: "San Diego, California",
    year: 2022,
    size: "8,000 sq ft",
    services: ["Commercial Design", "Project Consultation"],
    thumbnail: img(I.officeOpen, 1200),
    hero: img(I.officeOpen, 2400),
    gallery: g([I.officeOpen, I.officeDesk, I.officeBright, I.loungeNeutral], "Harbor View Workspace"),
    overview: "A creative studio needed a flexible workspace that could adapt as its team evolved.",
    challenge: "A fixed lease budget and a requirement to reuse existing services where possible.",
    approach: "We kept infrastructure in place and focused investment on movable furniture, lighting and acoustics.",
    solution: "A modular open studio with project tables, phone booths and an all-hands area overlooking the harbor.",
    materials: [
      { label: "Flooring", value: "Sealed concrete, area rugs" },
      { label: "Walls", value: "Pinable cork, white paint" },
      { label: "Cabinetry", value: "Birch plywood storage" },
      { label: "Lighting", value: "Suspended linear LED" },
      { label: "Furniture", value: "Mobile benches and tables" },
      { label: "Fixtures", value: "Powder-coated steel" },
    ],
    results: "Delivered within budget, with a layout the team reconfigures on its own for workshops and events.",
    seoTitle: "Harbor View Workspace | Commercial Design — Alfred Pederson",
    seoDescription: "A flexible 8,000 sq ft creative workspace in San Diego delivered within a fixed budget.",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Interior", "Renovation", "Architecture"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const relatedProjects = (p: Project, n = 3) =>
  projects.filter((x) => x.slug !== p.slug && x.categories.some((c) => p.categories.includes(c))).slice(0, n);
