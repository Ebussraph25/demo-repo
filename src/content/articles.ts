import { img } from "@/lib/site";
import { photoIds as I } from "./projects";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readMinutes: number;
  hero: string;
  body: Block[];
  relatedProjectSlugs: string[];
}

export const articleCategories = ["Architecture", "Interior Design", "Renovation", "Home Improvement", "Design Inspiration", "Materials", "Construction Planning"];

export const articles: Article[] = [
  {
    slug: "things-to-consider-before-renovating-your-home",
    title: "10 Things to Consider Before Renovating Your Home",
    excerpt: "A clear-eyed checklist to help you plan scope, budget and expectations before the first wall comes down.",
    category: "Renovation",
    author: "Alfred Pederson",
    date: "2026-09-18",
    readMinutes: 7,
    hero: img(I.kitchenOak, 2000),
    relatedProjectSlugs: ["silver-lake-modern", "highland-park-kitchen"],
    body: [
      { type: "p", text: "A renovation is one of the most rewarding investments you can make in a home — and one of the easiest to underestimate. A little structured thinking at the start saves time, money and stress later." },
      { type: "h2", text: "Start with how you live" },
      { type: "p", text: "Before thinking about finishes, think about routines. Where does the day start? Where do things pile up? Which rooms go unused? The best renovations solve real problems first." },
      { type: "h2", text: "The ten essentials" },
      { type: "ul", items: [
        "Define your goals and must-haves versus nice-to-haves.",
        "Set a realistic budget — and hold 10–15% in contingency.",
        "Understand what is structural before planning to move walls.",
        "Check permit and HOA requirements early.",
        "Consider how long you plan to stay in the home.",
        "Plan where you will live or cook during construction.",
        "Prioritize the systems you cannot see: electrical, plumbing, insulation.",
        "Choose materials for durability as well as appearance.",
        "Agree on a clear schedule and decision timeline.",
        "Work with a team that communicates clearly and documents decisions.",
      ] },
      { type: "quote", text: "The most expensive change is the one made after construction has started." },
      { type: "h2", text: "Make decisions before the build" },
      { type: "p", text: "Late changes are the most common cause of overruns. Finalizing layouts, fixtures and materials during design keeps the build predictable." },
    ],
  },
  {
    slug: "how-to-plan-a-successful-home-remodel",
    title: "How to Plan a Successful Home Remodel",
    excerpt: "From first sketch to final walkthrough — the stages that keep a remodel on schedule and on budget.",
    category: "Construction Planning",
    author: "Alfred Pederson",
    date: "2026-08-27",
    readMinutes: 6,
    hero: img(I.livingWide, 2000),
    relatedProjectSlugs: ["silver-lake-modern"],
    body: [
      { type: "p", text: "Successful remodels share one trait: a plan that is decided before construction begins. Here is how we structure that plan with our clients." },
      { type: "h2", text: "1. Discovery and scope" },
      { type: "p", text: "Document what works, what doesn't and what you want the space to feel like. Clear scope is the foundation of an accurate budget." },
      { type: "h2", text: "2. Design and documentation" },
      { type: "p", text: "Layouts, elevations, lighting plans and a finish schedule turn ideas into instructions a contractor can price and build accurately." },
      { type: "h2", text: "3. Pricing and scheduling" },
      { type: "p", text: "With complete documents, bids become comparable. A schedule with clear milestones keeps everyone accountable." },
      { type: "h2", text: "4. Construction and review" },
      { type: "p", text: "Regular site visits and a structured punch list ensure the finished space matches the design intent." },
    ],
  },
  {
    slug: "interior-design-trends-worth-investing-in",
    title: "Interior Design Trends Worth Investing In",
    excerpt: "Which ideas have lasting value — and which are better left for accessories you can easily change.",
    category: "Interior Design",
    author: "Alfred Pederson",
    date: "2026-08-06",
    readMinutes: 5,
    hero: img(I.livingWarm, 2000),
    relatedProjectSlugs: ["laurel-terrace-apartment"],
    body: [
      { type: "p", text: "Trends come and go, but some reflect genuine shifts in how we live. Those are worth building in; the rest belong in pieces you can swap." },
      { type: "h2", text: "Worth the investment" },
      { type: "ul", items: ["Natural, honest materials such as oak, stone and lime plaster", "Layered, dimmable lighting", "Built-in storage that reduces visual clutter", "Flexible rooms that adapt to work and family life"] },
      { type: "h2", text: "Keep it changeable" },
      { type: "p", text: "Bold colors, statement patterns and of-the-moment shapes are best introduced through textiles, art and furniture rather than fixed surfaces." },
    ],
  },
  {
    slug: "how-lighting-changes-the-feel-of-a-room",
    title: "How Lighting Changes the Feel of a Room",
    excerpt: "Why lighting is the most underestimated element in interior design, and how to layer it properly.",
    category: "Interior Design",
    author: "Alfred Pederson",
    date: "2026-07-15",
    readMinutes: 5,
    hero: img(I.lampRoom, 2000),
    relatedProjectSlugs: ["ember-and-oak-restaurant", "laurel-terrace-apartment"],
    body: [
      { type: "p", text: "Two identical rooms can feel completely different under different light. Lighting shapes mood, highlights materials and determines how comfortable a space is to use." },
      { type: "h2", text: "Think in layers" },
      { type: "ul", items: ["Ambient light for overall illumination", "Task light where you read, cook or work", "Accent light to reveal texture, art and architecture", "Decorative light that adds character"] },
      { type: "h2", text: "Color temperature matters" },
      { type: "p", text: "Warm light (2700K) feels relaxed and residential; cooler light suits focused work. Dimmers let one room serve several moods." },
    ],
  },
  {
    slug: "choosing-the-right-materials-for-your-home",
    title: "Choosing the Right Materials for Your Home",
    excerpt: "How to balance beauty, durability, maintenance and cost when selecting finishes.",
    category: "Materials",
    author: "Alfred Pederson",
    date: "2026-06-24",
    readMinutes: 6,
    hero: img(I.bathStone, 2000),
    relatedProjectSlugs: ["brentwood-spa-bath", "canyon-ridge-residence"],
    body: [
      { type: "p", text: "Materials are what you touch every day. Choosing well means looking past the sample board to how a surface will perform over years of use." },
      { type: "h2", text: "Four questions for every material" },
      { type: "ul", items: ["How will it wear in this specific room?", "What maintenance does it require?", "How does it look in natural and artificial light?", "Does it work with the rest of the palette?"] },
      { type: "h2", text: "Invest where you touch" },
      { type: "p", text: "Countertops, flooring, door hardware and taps are used constantly — they are where quality is most noticeable." },
    ],
  },
  {
    slug: "open-concept-vs-traditional-floor-plans",
    title: "Open-Concept vs Traditional Floor Plans",
    excerpt: "The real trade-offs between open living and defined rooms — and the increasingly popular middle ground.",
    category: "Architecture",
    author: "Alfred Pederson",
    date: "2026-06-03",
    readMinutes: 5,
    hero: img(I.apartmentLiving, 2000),
    relatedProjectSlugs: ["silver-lake-modern", "highland-park-kitchen"],
    body: [
      { type: "p", text: "Open plans bring light and connection; defined rooms bring privacy and acoustic comfort. The right answer depends on how your household lives." },
      { type: "h2", text: "The case for open" },
      { type: "p", text: "Better daylight, easier entertaining and a stronger sense of space, especially in smaller homes." },
      { type: "h2", text: "The case for defined rooms" },
      { type: "p", text: "Quieter work and study, easier heating and cooling, and places to retreat." },
      { type: "h2", text: "The broken plan" },
      { type: "p", text: "Partial walls, level changes, pocket doors and joinery can zone an open space while keeping it connected — often the best of both." },
    ],
  },
  {
    slug: "how-to-budget-for-a-home-renovation",
    title: "How to Budget for a Home Renovation",
    excerpt: "A practical framework for setting, allocating and protecting your renovation budget.",
    category: "Home Improvement",
    author: "Alfred Pederson",
    date: "2026-05-13",
    readMinutes: 6,
    hero: img(I.kitchenIsland, 2000),
    relatedProjectSlugs: ["highland-park-kitchen", "brentwood-spa-bath"],
    body: [
      { type: "p", text: "A good budget isn't just a number — it is a plan for where money will make the biggest difference." },
      { type: "h2", text: "Build the budget in layers" },
      { type: "ul", items: ["Design and professional fees", "Construction and labor", "Materials, fixtures and finishes", "Furniture and styling", "Permits and inspections", "Contingency of 10–15%"] },
      { type: "h2", text: "Protect it" },
      { type: "p", text: "Finalize decisions before construction, get comparable bids from complete drawings and track changes in writing." },
    ],
  },
  {
    slug: "what-to-expect-when-working-with-an-interior-designer",
    title: "What to Expect When Working With an Interior Designer",
    excerpt: "How the process works, what you'll be asked to decide, and how to get the most from the collaboration.",
    category: "Design Inspiration",
    author: "Alfred Pederson",
    date: "2026-04-22",
    readMinutes: 5,
    hero: img(I.interiorCalm, 2000),
    relatedProjectSlugs: ["laurel-terrace-apartment"],
    body: [
      { type: "p", text: "Working with a designer should feel like a collaboration: you bring knowledge of how you live, we bring the expertise to turn that into a complete space." },
      { type: "h2", text: "What we'll ask of you" },
      { type: "ul", items: ["Honest input about routines and preferences", "Images of spaces you love (and dislike)", "A clear budget range", "Timely decisions at key milestones"] },
      { type: "h2", text: "What you can expect from us" },
      { type: "p", text: "Clear presentations, organized samples, transparent costs and regular updates from concept through installation." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
