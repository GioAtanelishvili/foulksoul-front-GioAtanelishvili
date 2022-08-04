import { Member, ModalProps, CardButtonProps } from 'types';

export interface MemberAvatarProps {
  background: string;
  avatarPath: string;
  source?: string;
  className?: string;
}

export interface MemberCardProps extends Member {
  index: number;
}

export interface MemberDetailsModalProps extends ModalProps, CardButtonProps {}
