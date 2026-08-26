import sheikhAbadImg from '@assets/placeholders/sheikh-abad-township.png';
import safiAbadImg from '@assets/placeholders/safi-abad-scheme.png';
import pakhtoonSocietyImg from '@assets/placeholders/pakhtoon-society.png';

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
    slug: 'sheikh-abad-township',
    name: 'Sheikh Abad Township',
    status: 'completed',
    tagline: 'A fully occupied residential community with complete utilities and paved roads.',
    image: sheikhAbadImg,
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
    image: safiAbadImg,
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
    image: pakhtoonSocietyImg,
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
