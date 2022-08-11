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

export interface OrbitStrokeProps {
  sizing: number;
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
  error: FieldError | undefined;
  className?: string;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<HTMLInputElement>;
    name: string;
  };
}

export interface LoginFormData {
  nickname: string;
  password: string;
}

export interface ModalProps {
  handleClose: () => void;
}

export interface CardButtonProps {
  id: string;
}

export interface PhotoUploadButtonProps extends CardButtonProps {}

export interface DataDeleteModalProps extends ModalProps, CardButtonProps {}

export interface PhotoUploadModalProps extends ModalProps, CardButtonProps {}

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

export interface BandEditFormData {
  info: string;
}
