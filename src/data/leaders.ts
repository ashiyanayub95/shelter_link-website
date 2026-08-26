import leaderAvatar from '@assets/generated_images/leader_avatar.jpg';
import ceoDaud from '@assets/generated_images/ceo_daud.jpeg';

export interface Leader {
  name: string;
  title: string;
  image: string | null;
  initials: string;
  avatarClass: string;
  bio: string[];
  tags: string[];
}

export const leaders: Leader[] = [
  {
    name: 'Muhammad Daud',
    title: 'Chief Executive Officer',
    image: ceoDaud,
    initials: 'MD',
    avatarClass: 'bg-gradient-to-br from-primary to-secondary',
    bio: [
      "As Chief Executive Officer and a founding director of ShelterLink, Muhammad Daud sets the company's overall strategic direction — from land acquisition and regulatory compliance to long-term growth planning.",
      'A founding subscriber of the company, his leadership anchors ShelterLink’s commitment to transparent, community-first real estate development.',
    ],
    tags: ['Strategic Leadership', 'Corporate Governance', 'Business Development', 'Regulatory Compliance'],
  },
  {
    name: 'Hammad Ahmad Khan',
    title: 'Managing Director',
    image: leaderAvatar,
    initials: 'HK',
    avatarClass: 'bg-gradient-to-br from-secondary to-primary',
    bio: [
      'With over two decades of hands-on experience in the construction and infrastructure development sector, Hammad Ahmad Khan leads ShelterLink with a vision focused on practical, high-quality execution.',
      'His expertise spans comprehensive project management, from land acquisition and urban zoning to the final delivery of residential infrastructure. Under his guidance, ShelterLink has built a reputation for transparency, timely delivery, and community-centric planning.',
    ],
    tags: ['Construction Management', 'Infrastructure Development', 'Strategic Planning', 'Community Development'],
  },
];
