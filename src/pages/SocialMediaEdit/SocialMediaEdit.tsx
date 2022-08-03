import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';

import { SocialMediaItem, SocialMediaFormData } from 'types';
import { DataContext, AuthContext } from 'context';
import { editSocialMedia } from 'services';
import {
  DashboardHeader,
  SocialMediaUpdateForm,
  LoadingSpinner,
} from 'components';

const SocialMediaEdit: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { socialMedia, updateSocialMedia } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const { state } = useLocation();

  const { _id, name, url } = state as SocialMediaItem;

  const { page } = state as any;

  const handleSubmit = async (data: SocialMediaFormData) => {
    setIsLoading(true);

    try {
      await editSocialMedia(data, _id, token);
      setIsLoading(false);

      const updatedSocialMedia = socialMedia.map((item) => {
        if (item._id === _id) {
          return { ...item, ...data };
        }

        return item;
      });

      updateSocialMedia(updatedSocialMedia);
      navigate(`../social-media?page=${page}`);
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === 403) {
        navigate('/403');
      } else if (status === 500) {
        navigate('/500');
      }
    }
  };

  return (
    <Fragment>
      <DashboardHeader>შეცვალე სოციალური ბმული</DashboardHeader>
      <SocialMediaUpdateForm
        defaultValues={{ name, url }}
        submitHandler={handleSubmit}
        action='edit'
      />
      <Link
        to={`../social-media?page=${page}`}
        className='text-form-go-back-link mt-5 text-lg font-bold font-nino-mtavruli underline'
      >
        გადი უკან
      </Link>
      {isLoading && (
        <LoadingSpinner className='absolute scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
      )}
    </Fragment>
  );
};

export default SocialMediaEdit;
