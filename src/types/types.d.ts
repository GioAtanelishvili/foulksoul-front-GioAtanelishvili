export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export interface ClassNameProps {
  className?: string;
}

export type LandingCardSubject =
  | { subject: 'band' }
  | { subject: 'member'; memberId: string };

export interface LandingCardProps {
  subject: LandingCardSubject;
}

export interface SunnoteSystemProps {
  handleMemberClick: (subject: { subject: 'member'; memberId: string }) => void;
  handleSunnoteClick: (subject: { subject: 'band' }) => void;
}
