import { InputProps } from 'types';

export interface LoginInputProps extends InputProps {
  clearError?: UseFormClearErrors<LoginFormData>;
}
