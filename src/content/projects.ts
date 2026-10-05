/**
 * Alfred Pederson portfolio. Project data follows the CMS structure in PRD §48
 * so it can move into Sanity / Contentful later without touching components.
 *
 * Photography: Alfred Pederson project images in /public/projects/<slug>/.
 * Location, year and size are optional — add them as confirmed per project
 * and they appear automatically on cards and case-study pages.
 */
export type ProjectCategory = "Residential" | "Commercial" | "Interior" | "Architecture" | "Education" | "Renovation";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  type: string;
  location?: string;
  year?: number;
  size?: string;
  services: string[];
  thumbnail: string;
  hero: string;
  gallery: { src: string; alt: string }[];
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  materials: { label: string; value: string }[];
  results: string;
  seoTitle: string;
  seoDescription: string;
}

/** Path helper for a project photo. */
export const photo = (slug: string, n = 1) => `/projects/${slug}/${String(n).padStart(2, "0")}.jpg`;

const gal = (slug: string, alts: string[]) => alts.map((alt, i) => ({ src: photo(slug, i + 1), alt }));

export const projects: Project[] = [
  {
    slug: "executive-headquarters",
    title: "Executive Headquarters",
    categories: ["Commercial", "Interior"],
    type: "Corporate Interior",
    services: ["Commercial Design", "Interior Design", "Construction Consulting"],
    thumbnail: photo("executive-headquarters", 1),
    hero: photo("executive-headquarters", 1),
    gallery: gal("executive-headquarters", [
      "Sculptural timber reception desk with brushed brass columns and backlit wall sculptures",
      "Client bar with stone-topped island, timber stair treads and floor-to-ceiling glazing",
      "Boardroom with textured stone-look wall cladding, built-in banquette and leather chairs",
    ]),
    summary: "A high-rise headquarters where warm timber, travertine and sculptural light create a calm, confident arrival for clients.",
    overview:
      "A full-floor corporate headquarters set high above the city, designed to welcome clients, host senior meetings and give the leadership team a workplace with real presence.",
    challenge:
      "Corporate floors are often glassy, cool and anonymous. The aim here was the opposite: a sense of warmth and permanence on an upper level dominated by glass and long sightlines.",
    approach:
      "We wrapped the floor in a continuous language of rich timber — a slatted ceiling, ribbed wall panelling and joinery — and set it against honed travertine floors that catch and soften the afternoon light.",
    solution:
      "Arrival is marked by a sculptural reception desk with rounded ends and brass columns, framed by a plaster wall of backlit relief sculptures. Beyond it, a stone-topped client bar opens to the view, and a boardroom lined in textured stone-look cladding offers a quieter, more private register.",
    materials: [
      { label: "Flooring", value: "Polished travertine, wool carpet in meeting areas" },
      { label: "Walls", value: "Ribbed timber panelling, textured plaster, stone-look cladding" },
      { label: "Ceilings", value: "Slatted timber with integrated linear lighting" },
      { label: "Joinery", value: "Curved walnut reception desk with brass columns" },
      { label: "Lighting", value: "Concealed backlighting to wall sculptures, discreet downlights" },
      { label: "Furniture", value: "Leather boardroom seating, built-in upholstered banquettes" },
    ],
    results:
      "The finished floor reads as one composed environment — warm in daylight, glowing at dusk — giving every client visit a considered, memorable first impression.",
    seoTitle: "Executive Headquarters | Corporate Interior Design — Alfred Pederson",
    seoDescription: "A high-rise corporate headquarters interior in timber, travertine and sculptural light by Alfred Pederson.",
  },
  {
    slug: "courtyard-house",
    title: "The Courtyard House",
    categories: ["Residential", "Architecture"],
    type: "Custom Residence",
    services: ["Architectural Design", "Residential Design", "Interior Design"],
    thumbnail: photo("courtyard-house", 1),
    hero: photo("courtyard-house", 1),
    gallery: gal("courtyard-house", [
      "Timber-clad pavilions with full-height glazing arranged around a planted garden courtyard",
    ]),
    summary: "A family home of timber pavilions arranged around a garden, so every room looks into greenery.",
    overview:
      "A custom residence conceived as a series of timber-lined pavilions linked around a central garden courtyard, bringing the landscape into the heart of daily life.",
    challenge:
      "The site's mature trees were its greatest asset. The design needed to protect them while giving every living space daylight, privacy and a direct connection to the garden.",
    approach:
      "Rather than one large volume, the house is broken into smaller pavilions that step around the trees. Full-height timber-framed glazing turns the courtyard into an outdoor room shared by kitchen, study and bedroom wings.",
    solution:
      "Vertical timber cladding inside and out gives the home a warm, unified character, while slender frames keep sightlines open across the courtyard. The result feels less like a house in a garden and more like a garden you live inside.",
    materials: [
      { label: "Cladding", value: "Vertical timber boards, natural finish" },
      { label: "Glazing", value: "Full-height timber-framed windows and doors" },
      { label: "Interiors", value: "Timber-lined walls and built-in joinery" },
      { label: "Landscape", value: "Retained mature trees, layered courtyard planting" },
      { label: "Structure", value: "Lightweight timber pavilions on a stepped base" },
      { label: "Roof", value: "Thin-profile flat roofs with deep fascias" },
    ],
    results:
      "Every main room now opens to the courtyard, filling the home with filtered light and seasonal color while keeping it private from the street.",
    seoTitle: "The Courtyard House | Residential Architecture — Alfred Pederson",
    seoDescription: "A timber courtyard residence of linked pavilions designed around a garden by Alfred Pederson.",
  },
  {
    slug: "glasshouse-loft",
    title: "The Glasshouse Loft",
    categories: ["Residential", "Renovation", "Interior"],
    type: "Residential Conversion",
    services: ["Renovation & Remodeling", "Interior Design"],
    thumbnail: photo("glasshouse-loft", 1),
    hero: photo("glasshouse-loft", 1),
    gallery: gal("glasshouse-loft", [
      "Double-height living space with steel-framed glass wall, wood stove, mezzanine bedroom and compact kitchen",
    ]),
    summary: "A compact conversion with a double-height glass wall, mezzanine bedroom and a wood stove at its heart.",
    overview:
      "The conversion of a compact building into a light-filled home, organized around a dramatic double-height living space that opens onto a glasshouse garden.",
    challenge:
      "With a small footprint, every square foot had to work hard — fitting kitchen, dining, living and sleeping without the space ever feeling cramped.",
    approach:
      "We went vertical: a mezzanine bedroom with a fine steel balustrade floats above a tight, efficient kitchen, leaving the main living area free to rise the full height of the building.",
    solution:
      "A full-height black steel-framed glass wall connects the room to the planted glasshouse beyond, while a freestanding wood stove anchors the space. Original timber floorboards, white subway tile and soft under-cabinet lighting keep the palette warm and honest.",
    materials: [
      { label: "Flooring", value: "Restored original timber floorboards" },
      { label: "Glazing", value: "Black steel-framed full-height glass wall" },
      { label: "Kitchen", value: "White flat-panel cabinetry, subway tile, brass tap" },
      { label: "Heating", value: "Freestanding wood-burning stove" },
      { label: "Mezzanine", value: "Timber deck with slender steel balustrade" },
      { label: "Lighting", value: "Large paper pendant, LED under-cabinet strip" },
    ],
    results:
      "A small building now lives like a much larger home: bright, layered and deeply connected to its garden through every season.",
    seoTitle: "The Glasshouse Loft | Residential Conversion — Alfred Pederson",
    seoDescription: "A compact residential conversion with a double-height glass wall and mezzanine by Alfred Pederson.",
  },
  {
    slug: "treehouse-early-learning",
    title: "Treehouse Early Learning",
    categories: ["Education", "Commercial", "Interior"],
    type: "Learning Environment",
    services: ["Commercial Design", "Interior Design", "Construction Consulting"],
    thumbnail: photo("treehouse-early-learning", 1),
    hero: photo("treehouse-early-learning", 1),
    gallery: gal("treehouse-early-learning", [
      "Library zone with a sculptural timber reading tree, curved book shelving and glazed courtyard wall",
      "Play room with child-scale timber furniture, home corner and framed views between rooms",
      "Classroom with a sculpted skylight, black-framed doors to the outdoor play area and soft color accents",
    ]),
    summary: "An early learning centre built around daylight, natural timber and a sculptural reading tree.",
    overview:
      "A purpose-designed early learning centre where every room is shaped around how young children explore, play and learn — from quiet reading nooks to open studios that spill outdoors.",
    challenge:
      "Learning spaces must be safe, durable and easy to supervise, yet still feel warm, inspiring and full of light rather than institutional.",
    approach:
      "We used a calm base of pale floors, white walls and birch-ply joinery, then introduced moments of delight — a sculptural timber tree for storytime, a skylight folded into the ceiling, and internal windows at child height.",
    solution:
      "Long walls of glazing open each room to landscaped play courtyards, while low curved shelving defines zones without blocking sightlines for educators. Child-scale furniture, soft rugs and gentle color accents make the spaces feel welcoming from the very first visit.",
    materials: [
      { label: "Flooring", value: "Resilient sheet flooring, soft area rugs" },
      { label: "Joinery", value: "Birch plywood storage, curved mobile shelving" },
      { label: "Feature", value: "Sculptural timber reading tree with canopy shelves" },
      { label: "Ceilings", value: "Timber-look acoustic panels, folded feature skylight" },
      { label: "Glazing", value: "Black-framed sliding doors to outdoor play" },
      { label: "Furniture", value: "Child-scale timber tables and chairs" },
    ],
    results:
      "Bright, flexible rooms that support play-based learning, give educators clear oversight and connect children with the outdoors throughout the day.",
    seoTitle: "Treehouse Early Learning | Education Interior Design — Alfred Pederson",
    seoDescription: "An early learning centre designed around daylight, timber and play by Alfred Pederson.",
  },
  {
    slug: "city-workplace",
    title: "The City Workplace",
    categories: ["Commercial", "Interior"],
    type: "Workplace Interior",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("city-workplace", 1),
    hero: photo("city-workplace", 1),
    gallery: gal("city-workplace", [
      "Workplace kitchen with a monolithic stone island, full-height cabinetry and glossy burgundy tile splashback",
      "Breakout zone with a curved burgundy banquette framing city and heritage dome views",
    ]),
    summary: "A city office reworked around a stone kitchen island and a breakout lounge framing the skyline.",
    overview:
      "The transformation of an inner-city office floor into a hospitable workplace, centered on a generous kitchen and breakout area where teams gather throughout the day.",
    challenge:
      "The existing floor had exposed services, a deep plan and an under-used corner with the best views in the building.",
    approach:
      "We embraced the raw ceiling, painting services in a soft neutral, and gave the floor a strong social heart: a monolithic stone island set against full-height cabinetry and a glossy burgundy splashback.",
    solution:
      "In the corner, a long curved banquette in deep burgundy wraps the windows, turning the view of the historic dome and surrounding towers into the backdrop for casual meetings and lunches.",
    materials: [
      { label: "Flooring", value: "Large-format stone-look porcelain tile" },
      { label: "Kitchen", value: "Veined natural stone island, matte full-height cabinetry" },
      { label: "Splashback", value: "Glossy burgundy vertical tile" },
      { label: "Seating", value: "Custom burgundy upholstered banquette" },
      { label: "Lighting", value: "Slim pendants and linear track lighting" },
      { label: "Ceiling", value: "Exposed services finished in soft neutral" },
    ],
    results:
      "A workplace people choose to come to: the kitchen and corner lounge are now the busiest, most sociable spaces on the floor.",
    seoTitle: "The City Workplace | Workplace Interior Design — Alfred Pederson",
    seoDescription: "An inner-city workplace interior with a stone kitchen island and skyline breakout lounge by Alfred Pederson.",
  },
  {
    slug: "canopy-apartment",
    title: "The Canopy Apartment",
    categories: ["Residential", "Interior"],
    type: "Apartment Interior",
    services: ["Interior Design", "Residential Design"],
    thumbnail: photo("canopy-apartment", 1),
    hero: photo("canopy-apartment", 1),
    gallery: gal("canopy-apartment", [
      "Covered balcony with timber batten ceiling, hardwood decking and outdoor dining among the treetops",
      "Living room with walnut sideboard, leather sling chair and full-height sliding doors",
    ]),
    summary: "An apartment that feels like a treehouse, with a timber-lined balcony set among the canopy.",
    overview:
      "An apartment interior that makes the most of its elevated outlook, extending daily life onto a generous covered balcony set among the treetops.",
    challenge:
      "The goal was an apartment that felt calm and grounded, with an outdoor room usable year-round rather than a balcony that stays empty.",
    approach:
      "We framed the balcony as a true room: a warm timber batten ceiling, hardwood decking and a dark backdrop that makes the green canopy glow. Inside, a restrained palette of white walls and natural timber lets furniture and plants carry the character.",
    solution:
      "Full-height timber-framed sliding doors dissolve the line between inside and out. A walnut sideboard, leather sling chair and sculptural side tables bring mid-century warmth to the living room.",
    materials: [
      { label: "Balcony", value: "Hardwood decking, timber batten ceiling" },
      { label: "Doors", value: "Full-height timber-framed sliding doors" },
      { label: "Walls", value: "Soft white with charcoal feature panels" },
      { label: "Furniture", value: "Walnut sideboard, leather sling chair, wool sofa" },
      { label: "Flooring", value: "Natural timber with wool rug" },
      { label: "Styling", value: "Indoor planting and framed photography" },
    ],
    results:
      "The balcony has become the apartment's favorite room for morning coffee and evening dinners, extending the home's living space into the trees.",
    seoTitle: "The Canopy Apartment | Apartment Interior Design — Alfred Pederson",
    seoDescription: "An apartment interior with a timber-lined treetop balcony by Alfred Pederson.",
  },
  {
    slug: "woven-pavilion",
    title: "The Woven Pavilion",
    categories: ["Architecture", "Commercial"],
    type: "Community Pavilion",
    services: ["Architectural Design", "Construction Consulting"],
    thumbnail: photo("woven-pavilion", 1),
    hero: photo("woven-pavilion", 1),
    gallery: gal("woven-pavilion", [
      "Curved woven timber lattice screen on red steel columns, casting patterned shade over a gathering space",
    ]),
    summary: "A gathering space beneath a curved woven-timber screen that turns harsh sun into dappled shade.",
    overview:
      "A community building and outdoor gathering space defined by a sweeping woven timber screen that wraps a shaded courtyard.",
    challenge:
      "The building needed to provide generous outdoor shade in a hot, bright climate while remaining open, welcoming and connected to the surrounding landscape.",
    approach:
      "We designed a curved timber lattice — inspired by traditional weaving — carried on slender red steel columns. It filters sunlight into a constantly shifting pattern of light and shadow.",
    solution:
      "Beneath the screen, built-in concrete seating curves around a central gathering space, while a glazed facade opens the interior to the courtyard. The structure reads as both shelter and landmark.",
    materials: [
      { label: "Screen", value: "Woven timber lattice in diagonal pattern" },
      { label: "Structure", value: "Slender steel columns in oxide red" },
      { label: "Seating", value: "Curved in-situ concrete benches" },
      { label: "Facade", value: "Full-height glazing, rendered masonry" },
      { label: "Ground", value: "Broom-finished concrete, lawn and native planting" },
      { label: "Beam", value: "Continuous curved timber ring beam" },
    ],
    results:
      "A cool, comfortable outdoor room in the hottest hours of the day, and a distinctive civic presence that has become a natural meeting point.",
    seoTitle: "The Woven Pavilion | Architectural Design — Alfred Pederson",
    seoDescription: "A community pavilion with a curved woven timber screen and shaded courtyard by Alfred Pederson.",
  },
  {
    slug: "color-studies-residence",
    title: "Color Studies Residence",
    categories: ["Residential", "Interior", "Renovation"],
    type: "Residential Interiors",
    services: ["Interior Design", "Renovation & Remodeling"],
    thumbnail: photo("color-studies-residence", 1),
    hero: photo("color-studies-residence", 1),
    gallery: gal("color-studies-residence", [
      "Dining room color-drenched in deep burgundy with arched garden windows and a marble console",
      "Living room in layered greens with brick fireplace, leather sofa and marble coffee table",
      "Sunken lounge with periwinkle wall, cream stacked tile, terrazzo floor and garden window seat",
    ]),
    summary: "A period home reimagined room by room through confident, color-drenched interiors.",
    overview:
      "A series of interior transformations for a characterful home, using bold, enveloping color to give each room its own mood while keeping the house coherent.",
    challenge:
      "The client wanted a home with personality — not a white box — without the result feeling chaotic or dated.",
    approach:
      "We used color-drenching: walls, trims and even ceilings painted in a single tone so each room feels immersive. Natural materials — timber, marble, brick and terrazzo — ground the strong palette.",
    solution:
      "A burgundy dining room frames three arched garden windows; a layered-green living room centres on the original brick fireplace; and a sunken lounge pairs periwinkle walls with cream stacked tile, terrazzo floors and a built-in window seat.",
    materials: [
      { label: "Paint", value: "Color-drenched walls, trims and ceilings" },
      { label: "Stone", value: "Rosso marble console, green marble coffee table" },
      { label: "Flooring", value: "Timber boards, terrazzo in the lounge" },
      { label: "Tile", value: "Cream stacked wall tile, terracotta step tile" },
      { label: "Feature", value: "Restored brick fireplace" },
      { label: "Joinery", value: "Fluted timber credenza, stone window seat" },
    ],
    results:
      "Each room now has a distinct, memorable character, and together they give the home a warmth and individuality that reflects the people who live there.",
    seoTitle: "Color Studies Residence | Residential Interiors — Alfred Pederson",
    seoDescription: "Color-drenched residential interiors — burgundy, green and periwinkle rooms — by Alfred Pederson.",
  },
  {
    slug: "bush-pavilion-house",
    title: "The Bush Pavilion",
    categories: ["Residential", "Architecture"],
    type: "Elevated Timber Residence",
    services: ["Architectural Design", "Residential Design", "Construction Consulting"],
    thumbnail: photo("bush-pavilion-house", 1),
    hero: photo("bush-pavilion-house", 1),
    gallery: gal("bush-pavilion-house", [
      "Elevated timber house with deep gabled roof, pole structure, wraparound veranda and grand timber stair",
    ]),
    summary: "A raised timber home with a deep sheltering roof and wraparound veranda in native bush.",
    overview:
      "A timber residence raised on poles within native bushland, designed to sit lightly on the land and offer generous outdoor living under one sheltering roof.",
    challenge:
      "A sloping, densely vegetated site called for minimal ground disturbance and a home that would feel part of its landscape.",
    approach:
      "We lifted the house on a timber pole structure, reducing excavation and protecting root systems, and drew a single deep gabled roof over both the interior and a wide wraparound veranda.",
    solution:
      "A broad timber stair rises from the garden to the veranda, which acts as the home's main outdoor room. Large picture windows frame the surrounding trees, and natural timber finishes let the house weather gracefully into its setting.",
    materials: [
      { label: "Structure", value: "Round timber poles and exposed beams" },
      { label: "Roof", value: "Deep gabled roof with generous overhangs" },
      { label: "Cladding", value: "Natural timber panel cladding" },
      { label: "Veranda", value: "Wraparound timber deck with vertical balustrade" },
      { label: "Stair", value: "Broad timber stair to the garden" },
      { label: "Landscape", value: "Native planting retained around the house" },
    ],
    results:
      "A home that feels sheltered yet open — shaded in summer, bright in winter — with the veranda drawing daily life outdoors among the trees.",
    seoTitle: "The Bush Pavilion | Timber Residence — Alfred Pederson",
    seoDescription: "An elevated timber residence with a wraparound veranda in native bushland by Alfred Pederson.",
  },
  {
    slug: "community-dining-hall",
    title: "The Community Dining Hall",
    categories: ["Commercial", "Interior"],
    type: "Hospitality Interior",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("community-dining-hall", 1),
    hero: photo("community-dining-hall", 1),
    gallery: gal("community-dining-hall", [
      "Dining hall with woven rattan pendants, timber batten ceiling, planted banquette and light oak furniture",
    ]),
    summary: "A bright communal dining room with woven pendants, timber battens and a planted central banquette.",
    overview:
      "A communal dining hall designed to feel more like a welcoming restaurant than an institutional canteen, where residents and guests enjoy gathering for every meal.",
    challenge:
      "Large dining rooms can feel noisy and impersonal. The space needed warmth, softer acoustics and a sense of intimacy at every table.",
    approach:
      "A timber batten ceiling with integrated linear lighting adds warmth and helps absorb sound, while clusters of woven rattan pendants bring the scale down to a human level.",
    solution:
      "A long central banquette topped with a planter of ornamental grasses divides the room into comfortable zones. Light oak chairs, stone-look tabletops and sheer full-height curtains complete a calm, light-filled atmosphere.",
    materials: [
      { label: "Ceiling", value: "Timber battens with integrated linear lighting" },
      { label: "Lighting", value: "Clustered woven rattan pendants" },
      { label: "Seating", value: "Upholstered banquette with integrated planter" },
      { label: "Furniture", value: "Light oak chairs, stone-look tabletops" },
      { label: "Flooring", value: "Pale oak-look flooring" },
      { label: "Windows", value: "Sheer full-height curtains" },
    ],
    results:
      "A dining room that feels relaxed and social at every hour, quieter than before and inviting enough to linger.",
    seoTitle: "The Community Dining Hall | Hospitality Interior — Alfred Pederson",
    seoDescription: "A communal dining hall interior with rattan pendants and timber ceiling by Alfred Pederson.",
  },
  {
    slug: "acoustic-lounge",
    title: "The Acoustic Lounge",
    categories: ["Commercial", "Interior"],
    type: "Acoustic Interior Design",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("acoustic-lounge", 1),
    hero: photo("acoustic-lounge", 1),
    gallery: gal("acoustic-lounge", [
      "Lounge with pale blue grid-pattern acoustic felt walls, open-cell ceiling and cobalt armchairs",
      "Blush acoustic wall panels with routed arch pattern, velvet armchair and side table",
    ]),
    summary: "Lounge interiors where acoustic wall systems double as bold, tactile surfaces.",
    overview:
      "A study in how acoustic treatment can become the defining design feature of a space, applied to lounge and waiting areas in a commercial setting.",
    challenge:
      "Hard modern interiors echo. Acoustic panels are often hidden or treated as an afterthought — here they had to perform and look exceptional.",
    approach:
      "We specified full-height acoustic felt wall systems with routed patterns — a soft grid in pale blue and an arched motif in warm blush — so the walls themselves become the artwork.",
    solution:
      "Paired with an open-cell ceiling, polished concrete floors and simple, sculptural lounge chairs, the panels create rooms that are visually striking and remarkably quiet.",
    materials: [
      { label: "Walls", value: "Routed acoustic felt panel systems" },
      { label: "Ceiling", value: "Open-cell acoustic baffle ceiling" },
      { label: "Flooring", value: "Polished concrete with low steps" },
      { label: "Furniture", value: "Upholstered lounge chairs with integrated side tables" },
      { label: "Rugs", value: "Round deep-pile wool rugs" },
      { label: "Palette", value: "Pale blue and cobalt; blush and chocolate" },
    ],
    results:
      "Calm, comfortable lounges where conversation carries clearly, proving that acoustic performance and strong design can be one and the same.",
    seoTitle: "The Acoustic Lounge | Acoustic Interior Design — Alfred Pederson",
    seoDescription: "Commercial lounge interiors featuring patterned acoustic felt wall systems by Alfred Pederson.",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Interior", "Architecture", "Education", "Renovation"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const relatedProjects = (p: Project, n = 3) =>
  projects.filter((x) => x.slug !== p.slug && x.categories.some((c) => p.categories.includes(c))).slice(0, n);

/** Every photo across the portfolio, for gallery bands. */
export const allPhotos = projects.flatMap((p) => p.gallery.map((g) => ({ ...g, project: p })));
