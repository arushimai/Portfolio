export interface Milestone {
  id: number;
  type: 'profile' | 'experience' | 'milestone';
  year: string;
  title: string;
  role: string;
  location: string;
  caption: string;
  gradient: string;
  accent: string;
  tags: string[];
  photoLabel: string;
  story: string;
}

export const milestones: Milestone[] = [
  {
    id: 0,
    type: 'profile',
    year: 'Profile',
    title: 'Arushi Maisuria',
    role: 'Marketing, Media & Storytelling',
    location: 'New Jersey / Penn State',
    caption: 'profile shot',
    gradient: 'linear-gradient(145deg, #fff3e8 0%, #f6b8a6 45%, #315c63 100%)',
    accent: '#f05f57',
    tags: ['Advertising PR', 'Digital Media', 'Analytics'],
    photoLabel: 'AM',
    story: 'A creative strategist building campaigns across social, digital production, audience insights, and brand storytelling.',
  },
  {
    id: 1,
    type: 'experience',
    year: '2022',
    title: 'The News Lab',
    role: 'Communications Intern',
    location: 'State College, PA',
    caption: 'first take',
    gradient: 'linear-gradient(145deg, #183a49 0%, #2e7180 52%, #f4c36a 100%)',
    accent: '#7bdff2',
    tags: ['Live Broadcast', 'AP Style', 'Field Reporting'],
    photoLabel: 'NEWS',
    story: 'Supported broadcast and newsroom workflows while sharpening AP style, field reporting, and fast-turnaround communication skills.',
  },
  {
    id: 2,
    type: 'milestone',
    year: '2022-2026',
    title: 'Penn State',
    role: 'Advertising & Public Relations',
    location: 'University Park, PA',
    caption: 'we are',
    gradient: 'linear-gradient(145deg, #0e255e 0%, #3167b1 52%, #b7d9ff 100%)',
    accent: '#b7d9ff',
    tags: ['Bellisario CoC', 'Digital Media Minor', 'May 2026'],
    photoLabel: 'PSU',
    story: 'Studying Advertising and Public Relations with a Digital Media Trends and Analytics minor at University Park.',
  },
  {
    id: 3,
    type: 'experience',
    year: '2022-2023',
    title: 'THON',
    role: 'Public Relations Chair',
    location: 'Penn State',
    caption: 'for the kids',
    gradient: 'linear-gradient(145deg, #16245c 0%, #3076b8 48%, #ffd166 100%)',
    accent: '#ffd166',
    tags: ["World's Largest", 'Student Philanthropy', 'Four Diamonds'],
    photoLabel: 'THON',
    story: 'Led public relations work for a student philanthropy audience, balancing emotional storytelling with clear event messaging.',
  },
  {
    id: 4,
    type: 'experience',
    year: '2023',
    title: 'TEDxPSU',
    role: 'Marketing Liaison',
    location: 'Penn State',
    caption: 'ideas worth spreading',
    gradient: 'linear-gradient(145deg, #4a1f2d 0%, #d8475f 48%, #ffd7ba 100%)',
    accent: '#ffb4a2',
    tags: ['Event Marketing', 'Brand Strategy', 'Digital Outreach'],
    photoLabel: 'TEDx',
    story: 'Built event marketing support around speaker stories, brand consistency, and digital outreach for the TEDxPSU team.',
  },
  {
    id: 5,
    type: 'experience',
    year: 'Summer 2024',
    title: 'Forbes',
    role: 'Digital Production Intern',
    location: 'Jersey City, NJ',
    caption: 'making headlines',
    gradient: 'linear-gradient(145deg, #101820 0%, #315c63 50%, #e8d7bd 100%)',
    accent: '#e8d7bd',
    tags: ['Multi-Channel', 'Paid Social', 'Newsletter'],
    photoLabel: 'FBS',
    story: 'Worked across digital production channels, paid social support, and newsletter workflows in a fast-moving media environment.',
  },
  {
    id: 6,
    type: 'experience',
    year: '2025',
    title: 'Student Prog. Assoc.',
    role: 'Marketing Liaison',
    location: 'Penn State',
    caption: 'sold out',
    gradient: 'linear-gradient(145deg, #22223b 0%, #7b2cbf 48%, #80ed99 100%)',
    accent: '#80ed99',
    tags: ['Event Promos', 'Artist Branding', 'Analytics'],
    photoLabel: 'SPA',
    story: 'Promoted student programming through artist-forward content, event campaigns, and performance-minded social strategy.',
  },
  {
    id: 7,
    type: 'milestone',
    year: '2025-Now',
    title: 'Orangetheory',
    role: 'Marketing Director',
    location: 'State College, PA',
    caption: 'all out always',
    gradient: 'linear-gradient(145deg, #3d1d14 0%, #ef6f3c 50%, #ffe66d 100%)',
    accent: '#ff9f1c',
    tags: ['GA4', 'Influencer Mgmt', 'Email Campaigns'],
    photoLabel: 'OTF',
    story: 'Directs local marketing across analytics, influencer management, email campaigns, and member-facing community growth.',
  },
];

export const skills: Record<string, string[]> = {
  Analytics: ['GA4 / Google Ads', 'Tableau', 'Basic SQL', 'KPI Measurement', 'A/B Testing', 'Campaign Measurement'],
  'Digital Marketing': ['SEO / SEM', 'Paid Media', 'Email Marketing', 'Conversion Optimization', 'Keyword Research', 'Audience Segmentation'],
  'Content & Creative': ['Adobe Suite', 'Copywriting', 'Consumer Psychology', 'Market Research', 'Competitive Analysis', 'Storytelling'],
  Platforms: ['Hootsuite', 'Mailchimp', 'Microsoft Suite', 'Social Dashboards', 'On-Camera / Broadcast'],
};

export const certifications = [
  { name: 'Google Analytics', issuer: 'Google', date: 'May 2025' },
  { name: 'Hootsuite Digital Analytics', issuer: 'Hootsuite', date: 'Dec 2025' },
  { name: 'Stukent Digital Marketing', issuer: 'Stukent', date: 'Dec 2025' },
  { name: 'IBM Digital Marketing', issuer: 'IBM', date: 'June 2025' },
  { name: 'Meta Social Media Trends', issuer: 'Meta', date: 'July 2025' },
  { name: 'PwC Data Analytics', issuer: 'PwC', date: 'Aug 2025' },
];

export function getPileRotation(index: number): number {
  return Math.sin(index * 2.3999) * 13;
}

export function getPileOffsetX(index: number): number {
  return Math.cos(index * 1.618) * 24;
}
