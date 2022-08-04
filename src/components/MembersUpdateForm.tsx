import { SubmitHandler, useForm } from 'react-hook-form';

import { Input, ColorInput, MemberTextArea, UpdateFormButton } from './index';
import { UpdateFormProps } from './types';
import { toNumber } from 'helpers';
import { Member } from 'types';

const HEX_COLOR_CODE_REGEXP = /^#(([0-9a-f]){6}$|([0-9A-F]){6}$)/;
const GEORGIAN_LETTERS_REGEXP = /^[\u10D0-\u10F0]+$/;
const GEORGIAN_TEXT_REGEXP = /^[\u10D0-\u10F0,.?!'"-_@0-9\s]+$/;
const INT_REGEXP = /^\d+$/;

const MembersUpdateForm: React.FC<UpdateFormProps> = (props) => {
  const defaultValues = props.defaultValues;

  const {
    register,
    formState: { errors, isSubmitted },
    setValue,
    setError,
    clearErrors,
    getValues,
    handleSubmit,
  } = useForm<Member>({ mode: 'onSubmit', defaultValues });

  return (
    <form
      onSubmit={handleSubmit(props.submitHandler as SubmitHandler<Member>)}
      className='w-full mt-15 flex flex-col items-center'
      data-test-id='members-update-form'
      noValidate
    >
      <Input
        id='name'
        type='text'
        placeholder='სახელი'
        error={errors['name']}
        className='w-64'
        register={register('name', {
          required: 'სახელი სავალდებულოა!',
          minLength: {
            value: 3,
            message: 'გამოიყენეთ მინ. 3 სიმბოლო!',
          },
          pattern: {
            value: GEORGIAN_LETTERS_REGEXP,
            message: 'გამოიყენეთ მხოლოდ ქართული ასოები!',
          },
        })}
      />
      <div className='mt-11 flex justify-center gap-8'>
        <Input
          id='instrument'
          type='text'
          placeholder='ინსტრუმენტი'
          error={errors['instrument']}
          register={register('instrument', {
            required: 'ინსტრუმენტი სავალდებულოა!',
            minLength: {
              value: 2,
              message: 'გამოიყენეთ მინ. 2 სიმბოლო!',
            },
            pattern: {
              value: GEORGIAN_LETTERS_REGEXP,
              message: 'გამოიყენეთ მხოლოდ ქართული ასოები!',
            },
          })}
        />
        <Input
          id='orbit-radius'
          type='text'
          placeholder='ორბიტის რადიუსი'
          error={errors['orbitRadius']}
          register={register('orbitRadius', {
            required: 'ორბიტის რადიუსი სავალდებულოა!',
            pattern: {
              value: INT_REGEXP,
              message: 'გამოიყენეთ მხოლოდ ციფრები!',
            },
            setValueAs: toNumber,
          })}
        />
        <ColorInput
          defaultValue={getValues('color')}
          isSubmitted={isSubmitted}
          setFormValue={(color) => setValue('color', color)}
          setFormError={(error) => setError('color', error)}
          clearFormError={() => clearErrors('color')}
          error={errors['color']}
          register={register('color', {
            required: 'ფერი სავალდებულოა!',
            pattern: {
              value: HEX_COLOR_CODE_REGEXP,
              message: 'უნდა ემთხვეოდეს HEX ფორმატს!',
            },
          })}
        />
      </div>
      <MemberTextArea
        error={errors['biography']}
        register={register('biography', {
          required: 'ბიოგრაფია სავალდებულოა!',
          pattern: {
            value: GEORGIAN_TEXT_REGEXP,
            message: 'გამოიყენეთ მხოლოდ ქართული ასოები!',
          },
        })}
      />
      <UpdateFormButton>
        {props.action === 'create' ? 'დაამატე წევრი' : 'შეცვალე წევრი'}
      </UpdateFormButton>
    </form>
  );
};

export default MembersUpdateForm;
