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
  {
    slug: "ridgeline-retreat",
    title: "Ridgeline Retreat",
    categories: ["Residential", "Architecture"],
    type: "Rural Residence",
    services: ["Architectural Design", "Residential Design", "Interior Design"],
    thumbnail: photo("ridgeline-retreat", 1),
    hero: photo("ridgeline-retreat", 2),
    gallery: gal("ridgeline-retreat", [
      "Gabled residence in board-formed concrete, dark timber and fieldstone on a ridgetop above the valley",
      "Pavilions with standing-seam roofs wrapped around a circular pool and native garden",
      "Living room with a full-height fieldstone chimney, steel-framed fireplace and raked timber ceiling",
    ]),
    summary: "A ridgetop home of gabled pavilions in concrete, stone and timber, built to frame the valley and the weather.",
    overview:
      "A family retreat on an exposed ridge, arranged as a cluster of gabled pavilions linked around a sheltered garden and a circular pool.",
    challenge:
      "The site offered sweeping views but also wind, strong sun and a steep fall. The house needed to feel open to the landscape yet protected and grounded.",
    approach:
      "We broke the program into separate pavilions with simple pitched roofs, so each could be oriented to its own view and shelter the outdoor spaces between them. Heavy materials — board-formed concrete and local fieldstone — anchor the buildings to the ground.",
    solution:
      "The living pavilion is centred on a full-height stone chimney rising through a raked timber ceiling, with glazing on both sides to the valley. Outside, the pool sits in the lee of the buildings, turning the courtyard into a calm, sunlit outdoor room.",
    materials: [
      { label: "Structure", value: "Board-formed concrete and fieldstone walls" },
      { label: "Roofing", value: "Standing-seam metal in a warm grey" },
      { label: "Cladding", value: "Stained vertical timber boards" },
      { label: "Ceilings", value: "Raked timber lining with concealed uplighting" },
      { label: "Hearth", value: "Fieldstone chimney with blackened steel surround" },
      { label: "Landscape", value: "Native planting, circular pool, stone terraces" },
    ],
    results:
      "A home that feels sheltered on the most exposed of sites — open to the view, warm in winter and built from materials that will weather gracefully.",
    seoTitle: "Ridgeline Retreat | Rural Residence Architecture — Alfred Pederson",
    seoDescription: "A ridgetop residence of gabled pavilions in concrete, fieldstone and timber with a circular pool, by Alfred Pederson.",
  },
  {
    slug: "gabled-wellness-house",
    title: "Gabled Wellness House",
    categories: ["Residential", "Architecture", "Interior"],
    type: "Residence & Private Spa",
    services: ["Architectural Design", "Residential Design", "Interior Design"],
    thumbnail: photo("gabled-wellness-house", 1),
    hero: photo("gabled-wellness-house", 2),
    gallery: gal("gabled-wellness-house", [
      "Twin black gabled forms with full-height glazing, louvred screens and a covered timber walkway at dusk",
      "Indoor pool hall under exposed timber portal frames, with a fully glazed gable framing the garden",
      "Private spa with timber-slatted sauna, tiled plunge pool and warm concealed lighting",
    ]),
    summary: "A contemporary twin-gable residence with an indoor pool hall and private spa at its heart.",
    overview:
      "A modern take on the barn form: two black gabled volumes housing the main living spaces and a dedicated wellness wing with indoor pool and sauna.",
    challenge:
      "The client wanted a year-round pool and spa that felt like part of the home, not a plant room — light-filled, quiet and connected to the garden.",
    approach:
      "The gable became the organising idea. Exposed timber portal frames march down the pool hall, ending in a fully glazed gable that pulls the landscape into the water's reflection.",
    solution:
      "Outside, crisp black cladding, louvred screens and a covered walkway give the house a strong, graphic silhouette. Inside, warm timber, pale tiles and indirect lighting make the spa feel calm and restorative at any hour.",
    materials: [
      { label: "Exterior", value: "Black standing-seam cladding, timber louvres" },
      { label: "Structure", value: "Exposed glulam timber portal frames" },
      { label: "Pool", value: "Mosaic-tiled lap pool with stone coping" },
      { label: "Spa", value: "Cedar-lined sauna, plunge pool, glass screens" },
      { label: "Glazing", value: "Full-height gable glazing with slim frames" },
      { label: "Lighting", value: "Concealed cove lighting and wall washers" },
    ],
    results:
      "A home where wellness is part of everyday life — the pool hall has become the family's favourite room, morning and evening.",
    seoTitle: "Gabled Wellness House | Residence with Indoor Pool — Alfred Pederson",
    seoDescription: "A twin-gable contemporary residence with an indoor pool hall and private sauna spa, designed by Alfred Pederson.",
  },
  {
    slug: "curve-house",
    title: "The Curve House",
    categories: ["Residential", "Architecture", "Interior"],
    type: "Contemporary Residence",
    services: ["Architectural Design", "Residential Design", "Interior Design"],
    thumbnail: photo("curve-house", 1),
    hero: photo("curve-house", 1),
    gallery: gal("curve-house", [
      "Two-storey residence with sweeping white curved slabs, full-height glazing and a wraparound balcony",
      "Double-height glazed entry hall with slim black frames opening to the garden",
      "Kitchen with a monolithic marble island, dark timber joinery and a long skylight",
    ]),
    summary: "A suburban home defined by flowing white slabs, full-height glass and a sculptural marble kitchen.",
    overview:
      "A two-storey family residence whose generous curved slabs and deep overhangs give it a sense of movement from every angle of the street.",
    challenge:
      "On a tight suburban lot, the brief asked for maximum daylight and indoor-outdoor living without sacrificing privacy or comfort in summer.",
    approach:
      "Rounded cantilevered slabs provide shade to the glazing below and wrap a broad first-floor balcony. A double-height glazed entry floods the centre of the plan with light.",
    solution:
      "Inside, the palette is restrained — white walls, dark timber and a monolithic marble island under a long skylight — so the architecture and garden views take the lead.",
    materials: [
      { label: "Facade", value: "White rendered curved slabs, black steel columns" },
      { label: "Glazing", value: "Full-height aluminium glazing, slim black frames" },
      { label: "Balcony", value: "Black steel balustrade with rounded corners" },
      { label: "Kitchen", value: "Book-matched marble island, dark timber joinery" },
      { label: "Flooring", value: "Large-format porcelain and engineered oak" },
      { label: "Lighting", value: "Linear skylight and suspended pendant" },
    ],
    results:
      "A bright, private home with a distinctive street presence — the curved slabs shade the interiors while giving the house its memorable identity.",
    seoTitle: "The Curve House | Contemporary Residence — Alfred Pederson",
    seoDescription: "A contemporary residence with curved white slabs, full-height glazing and a marble kitchen, designed by Alfred Pederson.",
  },
  {
    slug: "brick-gallery-house",
    title: "Brick Gallery House",
    categories: ["Residential", "Interior", "Renovation"],
    type: "Residential Interior",
    services: ["Interior Design", "Residential Renovation"],
    thumbnail: photo("brick-gallery-house", 1),
    hero: photo("brick-gallery-house", 1),
    gallery: gal("brick-gallery-house", [
      "Double-height brick living space with timber-lined ceiling, glass pendants, crazy-paved stone floor and curated art",
    ]),
    summary: "A home where raw brick, timber and stone create a warm backdrop for an art collection.",
    overview:
      "An interior designed around the owners' art and objects, with honest materials that age well and bring texture to every room.",
    challenge:
      "The owners wanted a home that felt like a gallery without being cold, with height and drama balanced by comfort.",
    approach:
      "We exposed and celebrated face brick, lined the high ceilings in timber and laid crazy-paved stone underfoot, so the house itself has depth and grain.",
    solution:
      "Clusters of hand-blown glass pendants drop through the double-height void, while soft, rounded furniture and walnut joinery keep the scale personal.",
    materials: [
      { label: "Walls", value: "Exposed face brick" },
      { label: "Ceilings", value: "Timber lining to double-height void" },
      { label: "Flooring", value: "Crazy-paved natural stone, polished concrete" },
      { label: "Joinery", value: "Walnut credenza and shelving" },
      { label: "Lighting", value: "Hand-blown glass pendant cluster" },
      { label: "Furniture", value: "Boucle lounge seating, leather lounge chair" },
    ],
    results: "A characterful, gallery-like home that still feels relaxed and lived-in.",
    seoTitle: "Brick Gallery House | Residential Interior Design — Alfred Pederson",
    seoDescription: "A residential interior in exposed brick, timber and stone designed around an art collection, by Alfred Pederson.",
  },
  {
    slug: "garden-timber-pavilion",
    title: "Garden Timber Pavilion",
    categories: ["Architecture", "Commercial"],
    type: "Timber Pavilion",
    services: ["Architectural Design", "Construction Consulting"],
    thumbnail: photo("garden-timber-pavilion", 1),
    hero: photo("garden-timber-pavilion", 1),
    gallery: gal("garden-timber-pavilion", [
      "Timber-clad pavilion with a deep framed opening, decked terrace and view to a mature tree canopy",
    ]),
    summary: "A small timber pavilion that frames the garden like a picture.",
    overview: "A compact pavilion for gatherings and quiet reflection, built entirely around a single framed view of mature trees.",
    challenge: "The building had to be modest in scale, sit lightly beside a historic wall and still feel generous inside.",
    approach: "We hollowed out the centre of the volume, creating a large framed opening that turns the decked floor into a covered terrace.",
    solution: "Fine vertical timber cladding wraps walls, soffit and doors in one continuous material, with stools and simple detailing keeping the focus on the view.",
    materials: [
      { label: "Cladding", value: "Fine vertical timber boards" },
      { label: "Deck", value: "Hardwood decking on a raised timber frame" },
      { label: "Glazing", value: "Timber-framed glass doors" },
      { label: "Soffit", value: "Timber-lined ceiling to the framed opening" },
    ],
    results: "A calm, adaptable space that feels both sheltered and completely open to the garden.",
    seoTitle: "Garden Timber Pavilion | Architecture — Alfred Pederson",
    seoDescription: "A timber-clad garden pavilion framing views of a mature tree canopy, by Alfred Pederson.",
  },
  {
    slug: "arc-early-learning",
    title: "Arc Early Learning Centre",
    categories: ["Education", "Interior"],
    type: "Early Learning Interior",
    services: ["Interior Design", "Commercial Design"],
    thumbnail: photo("arc-early-learning", 1),
    hero: photo("arc-early-learning", 1),
    gallery: gal("arc-early-learning", [
      "Playroom with a curved timber wall, porthole windows, arched play niches and child-scale timber furniture",
      "Bright learning room with curved walls, porthole window, sliding doors to a deck and long timber tables",
      "Reading nook carved into a curved white wall, with a porthole window and shape cut-outs below the bench",
    ]),
    summary: "Soft curves, round windows and natural timber create a calm, playful world at a child's scale.",
    overview:
      "An early learning centre interior designed around rounded forms, natural materials and spaces children can climb into, read in and explore.",
    challenge: "Learning spaces are often loud and over-stimulating. The brief asked for calm rooms that still spark curiosity and play.",
    approach:
      "We used a gentle palette of pale timber, warm white and sage, and shaped the walls into arcs, arches and porthole windows that frame views between rooms.",
    solution:
      "Built-in nooks, arched play kitchens and sculpted benches with shape cut-outs turn the architecture itself into a learning tool, while low shelving keeps materials within reach.",
    materials: [
      { label: "Walls", value: "Curved timber veneer and smooth plaster" },
      { label: "Windows", value: "Circular porthole windows between rooms" },
      { label: "Joinery", value: "Arched niches, wave-form open shelving" },
      { label: "Flooring", value: "Seamless soft-grey resilient flooring" },
      { label: "Furniture", value: "Child-scale solid timber tables and chairs" },
      { label: "Palette", value: "Pale oak, warm white, sage green" },
    ],
    results: "Calm, light-filled rooms that educators describe as easy to work in and children treat as their own.",
    seoTitle: "Arc Early Learning Centre | Education Interior Design — Alfred Pederson",
    seoDescription: "An early learning centre interior with curved walls, porthole windows and natural timber, by Alfred Pederson.",
  },
  {
    slug: "pink-column-workplace",
    title: "Pink Column Workplace",
    categories: ["Commercial", "Interior"],
    type: "Workplace Fit-Out",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("pink-column-workplace", 1),
    hero: photo("pink-column-workplace", 1),
    gallery: gal("pink-column-workplace", [
      "Open workplace with exposed services, magenta joinery wall, long communal table and indoor trees",
      "Glass-walled meeting room under an exposed ceiling, with a pink column and sculptural round lounge",
    ]),
    summary: "An industrial office lifted by bold pink accents, glass meeting rooms and indoor planting.",
    overview: "A workplace fit-out in a concrete-framed building, celebrating its raw structure while adding colour, greenery and flexibility.",
    challenge: "The team wanted energy and identity on a modest budget, without hiding the building's exposed ceilings and concrete floors.",
    approach: "We kept the structure and services exposed, then introduced a single confident colour — a rich pink — on columns, joinery and lighting.",
    solution:
      "Frameless glass meeting rooms keep light and sightlines open, a long communal table anchors the kitchen, and trees in large planters soften the industrial shell.",
    materials: [
      { label: "Ceiling", value: "Exposed services with linear pendant lighting" },
      { label: "Flooring", value: "Polished existing concrete" },
      { label: "Partitions", value: "Frameless glass with sheer curtains" },
      { label: "Feature", value: "Magenta lacquered joinery and columns" },
      { label: "Furniture", value: "Long communal tables, circular lounge" },
      { label: "Planting", value: "Indoor trees in oversized planters" },
    ],
    results: "A bright, characterful office that has become a key part of how the business attracts and retains talent.",
    seoTitle: "Pink Column Workplace | Office Fit-Out Design — Alfred Pederson",
    seoDescription: "An industrial workplace fit-out with exposed ceilings, glass meeting rooms and bold pink accents, by Alfred Pederson.",
  },
  {
    slug: "oak-studio",
    title: "Oak Studio",
    categories: ["Commercial", "Interior"],
    type: "Studio & Office Interior",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("oak-studio", 1),
    hero: photo("oak-studio", 1),
    gallery: gal("oak-studio", [
      "Studio office in pale oak with full-height shelving, paper lantern pendants and a shared worktable",
      "Long timber-framed glass corridor beside oak material samples and joinery details",
    ]),
    summary: "A serene studio office wrapped in pale oak, soft light and considered joinery.",
    overview: "A small design studio and office, conceived as a single calm, timber-lined room for focused work.",
    challenge: "The space needed to store a large library of samples and books while staying uncluttered and quiet.",
    approach: "Floor-to-ceiling oak shelving absorbs storage into the walls, while a full-height curtain divides the space softly when needed.",
    solution: "Paper lantern pendants float over a shared worktable, and glazed timber-framed corridors keep the wider office connected and full of daylight.",
    materials: [
      { label: "Joinery", value: "Pale oak full-height shelving" },
      { label: "Flooring", value: "Wide-board oak" },
      { label: "Lighting", value: "Paper lantern pendants, track lighting" },
      { label: "Partitions", value: "Timber-framed glazing, linen curtain" },
    ],
    results: "A workplace that feels more like a library than an office — quiet, organised and inspiring.",
    seoTitle: "Oak Studio | Office Interior Design — Alfred Pederson",
    seoDescription: "A pale oak studio office interior with full-height shelving and lantern lighting, by Alfred Pederson.",
  },
  {
    slug: "color-hotel",
    title: "The Color Hotel",
    categories: ["Commercial", "Interior"],
    type: "Boutique Hospitality",
    services: ["Commercial Design", "Interior Design"],
    thumbnail: photo("color-hotel", 1),
    hero: photo("color-hotel", 1),
    gallery: gal("color-hotel", [
      "Guest room with raw concrete walls, a yellow ceiling disc, open timber wardrobe and green carpet",
      "Lounge in orange and lime with tulip chairs, a colour-block artwork and sculptural green armchairs",
    ]),
    summary: "Boutique hospitality interiors where raw concrete meets joyful, saturated colour.",
    overview: "Guest rooms and lounges for a boutique hotel, built on a robust concrete shell and brought to life with colour.",
    challenge: "The operator wanted rooms that are durable and efficient to run, yet memorable enough to be shared and talked about.",
    approach: "We kept the hard finishes honest — exposed concrete and simple joinery — and used colour as the key design layer: a yellow ceiling disc, green carpet, orange and lime walls.",
    solution: "Open timber wardrobes and integrated lighting make rooms easy to use, while the lounge's tulip chairs and bold artwork set a playful tone from arrival.",
    materials: [
      { label: "Walls", value: "Exposed concrete, painted colour fields" },
      { label: "Ceilings", value: "Suspended yellow acoustic disc" },
      { label: "Joinery", value: "Open timber wardrobe with integrated lighting" },
      { label: "Flooring", value: "Green and teal wool carpet" },
      { label: "Furniture", value: "Tulip chairs, sculptural upholstered armchairs" },
    ],
    results: "Rooms with a strong, photogenic identity that are also practical and hard-wearing.",
    seoTitle: "The Color Hotel | Boutique Hospitality Interiors — Alfred Pederson",
    seoDescription: "Boutique hotel guest rooms and lounges in raw concrete and bold colour, by Alfred Pederson.",
  },
  {
    slug: "garden-courtyard-hotel",
    title: "Garden Courtyard Hotel",
    categories: ["Commercial", "Architecture"],
    type: "Hospitality Development (Design Visualization)",
    services: ["Architectural Design", "Commercial Design"],
    thumbnail: photo("garden-courtyard-hotel", 1),
    hero: photo("garden-courtyard-hotel", 1),
    gallery: gal("garden-courtyard-hotel", [
      "Low-rise hotel with arched gateway, cascading planting and courtyard garden behind a lawn and mature tree",
      "Ground-floor terrace with scalloped umbrellas, timber furniture, arched openings and lush planting",
    ]),
    summary: "A low-rise hotel of arches, terraces and cascading greenery arranged around a garden courtyard.",
    overview: "A design proposal for a boutique hotel and dining terrace, organised around an arched gateway that opens to a central courtyard.",
    challenge: "The project needed to bring hospitality to a residential street while respecting its scale and mature trees.",
    approach: "We kept the building low and broke it into two wings framing a central arch, with planters on every level to soften the facade.",
    solution: "Warm rendered walls, arched openings and cascading greenery create a relaxed, resort-like character, with the dining terrace spilling onto the garden.",
    materials: [
      { label: "Facade", value: "Warm-toned render with arched openings" },
      { label: "Landscape", value: "Cascading planters, courtyard garden" },
      { label: "Terrace", value: "Stone paving, timber furniture" },
      { label: "Shade", value: "Scalloped market umbrellas" },
    ],
    results: "A welcoming, garden-filled proposal that gives the street a new social heart.",
    seoTitle: "Garden Courtyard Hotel | Hospitality Architecture — Alfred Pederson",
    seoDescription: "A low-rise boutique hotel design with arched gateway, courtyard and cascading greenery, by Alfred Pederson.",
  },
  {
    slug: "lattice-tower",
    title: "The Lattice Tower",
    categories: ["Architecture", "Commercial"],
    type: "High-Rise Residential (Design Visualization)",
    services: ["Architectural Design", "Construction Consulting"],
    thumbnail: photo("lattice-tower", 1),
    hero: photo("lattice-tower", 2),
    gallery: gal("lattice-tower", [
      "Slender residential tower with a terracotta-toned diagrid exoskeleton rising above the street",
      "Diagrid tower with vertical gardens seen at dawn against the city skyline",
    ]),
    summary: "A slender tower wrapped in a terracotta diagrid, with gardens climbing its full height.",
    overview: "A design proposal for a high-rise residential tower whose structural lattice gives it a distinctive, sculptural identity on the skyline.",
    challenge: "On a narrow urban site, the tower needed to be efficient and stable while offering residents privacy, shade and greenery.",
    approach: "We expressed the structure as an external diagrid, which braces the tower, shades the glass and creates deep ledges for planting.",
    solution: "The lattice splays at the base to form a sheltered, tree-lined entry and is crowned by a planted rooftop, linking street and sky.",
    materials: [
      { label: "Structure", value: "Expressed terracotta-toned diagrid" },
      { label: "Facade", value: "High-performance glazing behind the lattice" },
      { label: "Landscape", value: "Vertical gardens and planted crown" },
      { label: "Podium", value: "Splayed base with tree-lined entry" },
    ],
    results: "A landmark proposal that pairs structural clarity with a softer, greener vision for high-rise living.",
    seoTitle: "The Lattice Tower | High-Rise Architecture — Alfred Pederson",
    seoDescription: "A slender residential tower design with a terracotta diagrid and vertical gardens, by Alfred Pederson.",
  },
  {
    slug: "skyline-residences",
    title: "Skyline Residences",
    categories: ["Architecture", "Residential"],
    type: "High-Rise Residential",
    services: ["Architectural Design", "Residential Design", "Construction Consulting"],
    thumbnail: photo("skyline-residences", 1),
    hero: photo("skyline-residences", 1),
    gallery: gal("skyline-residences", [
      "Bronze-framed glass tower glowing in late sun between neighbouring high-rises",
      "Amenity terrace high on the tower with striped loungers, planters and patterned tables",
      "Residential towers with deep balconies and stepping white slab edges against the sky",
    ]),
    summary: "High-rise residences with refined bronze-toned facades and generous shared terraces in the sky.",
    overview: "A study in high-rise living: slender towers with carefully proportioned facades, deep balconies and amenity terraces for residents.",
    challenge: "Dense city sites can produce anonymous towers. The goal was elegance on the skyline and real outdoor space for residents.",
    approach: "We refined the facade grid with bronze-toned framing that catches the low sun, and carved out terraces and balconies for outdoor living.",
    solution: "Elevated amenity terraces with planting, loungers and patterned furniture give residents a garden high above the street.",
    materials: [
      { label: "Facade", value: "Bronze-toned aluminium framing, glass curtain wall" },
      { label: "Balconies", value: "Deep slab-edge balconies with glass balustrades" },
      { label: "Terrace", value: "Stone paving, planters, outdoor loungers" },
    ],
    results: "Towers that read as calm, crafted presences on the skyline, with outdoor space residents genuinely use.",
    seoTitle: "Skyline Residences | High-Rise Residential Architecture — Alfred Pederson",
    seoDescription: "High-rise residential towers with bronze-toned facades and elevated amenity terraces, by Alfred Pederson.",
  },
  {
    slug: "riverside-precinct",
    title: "Riverside Precinct",
    categories: ["Architecture", "Commercial"],
    type: "Masterplan & Mixed-Use (Design Visualization)",
    services: ["Architectural Design", "Commercial Design", "Construction Consulting"],
    thumbnail: photo("riverside-precinct", 1),
    hero: photo("riverside-precinct", 1),
    gallery: gal("riverside-precinct", [
      "Aerial view of a riverside masterplan with green-wrapped towers, a central park and pedestrian streets",
      "Mixed-use buildings with balconies and street-level retail around a tree-lined public plaza",
    ]),
    summary: "A riverside masterplan of towers, parks and active streets, designed for walkable city living.",
    overview: "A design proposal for a mixed-use riverside precinct combining homes, workplaces, retail and generous public space.",
    challenge: "The site needed to deliver significant density while creating a welcoming neighbourhood with strong links to the river.",
    approach: "We arranged the towers around a central green spine and set active, tree-lined streets at ground level to prioritise pedestrians.",
    solution: "Buildings are wrapped in planting and balconies, plazas host retail and dining, and a park connects the precinct directly to the waterfront.",
    materials: [
      { label: "Public realm", value: "Tree-lined streets, plazas and a central park" },
      { label: "Facades", value: "Planted balconies and terraces" },
      { label: "Ground plane", value: "Retail, dining and community uses" },
    ],
    results: "A vision for a green, walkable riverside neighbourhood that balances density with liveability.",
    seoTitle: "Riverside Precinct | Masterplanning & Mixed-Use Design — Alfred Pederson",
    seoDescription: "A riverside mixed-use masterplan with green towers, parks and active streets, by Alfred Pederson.",
  },
  {
    slug: "health-campus",
    title: "Regional Health Campus",
    categories: ["Architecture", "Commercial"],
    type: "Healthcare Architecture (Design Visualization)",
    services: ["Architectural Design", "Construction Consulting"],
    thumbnail: photo("health-campus", 1),
    hero: photo("health-campus", 1),
    gallery: gal("health-campus", [
      "Healthcare building with a vertical fin facade, landscaped forecourt and rooftop helipad",
    ]),
    summary: "A healthcare building designed around daylight, landscape and clear, calm wayfinding.",
    overview: "A design proposal for a healthcare facility expansion with a landscaped arrival, clear entries and rooftop helicopter access.",
    challenge: "Healthcare buildings must work intensely hard while still feeling reassuring and human for patients and families.",
    approach: "We used a rhythm of vertical fins to shade the facade and give it a calm, ordered character, set within generous planting.",
    solution: "A landscaped forecourt creates a gentle arrival, while internal planning prioritises daylight and simple navigation.",
    materials: [
      { label: "Facade", value: "Vertical sun-shading fins, glazed curtain wall" },
      { label: "Landscape", value: "Planted forecourt and lawns" },
      { label: "Roof", value: "Helipad and plant enclosures" },
    ],
    results: "A proposal for a healthcare environment that feels welcoming as well as highly functional.",
    seoTitle: "Regional Health Campus | Healthcare Architecture — Alfred Pederson",
    seoDescription: "A healthcare facility design with shaded fin facade and landscaped forecourt, by Alfred Pederson.",
  },
  {
    slug: "laneway-workshop",
    title: "Laneway Workshop",
    categories: ["Commercial", "Renovation"],
    type: "Light Industrial Conversion",
    services: ["Commercial Design", "Construction Consulting"],
    thumbnail: photo("laneway-workshop", 1),
    hero: photo("laneway-workshop", 1),
    gallery: gal("laneway-workshop", [
      "Concrete workshop unit with full-height pivot doors, timber shelving, brick paving and climbing plants",
    ]),
    summary: "A small light-industrial unit reimagined as a refined workshop and storage studio.",
    overview: "The conversion of a laneway warehouse unit into a functional, attractive workshop and storage space.",
    challenge: "Industrial units are rarely designed for people. This one needed to be practical but pleasant to work in every day.",
    approach: "We opened the frontage with full-height pivot doors and lined the interior with modular timber shelving and good lighting.",
    solution: "Brick paving, climbing plants and off-form concrete give the laneway entry a crafted, welcoming character.",
    materials: [
      { label: "Structure", value: "Off-form concrete" },
      { label: "Doors", value: "Full-height steel-framed pivot doors" },
      { label: "Fit-out", value: "Modular timber shelving, polished concrete floor" },
      { label: "Landscape", value: "Brick paving and climbing planting" },
    ],
    results: "An efficient, well-lit workspace with a frontage that adds to the laneway rather than turning its back on it.",
    seoTitle: "Laneway Workshop | Commercial Conversion — Alfred Pederson",
    seoDescription: "A laneway warehouse unit converted into a refined workshop and storage studio, by Alfred Pederson.",
  },
  {
    slug: "rooftop-solar-retrofit",
    title: "Rooftop Solar Retrofit",
    categories: ["Commercial", "Renovation"],
    type: "Construction Consulting",
    services: ["Construction Consulting"],
    thumbnail: photo("rooftop-solar-retrofit", 1),
    hero: photo("rooftop-solar-retrofit", 1),
    gallery: gal("rooftop-solar-retrofit", [
      "Installation crew fitting solar mounting rails across a large city rooftop",
    ]),
    summary: "Construction consulting for a large-scale rooftop solar installation on an existing city building.",
    overview: "Technical and site coordination for a rooftop solar retrofit on a large commercial roof in a dense urban setting.",
    challenge: "Retrofitting an occupied building means working safely at height, protecting the existing roof and keeping the building running.",
    approach: "We coordinated structural checks, staging and safety planning so the mounting system could be installed in efficient, well-sequenced zones.",
    solution: "A clear installation sequence, regular site reviews and close liaison with the installer kept the work safe, tidy and on schedule.",
    materials: [
      { label: "System", value: "Rail-mounted rooftop photovoltaic array" },
      { label: "Roof", value: "Existing metal roof, protected throughout" },
      { label: "Services", value: "Structural review, staging, site coordination" },
    ],
    results: "A smooth retrofit that adds clean energy generation with minimal disruption to the building's occupants.",
    seoTitle: "Rooftop Solar Retrofit | Construction Consulting — Alfred Pederson",
    seoDescription: "Construction consulting for a large commercial rooftop solar installation, by Alfred Pederson.",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Interior", "Architecture", "Education", "Renovation"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const relatedProjects = (p: Project, n = 3) =>
  projects.filter((x) => x.slug !== p.slug && x.categories.some((c) => p.categories.includes(c))).slice(0, n);

/** Every photo across the portfolio, for gallery bands. */
export const allPhotos = projects.flatMap((p) => p.gallery.map((g) => ({ ...g, project: p })));
