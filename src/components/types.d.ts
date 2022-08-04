import { ChangeHandler, FieldError } from 'react-hook-form';
import {
  SocialMediaFormData,
  SocialMediaItem,
  MembersFormData,
  WrapperProps,
  ModalProps,
  Member,
} from 'types';

export interface ColorInputProps {
  defaultValue: string;
  isSubmitted: boolean;
  setFormValue: (color: string) => void;
  setFormError: (error: FieldError) => void;
  clearFormError: () => void;
  error: FieldError | undefined;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: React.Ref<HTMLInputElement>;
    name: string;
  };
}

export interface DashboardCardNavProps {
  arrayLength: number;
}

export interface DataDeleteButtonProps {
  handleClick: () => void;
}

export interface UpdateFormProps {
  defaultValues: Member | SocialMediaItem | {};
  submitHandler:
    | ((data: MembersFormData) => void)
    | ((data: SocialMediaFormData) => void);
  action: 'create' | 'edit';
}

export interface TextAreaProps {
  className?: string;
  error: FieldError | undefined;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: LegacyRef<HTMLTextAreaElement>;
    name: string;
  };
}

export interface ModalCardProps extends WrapperProps, ModalProps {}

export interface ModalOverlayProps {
  handleClick: () => void;
}

export interface PhotoUploadFormProps {
  inputName: string;
  handleSettingFile: (source: string | ArrayBuffer | null) => void;
  handleUpload: (file: File) => void;
}
