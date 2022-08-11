import { WrapperProps, LandingCardSubject } from 'types';

export interface CardPhotoFrameProps extends WrapperProps {
  style: {
    [styleName: string]: string;
  } | null;
}

export interface LandingCardProps {
  subject: LandingCardSubject;
}

export interface MemberPlanetProps {
  id: string;
  name: string;
  color: string;
  width: number;
  avatarPath: string;
  cardSubject: LandingCardSubject;
  animationTiming: number;
  index: number;
  handleClick: (subject: LandingCardSubject) => void;
}

export interface MemberPlanetOrbitProps extends WrapperProps {
  sizeRatio: number;
  isAnimating: boolean;
  animationTiming: number;
}

export interface SunNoteProps {
  handleClick: (subject: LandingCardSubject) => void;
  isAnimating: boolean;
}

export interface SunNoteSystemProps {
  handleMemberClick: (subject: LandingCardSubject) => void;
  handleSunNoteClick: (subject: LandingCardSubject) => void;
  cardSubject: LandingCardSubject;
}
