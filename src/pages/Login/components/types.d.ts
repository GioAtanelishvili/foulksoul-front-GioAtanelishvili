import { InputProps, LoginFormData } from 'types';

export interface LoginInputProps extends InputProps {
  clearError?: UseFormClearErrors<LoginFormData>;
}
