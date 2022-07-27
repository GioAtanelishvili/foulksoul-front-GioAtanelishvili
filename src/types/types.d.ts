export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export interface ClassNameProps {
  className?: string;
}

export type LandingCardSubject =
  | { subject: 'band'; memberId: null }
  | { subject: 'member'; memberId: string };

export interface LandingCardProps {
  subject: LandingCardSubject;
}

export interface SunnoteSystemProps {
  handleMemberClick: (subject: LandingCardSubject) => void;
  handleSunnoteClick: (subject: LandingCardSubject) => void;
}

export interface Member {
  _id: string;
  name: string;
  instrument: string;
  orbitRadius: number;
  color: string;
  biography: string;
  avatarPath: string;
}

export interface SocialMediaItem {
  _id: string;
  name: string;
  url: string;
  iconPath: string;
}

export interface BandDetails {
  info: string;
  imagePath: string;
}
