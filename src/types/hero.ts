import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export interface HeroProps {
  name: string;
  roles: string[];
  description: string;
  socialLinks: SocialLink[];
  resumeUrl: string;
  profileImage?: string;
  fallbackImage?: string;
}

