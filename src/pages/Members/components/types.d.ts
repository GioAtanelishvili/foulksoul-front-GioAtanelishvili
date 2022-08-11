import { ModalProps, CardButtonProps } from 'types';

export interface MemberAvatarProps {
  background: string;
  avatarPath: string;
  source?: string;
  className?: string;
}

export interface MemberCardProps {
  id: string;
  name: string;
  instrument: string;
  orbitRadius: number;
  color: string;
  biography: string;
  avatarPath: string;
  index: number;
}

export interface MemberDetailsModalProps extends ModalProps, CardButtonProps {}
