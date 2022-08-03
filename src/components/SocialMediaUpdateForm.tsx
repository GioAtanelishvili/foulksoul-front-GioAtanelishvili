import { SubmitHandler, useForm } from 'react-hook-form';

import { UpdateFormProps, SocialMediaItem } from 'types';
import { Input, UpdateFormButton } from './index';

const HTTP_URI_REGEXP =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const SocialMediaUpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { defaultValues } = props;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SocialMediaItem>({
    mode: 'onSubmit',
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(
        props.submitHandler as SubmitHandler<SocialMediaItem>
      )}
      className='w-full mt-48 flex flex-col items-center'
      data-testid='social-media-update-form'
      noValidate
    >
      <Input
        id='name'
        type='text'
        placeholder='სახელი'
        error={errors['name']}
        className='w-64 mb-11'
        register={register('name', {
          required: 'სახელი სავალდებულოა!',
          minLength: {
            value: 2,
            message: 'გამოიყენეთ მინ. 2 სიმბოლო!',
          },
        })}
      />
      <Input
        id='url'
        type='url'
        placeholder='ბმული'
        error={errors['url']}
        className='w-120'
        register={register('url', {
          required: 'ბმული სავალდებულოა!',
          pattern: {
            value: HTTP_URI_REGEXP,
            message: 'ბმული უნდა იყოს ვალიდური!',
          },
        })}
      />
      <UpdateFormButton className='mt-20'>
        {props.action === 'create'
          ? 'დაამატე სოციალური ბმული'
          : 'შეცვალე სოციალური ბმული'}
      </UpdateFormButton>
    </form>
  );
};

export default SocialMediaUpdateForm;
