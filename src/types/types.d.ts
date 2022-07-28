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

export interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<HTMLInputElement>;
    name: string;
  };
  error: FieldError;
  className?: string;
}

export interface LoginFormData {
  nickname: string;
  password: string;
}

export interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export interface MemberAvatarProps {
  background: string;
  avatarPath: string;
  index: number;
  className?: string;
}

export interface MemberCardProps extends Member {
  index: number;
}

export interface MembersNavProps {
  totalMembers: number;
}

export interface ModalOverlayProps {
  handleClick: () => void;
}

export interface ModalProps {
  handleClose: () => void;
}

export interface ModalCardProps extends WrapperProps, ModalProps {}

export interface CardButtonProps {
  _id: string;
  index: number;
}

export interface MemberDetailsModalProps extends ModalProps, CardButtonProps {}

export interface DataDeleteModalProps extends ModalProps, CardButtonProps {
  // subject: 'member' | 'social-media';
  // service: (token: string, id: string) => Promise<AxiosInstance<any, any>>;
}
