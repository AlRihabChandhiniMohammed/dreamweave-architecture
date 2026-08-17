/**
 * SINGLE SOURCE OF CONTENT — replace placeholders here to rebrand the site.
 * Everything wrapped in [SQUARE BRACKETS] is a placeholder awaiting real data.
 */

import svcConstruction from "@/assets/svc-construction.jpg";
import svcArchitecture from "@/assets/svc-architecture.jpg";
import svcStructural from "@/assets/svc-structural.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import svcElectrical from "@/assets/svc-electrical.jpg";
import svcPlumbing from "@/assets/svc-plumbing.jpg";
import svcMasonry from "@/assets/svc-masonry.jpg";
import svcDoors from "@/assets/svc-doors.jpg";
import svcPainting from "@/assets/svc-painting.jpg";
import svcLandscaping from "@/assets/svc-landscaping.jpg";
import svcApprovals from "@/assets/svc-approvals.jpg";
import svcTurnkey from "@/assets/svc-turnkey.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import proj5 from "@/assets/proj-5.jpg";
import proj6 from "@/assets/proj-6.jpg";
import matConcrete from "@/assets/mat-concrete.jpg";
import matWood from "@/assets/mat-wood.jpg";
import matTiles from "@/assets/mat-tiles.jpg";
import matGlass from "@/assets/mat-glass.jpg";
import matLighting from "@/assets/mat-lighting.jpg";
import matFixtures from "@/assets/mat-fixtures.jpg";

/** Replace with the real company name / contact details. */
export const company = {
  name: "[COMPANY NAME]",
  shortName: "[COMPANY NAME]",
  tagline: "Design • Engineering • Construction • Interiors • Turnkey Solutions",
  phoneDisplay: "[+91 XXXXX XXXXX]",
  /** Set to a real number (digits only, with country code) to activate call/WhatsApp links. */
  phoneRaw: "",
  email: "[hello@company.com]",
  location: "[Office Address, City, State]",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

export const stats = [
  { value: "XX+", label: "Years Experience" },
  { value: "XX+", label: "Projects Delivered" },
  { value: "XX+", label: "Sq. Ft. Built" },
  { value: "End-to-End", label: "Execution" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "House Construction",
    description: "Complete residential construction from foundation to final handover.",
    image: svcConstruction,
  },
  {
    number: "02",
    title: "Architectural Design",
    description: "Thoughtful architectural planning, floor plans, elevations and 3D concepts.",
    image: svcArchitecture,
  },
  {
    number: "03",
    title: "Structural Engineering",
    description: "Safe, durable and efficient structural planning and engineering.",
    image: svcStructural,
  },
  {
    number: "04",
    title: "Interior Design",
    description: "Beautiful, functional interiors designed around your lifestyle.",
    image: svcInterior,
  },
  {
    number: "05",
    title: "Electrical Work",
    description: "Complete electrical planning, wiring, lighting and electrical installations.",
    image: svcElectrical,
  },
  {
    number: "06",
    title: "Plumbing",
    description: "Professional plumbing systems, sanitary installations and water management.",
    image: svcPlumbing,
  },
  {
    number: "07",
    title: "Civil & Masonry Work",
    description: "Foundation, concrete, brickwork, plastering and complete civil execution.",
    image: svcMasonry,
  },
  {
    number: "08",
    title: "Doors & Windows",
    description: "Premium doors, windows, frames, glazing and installation.",
    image: svcDoors,
  },
  {
    number: "09",
    title: "Painting & Finishing",
    description: "Interior and exterior painting, textures and finishing details.",
    image: svcPainting,
  },
  {
    number: "10",
    title: "Landscaping",
    description: "Outdoor spaces, gardens, pathways and landscape design.",
    image: svcLandscaping,
  },
  {
    number: "11",
    title: "Approvals & Documentation",
    description: "Assistance with plans, permissions, approvals and required documentation.",
    image: svcApprovals,
  },
  {
    number: "12",
    title: "Complete Turnkey Construction",
    description: "One team managing the entire journey from concept to key handover.",
    image: svcTurnkey,
  },
];

export const turnkeyJourney = [
  "Concept",
  "Architecture",
  "Structural Design",
  "Approvals",
  "Construction",
  "Electrical & Plumbing",
  "Interiors",
  "Painting & Finishing",
  "Landscaping",
  "Final Handover",
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your requirements, lifestyle, budget and vision.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description: "Evaluate the site, surroundings, orientation and feasibility.",
  },
  {
    number: "03",
    title: "Architectural Planning",
    description: "Develop layouts, elevations and design concepts.",
  },
  {
    number: "04",
    title: "Structural Engineering",
    description: "Create safe and optimized structural plans.",
  },
  {
    number: "05",
    title: "Approvals & Documentation",
    description: "Handle necessary permissions and documentation.",
  },
  {
    number: "06",
    title: "Construction",
    description: "Execute civil, structural, electrical and plumbing works.",
  },
  {
    number: "07",
    title: "Interiors & Finishing",
    description: "Complete interiors, painting, fixtures and finishing.",
  },
  {
    number: "08",
    title: "Final Inspection",
    description: "Quality checks and final corrections.",
  },
  {
    number: "09",
    title: "Handover",
    description: "Deliver your completed dream home.",
  },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  type: string;
  area: string;
  architecture: string;
  construction: string;
  interior: string;
  description: string;
  image: string;
  gallery: string[];
  span: string;
};

/** Placeholder project data — replace names, locations and areas with real records. */
export const projectCategories = [
  "All",
  "Luxury Villas",
  "Independent Houses",
  "Modern Homes",
  "Interiors",
  "Renovations",
  "Landscapes",
];

export const projects: Project[] = [
  {
    id: "p1",
    name: "[Project Name 01]",
    category: "Luxury Villas",
    location: "[Location]",
    type: "Luxury Villa",
    area: "[XXXX sq. ft.]",
    architecture: "In-house architectural design",
    construction: "Complete civil & structural execution",
    interior: "Full interior package",
    description:
      "A placeholder description of a contemporary villa developed end to end — architecture, structure, services, interiors and landscape delivered by a single coordinated team.",
    image: proj1,
    gallery: [proj1, proj4, proj6],
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    id: "p2",
    name: "[Project Name 02]",
    category: "Independent Houses",
    location: "[Location]",
    type: "Independent House",
    area: "[XXXX sq. ft.]",
    architecture: "Floor plans, elevations and 3D concepts",
    construction: "Foundation to finishing",
    interior: "Selected interior scope",
    description:
      "Placeholder description for an independent residence planned around family living, natural light and ventilation.",
    image: proj2,
    gallery: [proj2, proj5, proj4],
    span: "lg:col-span-5",
  },
  {
    id: "p3",
    name: "[Project Name 03]",
    category: "Modern Homes",
    location: "[Location]",
    type: "Modern Home",
    area: "[XXXX sq. ft.]",
    architecture: "Contemporary tropical design language",
    construction: "Turnkey execution",
    interior: "Interiors and finishes",
    description:
      "Placeholder description for a modern home with courtyards, textured masonry screens and layered outdoor spaces.",
    image: proj3,
    gallery: [proj3, proj6, proj1],
    span: "lg:col-span-5",
  },
  {
    id: "p4",
    name: "[Project Name 04]",
    category: "Interiors",
    location: "[Location]",
    type: "Interior Project",
    area: "[XXXX sq. ft.]",
    architecture: "Interior spatial planning",
    construction: "Site coordination and civil works",
    interior: "Complete interior design and execution",
    description:
      "Placeholder description for an interior project focused on material honesty, joinery detail and calm lighting.",
    image: proj4,
    gallery: [proj4, proj6, proj2],
    span: "lg:col-span-6",
  },
  {
    id: "p5",
    name: "[Project Name 05]",
    category: "Renovations",
    location: "[Location]",
    type: "Renovation",
    area: "[XXXX sq. ft.]",
    architecture: "Adaptive redesign of an existing structure",
    construction: "Structural strengthening and rebuild",
    interior: "Refreshed interiors",
    description:
      "Placeholder description for a renovation that reworked circulation, openings and finishes while retaining the existing structure.",
    image: proj5,
    gallery: [proj5, proj3, proj1],
    span: "lg:col-span-6",
  },
  {
    id: "p6",
    name: "[Project Name 06]",
    category: "Landscapes",
    location: "[Location]",
    type: "Landscape",
    area: "[XXXX sq. ft.]",
    architecture: "Landscape master plan",
    construction: "Hardscape, drainage and lighting",
    interior: "Outdoor furnishing coordination",
    description:
      "Placeholder description for a landscape package including pathways, planting, water features and exterior lighting.",
    image: proj6,
    gallery: [proj6, proj3, proj5],
    span: "lg:col-span-12",
  },
];

export const materials = [
  { title: "Concrete", note: "Mix, curing and finish control", image: matConcrete },
  { title: "Steel", note: "Reinforcement as per structural design", image: matGlass },
  { title: "Brickwork", note: "Line, level and joint consistency", image: matConcrete },
  { title: "Flooring & Tiles", note: "Large format laying with tight joints", image: matTiles },
  { title: "Wood", note: "Seasoned joinery and veneers", image: matWood },
  { title: "Glass", note: "Glazing, gaskets and thermal detailing", image: matGlass },
  { title: "Lighting", note: "Layered ambient and task lighting", image: matLighting },
  { title: "Fixtures & Finishes", note: "Sanitaryware, hardware and final coats", image: matFixtures },
];

export const whyUs = [
  { title: "End-to-End Expertise", description: "Everything managed under one roof." },
  { title: "Transparent Process", description: "Clear communication throughout the project." },
  { title: "Design + Engineering", description: "Architecture and structural engineering work together." },
  { title: "Quality Execution", description: "Attention to materials, workmanship and finishing." },
  { title: "Dedicated Project Management", description: "A coordinated team managing every stage." },
  { title: "Complete Handover", description: "From empty site to finished home." },
];

/** PLACEHOLDER TESTIMONIALS — replace with real, approved client quotes. */
export const testimonials = [
  {
    name: "[Client Name]",
    projectType: "New House",
    location: "[Location]",
    quote:
      "[Placeholder testimonial. Replace this with an approved client quote about the design, execution and handover experience.]",
  },
  {
    name: "[Client Name]",
    projectType: "Villa",
    location: "[Location]",
    quote:
      "[Placeholder testimonial. Replace this with an approved client quote about project management and communication.]",
  },
  {
    name: "[Client Name]",
    projectType: "Interior",
    location: "[Location]",
    quote:
      "[Placeholder testimonial. Replace this with an approved client quote about interiors and finishing quality.]",
  },
];

export const faqs = [
  {
    q: "How does the construction process work?",
    a: "We begin with a consultation and site assessment, then move through architectural planning, structural engineering, approvals, construction, services, interiors, finishing, inspection and handover — each stage coordinated by one project team.",
  },
  {
    q: "Do you provide architectural design?",
    a: "Yes. Floor plans, elevations, 3D concepts and detailed drawings are prepared in-house and developed with you before execution begins.",
  },
  {
    q: "Do you handle structural engineering?",
    a: "Yes. Structural planning and detailing are prepared alongside the architectural design so the two stay aligned throughout construction.",
  },
  {
    q: "Do you manage government approvals?",
    a: "We assist with plan preparation, permissions and the documentation typically required for residential construction. Requirements vary by location and authority.",
  },
  {
    q: "Do you provide interior design?",
    a: "Yes. Interiors can be taken up as part of a turnkey scope or as a standalone package, including joinery, finishes, lighting and furnishing coordination.",
  },
  {
    q: "Do you provide complete turnkey construction?",
    a: "Yes. Turnkey means one team, one point of responsibility — design, engineering, construction, services, interiors, finishing and landscaping through to key handover.",
  },
  {
    q: "How do you estimate construction costs?",
    a: "Estimates are prepared from your plot details, built-up area, design intent and specification level, then refined into a detailed scope and cost sheet before work begins.",
  },
  {
    q: "How long does a house typically take to build?",
    a: "Timelines depend on area, design complexity, approvals and specification. A schedule with stage-wise milestones is shared before construction starts.",
  },
  {
    q: "Can I choose my own materials?",
    a: "Yes. You can select finishes and fittings within the agreed specification, and we advise on durability, maintenance and cost implications.",
  },
  {
    q: "Do you provide project management?",
    a: "Every project is run by a dedicated project manager who coordinates design, site execution, vendors and quality checks.",
  },
  {
    q: "Do you construct outside the city?",
    a: "Projects outside the immediate city are considered based on site location, access and logistics. Share your site details and we will confirm.",
  },
  {
    q: "How can I start my project?",
    a: "Share your plot details and requirements through the consultation form below and our team will get in touch to plan the next step.",
  },
];

export const projectTypeOptions = [
  "New House",
  "Villa",
  "Renovation",
  "Interior",
  "Commercial",
  "Other",
];

export const serviceOptions = services.map((s) => s.title);
