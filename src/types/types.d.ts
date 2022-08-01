import React from 'react';

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

export interface CardPhotoFrameProps extends WrapperProps {
  style: {
    [styleName: string]: string;
  } | null;
}

export interface SunnoteSystemProps {
  handleMemberClick: (subject: LandingCardSubject) => void;
  handleSunnoteClick: (subject: LandingCardSubject) => void;
  cardSubject: LandingCardSubject;
}

export interface MemberPlanetProps {
  _id: string;
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

export interface OrbitStrokeProps {
  sizing: number;
}

export interface SunnoteProps {
  handleClick: (subject: LandingCardSubject) => void;
  isAnimating: boolean;
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
  error: FieldError;
  className?: string;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<HTMLInputElement>;
    name: string;
  };
}

export interface ColorInputProps {
  defaultValue: string;
  isSubmitted: boolean;
  setFormValue: (color: string) => void;
  setFormError: (error: FieldError) => void;
  clearFormError: () => void;
  error: FieldError;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<HTMLInputElement>;
    name: string;
  };
}

export interface TextAreaProps {
  className?: string;
  error: FieldError;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: LegacyRef<HTMLTextAreaElement>;
    name: string;
  };
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

export interface DashboardCardNavProps {
  arrayLength: number;
}

export interface ModalOverlayProps {
  handleClick: () => void;
}

export interface ModalProps {
  handleClose: () => void;
}

export interface DataDeleteButtonProps {
  handleClick: () => void;
}

export interface ModalCardProps extends WrapperProps, ModalProps {}

export interface CardButtonProps {
  _id: string;
  index?: number;
}

export interface MemberDetailsModalProps extends ModalProps, CardButtonProps {}

export interface DataDeleteModalProps extends ModalProps, CardButtonProps {}

export interface UpdateFormProps {
  defaultValues: Member | SocialMediaItem | {};
  submitHandler:
    | ((data: MembersFormData) => void)
    | ((data: SocialMediaFormData) => void);
  action: 'create' | 'edit';
}

export interface MembersFormData {
  name: string;
  instrument: string;
  orbitRadius: number;
  color: string;
  biography: string;
  avatarPath: string;
}

export interface SocialMediaFormData {
  name: string;
  url: string;
  iconPath: string;
}

export interface SocialMediaCardProps extends SocialMediaItem {
  index: number;
}

export interface BandImageProps {
  path: string;
}

export interface BandEditFormData {
  info: string;
}
