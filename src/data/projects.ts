import arbakanImg from '@assets/generated_images/featured_project.jpg';
import sheikhAbadPlaceholder from '@assets/placeholders/sheikh-abad-township.svg';
import safiAbadPlaceholder from '@assets/placeholders/safi-abad-scheme.svg';
import pakhtoonSocietyPlaceholder from '@assets/placeholders/pakhtoon-society.svg';

export type ProjectStatus = 'ongoing' | 'completed';

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  image?: string;
  gradient?: string;
  location: string;
  stats: { label: string; value: string }[];
  description: string[];
  amenities: string[];
  value?: string;
  currentStatus?: string;
  isPlaceholderImage?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'arbakan-valley',
    name: 'Arbakan Valley',
    status: 'ongoing',
    tagline:
      'Our flagship development bringing premium town planning to affordable housing.',
    image: arbakanImg,
    location: 'Mardan, Pakistan',
    stats: [
      { label: 'Total Area', value: '15 Acres' },
      { label: 'Residential', value: '50+ Plots' },
      { label: 'Est. Completion', value: 'Q1 2027' },
      { label: 'Location', value: 'Mardan, KP' },
    ],
    description: [
      "Strategically located with direct access to major transit routes, Arbakan Valley offers a complete lifestyle with modern amenities for families seeking affordable, well-planned living.",
      "The scheme is being developed with full utility infrastructure, community spaces, and long-term livability in mind — reflecting ShelterLink's community-first approach to town planning.",
    ],
    amenities: [
      'Central Mosque & Primary School',
      'Water Supply & Underground Drainage',
      'Electrification & Community Park',
    ],
    value: 'PKR 60+ Million',
    currentStatus: 'Land Leveling & Zoning in Progress',
  },
  {
    slug: 'sheikh-abad-township',
    name: 'Sheikh Abad Township',
    status: 'completed',
    tagline: 'A fully occupied residential community with complete utilities and paved roads.',
    image: sheikhAbadPlaceholder,
    isPlaceholderImage: true,
    gradient: 'from-emerald-500 to-emerald-700',
    location: 'Peshawar, Pakistan',
    stats: [
      { label: 'Residential Plots', value: '30' },
      { label: 'Occupancy', value: '100%' },
      { label: 'Site Size', value: '8 Acres' },
      { label: 'Completion Time', value: '12 Months' },
    ],
    description: [
      'Sheikh Abad Township was delivered with complete utilities and paved road infrastructure, and has reached full occupancy — a testament to the quality and livability of the community ShelterLink built.',
    ],
    amenities: ['Complete Utilities', 'Paved Roads', '100% Occupancy'],
  },
  {
    slug: 'safi-abad-scheme',
    name: 'Safi Abad Scheme',
    status: 'completed',
    tagline: 'Over 45 plots delivered with a complete sewerage system and title handover.',
    image: safiAbadPlaceholder,
    isPlaceholderImage: true,
    gradient: 'from-blue-600 to-indigo-800',
    location: 'Peshawar, Pakistan',
    stats: [
      { label: 'Plots Delivered', value: '45+' },
      { label: 'Completion Time', value: '12 Months' },
    ],
    description: [
      'Safi Abad Scheme was completed with a full sewerage system, access roads, and formal title handover to residents — closing out the project with full legal transparency for every family.',
    ],
    amenities: ['Sewerage System', 'Access Roads', 'Title Handover'],
  },
  {
    slug: 'pakhtoon-society',
    name: 'Pakhtoon Society',
    status: 'completed',
    tagline: 'A 70-plot residential scheme built around a mosque, school, and community spaces.',
    image: pakhtoonSocietyPlaceholder,
    isPlaceholderImage: true,
    gradient: 'from-slate-700 to-slate-900',
    location: 'Peshawar, Pakistan',
    stats: [{ label: 'Residential Plots', value: '70' }],
    description: [
      'Pakhtoon Society was planned around community infrastructure from day one, including a central mosque and school, a shared water tank, and fully lit streets.',
    ],
    amenities: ['Mosque & School', 'Central Water Tank', 'Street Lighting'],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
