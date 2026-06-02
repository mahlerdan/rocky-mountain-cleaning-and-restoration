import { Droplet, Flame, Wind, ShieldAlert, Sparkles, Paintbrush } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: any;
  features: string[];
}

export const SERVICES_DATA: Service[] = [
  {
    id: "water-damage",
    title: "Water Damage Restoration",
    shortDesc: "Complete water extraction, rapid structure drying, and full moisture remediation after floods or burst pipes.",
    longDesc: "When water strikes, every second counts. Our certified water mitigation technicians respond instantly to extract standing water, deploy high-volume air movers and dehumidifiers, and monitor moisture levels with advanced thermal imaging to prevent structural rot and deep-seated mold.",
    icon: Droplet,
    features: [
      "24/7 Rapid Emergency Response",
      "Thermal Imaging Moisture Detection",
      "Advanced Water Extraction & Dehumidification",
      "Structural Drying & Rot Prevention",
      "Direct Insurance Billing Assistance"
    ]
  },
  {
    id: "fire-damage",
    title: "Fire & Smoke Damage Restoration",
    shortDesc: "Soot removal, smoke odor elimination, and structural restoration to bring your property back to pre-loss condition.",
    longDesc: "Fire damage goes beyond visible burns; soot and corrosive smoke residues can permanently damage walls, metal, and glass within hours. We perform comprehensive cleaning, structural reinforcement, professional deodorization, and content cleaning to salvage your valued possessions.",
    icon: Flame,
    features: [
      "Soot & Ash Cleanup",
      "Deep Smoke Odor Neutralization",
      "Structural Cleaning & Board-Up",
      "HVAC Duct System Decontamination",
      "Personal Property Cleaning & Salvaging"
    ]
  },
  {
    id: "mold-remediation",
    title: "Mold Remediation",
    shortDesc: "Certified containment, safe removal, and air purification to eliminate mold and restore healthy indoor air quality.",
    longDesc: "Mold spores thrive in damp Idaho environments. Our certified mold remediation specialists identify the root moisture source, establish professional containment barriers, safely remove mold-infested materials, and sanitize the air using HEPA filtration systems to secure your health.",
    icon: ShieldAlert,
    features: [
      "Certified Mold Inspection & Testing",
      "Negative Air Pressure Containment",
      "Safe Infested Material Disposal",
      "HEPA Air Filtration & Purification",
      "Antimicrobial Sanitization & Prevention"
    ]
  },
  {
    id: "asbestos-removal",
    title: "Asbestos Removal",
    shortDesc: "Licensed and bonded asbestos testing, containment, and safe abatement for older residential and commercial properties.",
    longDesc: "Older buildings in Pocatello and Chubbuck often contain asbestos in floor tiles, siding, plaster, or pipe insulation. We provide state-licensed, fully bonded asbestos abatement services, strictly adhering to EPA and OSHA regulations to ensure a clean, toxic-free environment.",
    icon: Wind,
    features: [
      "State-Licensed Abatement Specialists",
      "Rigid Containment & Wet-Removal Methods",
      "Air Quality Testing & Verification",
      "Hazardous Material Safe Disposal",
      "Residential & Commercial Compliance"
    ]
  },
  {
    id: "carpet-cleaning",
    title: "Professional Carpet Cleaning",
    shortDesc: "White glove steam cleaning, deep soil extraction, and pet odor removal for carpets, rugs, and upholstery.",
    longDesc: "We give your carpets the ultimate white glove treatment. Utilizing heavy-duty truck-mounted steam extraction systems and advanced Rotovac rotary extraction technology, we deep-clean carpets down to the padding, removing allergens, stubborn stains, and tough odors.",
    icon: Sparkles,
    features: [
      "Rotovac 360i Deep Rotary Extraction",
      "Truck-Mounted Steam Cleaning",
      "Tough Stain & Pet Odor Removal",
      "Eco-Friendly, Family-Safe Solutions",
      "Upholstery & Fine Rug Care"
    ]
  },
  {
    id: "tile-duct-cleaning",
    title: "Tile, Grout & Air Duct Cleaning",
    shortDesc: "High-pressure tile restoration and comprehensive HVAC duct cleaning to refresh your entire home.",
    longDesc: "Keep your home's air pure and surfaces sparkling. Our specialized high-pressure tile and grout cleaning removes years of embedded grime, while our complete air duct and HVAC system cleaning removes dust, pet dander, and allergens circulating through your ventilation.",
    icon: Paintbrush,
    features: [
      "High-Pressure Grout Soil Extraction",
      "Tile Sealing & Protection",
      "Complete HVAC Duct System Vacuuming",
      "Allergen & Pet Dander Elimination",
      "Improved HVAC Efficiency & Airflow"
    ]
  }
];

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "When our basement flooded at 2 AM, Rocky Mountain responded immediately. They had extraction equipment running in no time and handled everything directly with our insurance. Truly professional and saved our home from severe mold.",
    author: "Sarah M.",
    location: "Pocatello Resident",
    rating: 5
  },
  {
    id: 2,
    quote: "They gave our carpets the absolute white glove treatment. Years of pet stains and heavy high-traffic wear disappeared. The Rotovac equipment they use is amazing, and the technicians were polite and extremely thorough.",
    author: "David K.",
    location: "Chubbuck Customer",
    rating: 5
  },
  {
    id: 3,
    quote: "We discovered mold behind our drywall during a bathroom remodel. The team came out, set up secure containment, and cleaned everything up safely. It is rare to find a contractor so transparent, certified, and clean.",
    author: "Linda J.",
    location: "Pocatello Homeowner",
    rating: 5
  },
  {
    id: 4,
    quote: "Outstanding commercial asbestos abatement service. They worked around our business hours to minimize downtime, followed every regulatory requirement perfectly, and provided full documentation for our records.",
    author: "Robert T.",
    location: "Local Business Owner",
    rating: 5
  }
];
